import React,{useState} from "react";
import {Button,Form, FormGroup} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Employee';
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom';

function Add(){

    const[name,setName]= useState('');
    const[age,setAge]= useState('');

    let history = useNavigate();

    const handleSubmit=(e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId= ids.slice(0,8);
        let a = name,
        b = age;
        Employee.push({id:uniqueId,name : a,age :b });
        history('/');
    }


    return <div>
        <form className="d-grid gap-2" style={{margin:"25px"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="enter user name" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <Form.Control type="text" placeholder="enter user Age" required onChange={(e) => setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">submit</Button> 
        </form>
    </div>
}
export default Add;
