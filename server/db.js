//  creating a connection pool to a PostgreSQL database using the "pg" library in Node.js.
// Pool is used to manage a pool of connections to a PostgreSQL database.
const  Pool  = require('pg').Pool
  
const pool =  new  Pool({
    user:  'postgres',
    password:  'redalert333',
    host:  'localhost',
    port:  5432,  
    database:  'CP_new'
});

module.exports = pool;