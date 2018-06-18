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
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });