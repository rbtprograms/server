require('dotenv').config();

// basic express app
const express = require('express');
const app = express();

// superagent client AJAX library for calling 3rd party APIs
// const request = require('superagent');

// middleware (cors and read json body)
const cors = require('cors');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
// server files in public directory
app.use(express.static('public'));

// connect to the database
const client = require('./db-client');

// const auth = (req, res, next) => {
//   const id = req.get('Authorization');
//   if(!id || isNaN(id)) {
//     next('No Authentication');
//     return;
//   }

//   req.userId = +id;
//   next();
// };

app.get('/api/search', (req, res, next) => {
  client.query(`
    SELECT
        food,
        type_id,
        month_id
      FROM foods 
  `).then(result => {
    res.send(result.rows);
  })
    .catch(next);
});
// // routes
// app.get('/api/neighborhoods', auth, (req, res, next) => {

//   client.query(`
//     select id, 
//       name, 
//       quadrant_id as "quadrantId", 
//       description, 
//       population, 
//       founded
//     from neighborhoods
//     order by name;
//   `).then(result => {
//     res.send(result.rows);
//   })
//     .catch(next);

// });

// app.post('/api/neighborhoods', auth, (req, res, next) => {
//   const body = req.body;
//   if(body.name === 'error') return next('bad name');

//   // get user id via:
//   const userId = req.userId;
  
//   client.query(`
//     insert into neighborhoods (name, quadrant_id, population, founded, description)
//     values ($1, $2, $3, $4, $5, $6)
//     returning *, quadrant_id as "quadrantId";
//   `,
//   [body.name, body.quadrantId, body.population, body.founded, body.description]
//   ).then(result => {
//     // send back object
//     res.send(result.rows[0]);
//   })
//     .catch(next);
// });

// app.put('/api/neighborhoods/:id', auth, (req, res, next) => {
//   const body = req.body;

//   client.query(`
//     update neighborhoods
//     set
//       name = $1,
//       quadrant_id = $2,
//       population = $3,
//       founded = $4,
//       description = $5
//     where id = $6
//     returning *, quadrant_id as "quadrantId";
//   `,
//   [body.name, body.quadrantId, body.population, body.founded, body.description, req.params.id]
//   ).then(result => {
//     res.send(result.rows[0]);
//   })
//     .catch(next);
// });

// app.delete('/api/neighborhoods/:id', auth, (req, res, next) => {
//   client.query(`
//     delete from neighborhoods where id=$1;
//   `,
//   [req.params.id]
//   ).then(() => {
//     res.send({ removed: true });
//   })
//     .catch(next);
// });

// app.get('/api/quadrants', auth, (req, res, next) => {

//   client.query(`
//     select 
//       q.id, q.name, q.direction,
//       count(n.id) as "neighborhoodCount",
//       avg(n.population) as "populationAvg "
//     from quadrants q
//     left join neighborhoods n
//     on q.id = n.quadrant_id
//     group by q.id
//     order by q.name;
//   `)
//     .then(result => {
//       res.send(result.rows);
//     })
    
//     .catch(next);
// });

// app.get('/api/quadrants/:id', auth, (req, res, next) => {

//   const quadrantPromise = client.query(`
//     select id, name, direction
//     from quadrants q
//     where q.id = $1;
//   `,
//   [req.params.id]);

//   const neighborhoodsPromise = client.query(`
//     select id, name, description
//     from neighborhoods
//     where quadrant_id = $1;
//   `,
//   [req.params.id]);

//   Promise.all([quadrantPromise, neighborhoodsPromise])
//     .then(promiseValues => {
//       const quadrantResult = promiseValues[0];
//       const neighborhoodsResult = promiseValues[1];

//       if(quadrantResult.rows.length === 0) {
//         res.sendStatus(404);
//         return;
//       }

//       const quadrant = quadrantResult.rows[0];
//       const neighborhoods = neighborhoodsResult.rows;
//       quadrant.neighborhoods = neighborhoods;

//       res.send(quadrant);
//     })
//     .catch(next);
// });



// Add to shopping list
app.post('/api/list', (req, res, next) => {
  const body = req.body;
  Promise.all(
    body.map(item => {
      client.query(`
      INSERT INTO shopping_list (item, user_id, selected)
      VALUES ($1, $2, $3);
    `, [item.name, item.userid, item.selected])
        .then(result => result.rows[0]);
    })
  )
    .then(() => {
      res.send({ added : true });
    })
    .catch(next);
});

// Update shopping list
app.put('/api/list', (req, res, next) => {
  const body = req.body;
  console.log('the body is', body);
  Promise.all(
    body.map(item => {
      client.query(`
      UPDATE shopping_list
      SET selected=$1
      WHERE userid=$2 AND selected!=$1;
    `, [item.selected, item.id])
        .then(result => result.rows[0]);
    })
  )
    .then(() => {
      res.send({ updated : true });
    })
    .catch(next);
});

app.get('/api/list/:id', (req, res, next) => {
  const id = req.params.id;
  console.log('id is', id);
  client.query(`
    SELECT *
    FROM shopping_list
    WHERE user_id=$1;
  `, [id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);
});


// Sign-up
app.post('/api/auth/signup', (req, res, next) => {
  const body = req.body;
  client.query(`
    SELECT COUNT(*)
    FROM users
    WHERE username = $1;  
  `, [body.username])
    .then(result => {
      if(result.rows[0].count > 0) {
        throw new Error('Username already exists!');
      }

      return client.query(`
        INSERT INTO users (username, password)
        VALUES ($1, $2)
        RETURNING id, username
      `,
      [body.username, body.password]);
    })
    .then(result => {
      const row = result.rows[0];
      res.send({ 
        id: row.id,
        username: row.username
      });
    })
    .catch(next);
});

// Sign-in
app.post('/api/auth/signin', (req, res, next) => {
  const body = req.body;
  console.log('\n\nbody is', body);
  client.query(`
    SELECT *
    FROM users
    WHERE username = $1;
  `, [body.username])
    .then(result => {
      const row = result.rows[0];
      console.log('\n\nrow', result);
      if(!row || row.password !== body.password) {
        throw new Error ('Incorrect username and/or password!');
      }
      res.send({ 
        id: row.id,
        username: row.username
      });
    })
    .catch(next);
});

// must use all 4 parameters so express "knows" this is custom error handler!
// eslint-disable-next-line
app.use((err, req, res, next) => {
  console.log('***SERVER ERROR**\n', err);
  let message = 'internal server error';
  if(err.message) message = err.message;
  else if(typeof err === 'string') message = err;
  res.status(500).send({ message });
});

// start "listening" (run) the app (server)
const PORT = process.env.PORT;
app.listen(PORT, () => console.log('server running on port', PORT));