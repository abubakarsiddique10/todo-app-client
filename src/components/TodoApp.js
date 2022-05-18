import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TodoApp = () => {
   const [users, setUsers] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[users]);

    const hadleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const description = event.target.description.value;
        const user = {name, description}
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            toast('added')
        })
    }

    const handleDelete= id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount) {
                toast('Delete')
            }
        })
    }
    return(
       <div className="">
            <div className="h-100 mt-5 d-flex flex-column justify-content-center align-items-center">
                <h1>To-Do App</h1>
                <Form onSubmit={hadleSubmit} className="w-50">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control type="text" placeholder="Task Name" name="name"/>
                    </Form.Group>

                    <Form.Label>Description</Form.Label>
                    <textarea className="w-100 h-25" name='description' placeholder="Description"></textarea>
                    <Button variant="primary d-block w-100" type="submit">
                        Submit
                    </Button>
                   
                </Form>
            </div>

            {
                users.map(user => <div key={user._id}>
                    <div className=" mt-5 d-flex justify-content-center align-items-center">
                        <h5>{user.name}</h5>
                        <p className="mx-5">{user.description}</p>
                        <Button onClick={()=>handleDelete(user._id)}>Delete</Button>
                    </div>
                </div>)
            }
            <ToastContainer/>
       </div>
    )
}
export default TodoApp;