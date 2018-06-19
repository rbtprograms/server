require('dotenv').config();
const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS seasons (
    id SERIAL PRIMARY KEY,
    season VARCHAR(256) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS months (
    id SERIAL PRIMARY KEY,
    month VARCHAR(256),
    season_id INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS types (
    id SERIAL PRIMARY KEY,
    type VARCHAR(256)
  );

  CREATE TABLE IF NOT EXISTS foods (
    id SERIAL PRIMARY KEY,
    food VARCHAR(256),
    type_id INTEGER NOT NULL,
    month_id INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(256) UNIQUE NOT NULL,
    email VARCHAR(256) UNIQUE,
    password VARCHAR(256),
    shopping_list_id int,
    favorites int
  );

  CREATE TABLE IF NOT EXISTS shopping_list (
    id SERIAL PRIMARY KEY,
    item VARCHAR(256) NOT NULL,
    user_id INTEGER NOT NULL,
    selected BOOLEAN NOT NULL
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });