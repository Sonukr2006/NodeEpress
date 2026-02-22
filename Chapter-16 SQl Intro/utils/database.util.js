import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'sonu',
    password : 'Sonu@123',
    database : 'airbnb'
})

export default pool.promise();