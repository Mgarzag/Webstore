const Pool = require('pg').Pool
const pool = new Pool({
  user: 'rhondagilliard',
  host: 'localhost',
  database: 'ecommerce_react',
  password: 'root',
  port: 5432,
});