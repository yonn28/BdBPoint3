const mariaDb = require('mariadb');


const pool =mariaDb.createPool({
    host: '127.0.0.1',
    port: '3307',
    user: 'root',
    password: 'mypassword',
    database: 'BdB'
});

async function getConnection(){
    try {
        const connection = await pool.getConnection();
        return connection;
    } catch (err) {
        console.log(err);   
    }
}


module.exports = { getConnection };