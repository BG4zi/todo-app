//TODO:: pretendation from sqli.
//TODO:: regex stuffs for json datums and dynamic routes.

import express  from 'express'
import query_prompt from './db_connection.js'
import bodyParser from "body-parser"

const app = express()

const PORT = 3000

app.use(bodyParser())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello!")
})

app.get('/tasks', (req, res) => {
    query_prompt('SELECT * FROM tasks;')
        .then((result) => {
            res.send(result)
        })
})

app.get('/tasks/:id', (req, res) => {
    query_prompt(`SELECT * FROM tasks WHERE id=${req.params.id};`)
        .then((result) =>{
            res.send(result)
        })
})

app.post('/tasks', (req, res) => {
    console.log(req.body.title)
    var query = `INSERT INTO tasks (title, is_done) VALUES ('${req.body.title}', ${req.body.is_done});`
    query_prompt(query)
        .then((result) => {
            console.log("Successfully!")
            res.send("Successfully!")
        })
        .catch((err) => {
            console.error(err)
        })
})

app.delete('/tasks/:id', (req, res) => {
    query_prompt(`DELETE FROM tasks WHERE id=${req.params.id};`)
        .then((result)=>{
            res.send(`Task ${req.params.id} deleted successfully`)
        })
})

app.listen(PORT, () => {
    console.log(`App is listening on localhost:${PORT}`)
})