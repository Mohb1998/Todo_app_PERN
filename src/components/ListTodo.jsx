import React, { Fragment, useState, useEffect } from "react"

import EditTodo from "./EditTodo"

function ListTodo(){

    const [todos, setTodos] = useState([])

    async function getTodos(){
        try {
            const response = await fetch("http://localhost:5000/alltodo")
            const jsonData = await response.json()

            setTodos(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getTodos()
    },[])

    async function deleteTodo(id)
    {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/deletetodo/${id}`, {
                method: "DELETE"
            })
            console.log(deleteTodo)
            setTodos(todos.filter(todo => todo.id !== id))
        } catch (error) {
            console.error(error.message)
        }
    }

    return(
        <Fragment>
            <table className="table mt-5 text-center">
                <thead> 
                <tr>
                    <th>Task</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {todos.map(todo => (
                    <tr>
                        <td>{todo.task}</td>
                        <td>
                            <EditTodo
                                todo = {todo}
                            />
                        </td>
                        <td>
                            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodo