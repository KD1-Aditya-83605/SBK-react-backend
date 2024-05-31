const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Mysql@123',
  port: 3306,
  database: 'airbnb',
  connectionLimit: 10,
})

module.exports = {
  pool,
}
