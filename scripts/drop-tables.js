require('dotenv').config();
const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS foods;
  DROP TABLE IF EXISTS types;
  DROP TABLE IF EXISTS months;
  DROP TABLE IF EXISTS seasons;
  DROP TABLE IF EXISTS users;
  DROP TABLE IF EXISTS shopping_list;
  DROP TABLE IF EXISTS favorite_recipes;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });