import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()


var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_NAME
})

con.connect((err) => {
    if (err) {
        console.error(err);
        return
    }
})

const query_prompt = (sql) => {
    return new Promise((resolve, reject) => {        
        con.query(sql,  (err, result) => {
            if (err) {
                reject(err)
                return
            }
  

            resolve(result)
        })
    })
}


export default query_prompt;

///////////////////////////
// USAGE
///////////////////////////

// query_prompt()
//   .then((result) => {
//     result.forEach(task => {
//         console.log(task.title)
//     });
//     process.exit()
//   })
//   .catch((err) => {
//     console.error(err) // Handle any errors that occurred
//   })
