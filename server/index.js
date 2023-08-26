const express = require('express')
const app = express()
const PORT = 5000
const cors = require('cors')

const pool = require('./db.js')

//middleware
app.use(cors())
app.use(express.json()) // Allows us to access the request body


//Routes : 

// 1- Create a todo :
app.post('/todo', async(req, res) => {
    try {
        const { task } = req.body
        console.log(req.body)
        const newTodo = await pool.query(
            "INSERT INTO todo (task) VALUES($1) returning *", 
            [task])
        res.json(newTodo)
    } catch (error) {
        console.log(error.message)
    }
})

// 2- Retrieve all todo :
app.get("/alltodo", async(req, res) => {
    try {
        const allTodo = await pool.query(
            "Select * from todo"
        )
        res.json(allTodo.rows)
    } catch (error) {
        console.log(error.message)
    }
})

// 3- Retrieve a todo :
app.get("/atodo/:id", async(req, res) => {
    try {
        const { id } = req.params
        const aTodo = await pool.query(
            "select * from todo where id = $1"
        ,[id])
        res.json(aTodo.rows)
    } catch (error) {
        console.log(error.message)
    }
})

// 4- Update a todo :
app.put("/updatetodo/:id", async(req, res) => {
    try {
        const { id } = req.params
        const { task } = req.body

        console.log(id)
        console.log(task)
        const updateTodo = await pool.query(
            "update todo set task = $1 where id = $2",
        [task, id])

        res.json(updateTodo)
    } catch (error) {
        console.log(error.message)
    }
})


// 5- Delete a todo :

app.delete("/deletetodo/:id", async(req, res) => {
    try {
        const { id } = req.params
        const deleteTodo = await pool.query(
            "delete from todo where id = $1",
        [id])
        res.send(deleteTodo)
    } catch (error) {
        console.log(error.message)
    }
})


app.listen(PORT, () => {
    console.log("Server is running on port : " + PORT)
})