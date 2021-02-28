const Pool = require('pg').Pool;

const pool = new Pool({
    "user": "postgres",
    "password": "Admin123",
    "database": "project_x",
    "host": "localhost",
    "port": 5432
});

module.exports = pool;