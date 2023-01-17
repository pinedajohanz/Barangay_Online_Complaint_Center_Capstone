const  Pool  = require('pg').Pool
  
const pool =  new  Pool({
    user:  'postgres',
    password:  'redalert333',
    host:  'localhost',
    port:  5432,  
    database:  'CP_new'
});

module.exports = pool;