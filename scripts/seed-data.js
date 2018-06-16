require('dotenv').config();
const client = require('../db-client');
const players = require('./players.json');

Promise.all(
  players.map(player => {
    return client.query(`
        INSERT INTO players (first_name, last_name, player_id, team_id)
        VALUES ($1, $2, $3, $4);
    `,
    [player.firstName, player.lastName, player.playerId, player.teamId]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());