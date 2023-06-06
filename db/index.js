require('dotenv').config();
const { Pool } = require('pg');

const db = new Pool({
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB,
  max: 40,
});

module.exports = { db };
