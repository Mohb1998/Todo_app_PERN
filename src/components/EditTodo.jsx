import React, { Fragment, useState } from 'react'

export default function EditTodo(props) {

    const [task, setTask] = useState(props.todo.task)

    async function updateTask(e)
    {
        e.preventDefault()
        try {
            const body = { task }
            const response = await fetch(`http://localhost:5000/updatetodo/${props.todo.id}`, {
                method:"PUT",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            console.log(response)
            window.location = "/"
        } catch (error) {
            console.error(error.message)
        }
    }
    
    return (
        <Fragment>
            <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target={`#id${props.todo.id}`}>Edit</button>
            <div className="modal fade" id={`id${props.todo.id}`} onClick={() => setTask(props.todo.task)} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit todo</h4>
                        </div>
                    <div className="modal-body">
                        <input type="text" className="form-control" value={task} onChange={e => {
                            setTask(e.target.value)
                        }}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" onClick={e => updateTask(e)}>Edit</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setTask(props.todo.task)}>Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
