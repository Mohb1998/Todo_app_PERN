import React, { Fragment, useState } from "react"

function InputTodo(){

    const [task, setTask] = useState("")

    function handleChange(event){
        setTask(event.target.value)
    }

    async function onSubmitForm(event){
        event.preventDefault()

        try {
            const body = {task}

            const response = await fetch("http://localhost:5000/todo", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            console.log(response)
            window.location = "/"
        } catch (error) {
            console.error(error.message)
        }
    }

    return(
        <Fragment>
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form onSubmit={onSubmitForm} className="d-flex mt-5">
                <input type="text" className="form-control" value={task} onChange={handleChange}/>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
}

export default InputTodo;