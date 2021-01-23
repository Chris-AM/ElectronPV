import mysql from 'mysql';
import keys from './keys';

//createPool expects a config argument
const POOL = mysql.createPool(keys.database);

POOL.getConnection((err, connection) => {
  if (err) throw err;
  connection.release();
  console.info('DB is connected')
});

export default POOL;