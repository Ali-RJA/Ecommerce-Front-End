import MySql from 'sync-mysql';

var connection = new MySql({
    host:"localhost",
    user:"test",
    password:"123456",
    database:"db"
});
export default connection;
