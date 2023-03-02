const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool();

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});
pool.on("connect", () => {
  console.log("connected to the database!");
});

const query = async (queryConf) => {
  const client = await pool.connect();
  try {
    const res = await client.query(queryConf);
    return res;
  } finally {
    client.release;
  }
};

module.exports = { query };
