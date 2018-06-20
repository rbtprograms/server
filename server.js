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

app.get('/api/user/:id/favorite-recipes', (req, res, next) => {
  client.query(`
    SELECT
        favorite_recipes_id
      FROM users 
  `).then(result => {
    res.send(result.rows);
  })
    .catch(next);
});

////////////////////////SHOPPING_LSIT////////////////////////////
// Get shopping_list by user_id
app.get('/api/list/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  console.log('id is', id);
  client.query(`
    SELECT *
    FROM shopping_list
    WHERE user_id=$1
    ORDER BY id ASC;
  `, [id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);
});

// Add to shopping list
app.post('/api/list', (req, res, next) => {
  const body = req.body;
  Promise.all(
    body.map(item => {
      client.query(`
      INSERT INTO shopping_list (item, user_id, selected)
      VALUES ($1, $2, $3);
    `, [item.item, item.user_id, item.selected])
        .then(result => result.rows[0]);
    })
  )
    .then(() => {
      res.send({ added : true });
    })
    .catch(next);
});

// Update shopping list
app.put('/api/list/update', (req, res, next) => {
  const body = req.body;
  console.log('\n\n\n the body is', body);
  Promise.all(
    body.map(item => {
      console.log('item is', item);
      client.query(`
      UPDATE shopping_list
      SET selected=$1
      WHERE user_id=$2
      AND NOT selected=$1
      AND item=$3;
    `, [item.selected, item.user_id, item.item])
        .then(result => {
          result.rows[0];
        });
    })
  )
    .then(result => {
      console.log('\n\n\n result is', result);
      res.send({ updated : true });
    })
    .catch(next);
});

// Delete selected items from shopping_list by user_id
app.delete('/api/list/update/:id', (req, res, next) => {
  const body = req.body;
  const id = req.params.id;
  Promise.all(
    body.map(item => {
      if(item.selected) {
        client.query(`
        DELETE FROM shopping_list
        WHERE user_id=$1
        AND item=$2;
      `, [id, item.item])
          .then(result => result.rows[0]);
      }
    })
  )
    .then(() => {
      res.send({ updated : true });
    })
    .catch(next);
});

// Delete shopping_list by user_id
app.delete('/api/list/:id', (req, res, next) => {
  const id = req.params.id;
  client.query(`
    DELETE FROM shopping_list
    WHERE user_id=$1;
  `, [id])
    .then(() => {
      res.send({ cleared : true });
    })
    .catch(next);
});

/////////////////////LOGIN//////////////////////////////
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
      console.log('\n\nrow', result.rows[0]);
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


///////////////////////////////////////////////////////////////
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