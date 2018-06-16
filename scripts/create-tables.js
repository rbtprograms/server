require('dotenv').config();
const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS players (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(256) NOT NULL,
      last_name VARCHAR(256) NOT NULL,
      player_id VARCHAR(128) NOT NULL,
      team_id VARCHAR(128) NOT NULL
    );

`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });