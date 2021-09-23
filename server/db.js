// Require pool library
const Pool = require("pg").Pool;

// Create the schema and set user, password, host, and database
const pool = new Pool({
  user: "postgres",
  password: "Basketball1",
  host: "localhost",
  database: "perntodo",
});

// export the schema
module.exports = pool;
