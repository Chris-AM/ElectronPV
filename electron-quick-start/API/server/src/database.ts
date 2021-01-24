import mysql from 'promise-mysql';
import keys from './keys';

//createPool expects a config argument
const POOL = mysql.createPool(keys.database);

POOL.getConnection().then(connection => {
  POOL.releaseConnection(connection);
});

export default POOL;