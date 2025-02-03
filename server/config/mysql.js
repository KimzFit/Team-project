const mysql2 = require('mysql2/promise')


const pool = mysql2.createPool({
  host : "db",
  user : "root",
  database : "my_database",
  password : "321341",
})


module.exports = pool