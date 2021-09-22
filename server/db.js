const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'Basketball1',
  host: 'localhost',
  database: 'perntodo'
});

module.exports = pool;