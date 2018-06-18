const DATABASE_URL = 'postgres://localhost:5432/seasonal';

// // windows and linux
// require('dotenv').config();
// const loginString = process.env.POSTGRES_LOGIN;
// const DATABASE_URL = `postgres://${loginString}@localhost:5432/seasonal`;

const pg = require('pg');
const Client = pg.Client;

const client = new Client(DATABASE_URL);
client.connect()
  .then(() => console.log('connected to db', DATABASE_URL))
  .catch(err => console.error('connection error', err));

client.on('error', err => {
  console.error('\n**** DATABASE ERROR ****\n\n', err);
});

module.exports = client;