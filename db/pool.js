const { Pool } = require('pg');

module.exports = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT || 5432 // the default port
})