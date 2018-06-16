require('dotenv').config();
const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS players;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });