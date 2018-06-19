require('dotenv').config();
const client = require('../db-client');
const foods = require('../data/foods.json');
const types = require('../data/types.json');
const months = require('../data/months.json');
const seasons = require('../data/seasons.json');
const users = require('../data/users.json');

Promise.all(
  seasons.map(season => {
    return client.query(`
        INSERT INTO seasons (season)
        VALUES ($1);
    `,
    [season.season]
    ).then(result => result.rows[0]);
  })
)
  .then(() => {
    return Promise.all(
      months.map(month => {
        return client.query(`
            INSERT INTO months (month, season_id)
            VALUES ($1, $2);
        `,
        [month.month, month.season_id]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(() => {
    return Promise.all(
      types.map(type => {
        return client.query(`
            INSERT INTO types (type)
            VALUES ($1);
        `,
        [type.type]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(() => {
    return Promise.all(
      foods.map(food => {
        return client.query(`
            INSERT INTO foods (food, type_id, month_id)
            VALUES ($1, $2, $3);
        `,
        [food.food, food.type_id, food.month_id]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(() => {
    return Promise.all(
      users.map(user => {
        return client.query(`
            INSERT INTO users (username, email, password, shopping_list_id, favorites)
            VALUES ($1, $2, $3, $4, $5);
        `,
        [user.username, user.email, user.password, user.shopping_list_id, user.favorites]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());