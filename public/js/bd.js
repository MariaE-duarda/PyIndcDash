const mysql = require('mysql')
const util = require('util')
const connectionString = 'mysql://root:root@localhost/projeto_pareos'
const db = {}
db.exe = async (sql, values) => {
    const conn = mysql.createConnection(connectionString)
    const query = util.promisify(conn.query).bind(conn)
    try{
        const rows = await query(sql, values)
        return rows
    }catch(e){
        console.log(e)
        return []
    }finally{
        conn.end()
    }
}

module.exports = bd