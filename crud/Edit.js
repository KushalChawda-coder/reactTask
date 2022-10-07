import React,{useState, useEffect} from "react";
import {Button,Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Employee';
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom';


function Edit(){

    const [name,setName]= useState('');
    const [age,setAge]= useState('');
    const  [id,setId]= useState('');

    let history = useNavigate();
    var index = Employee.map(function(e){
        return e.id
        }).indexOf(id);

    const handleSubmit=(e) => {
        e.preventDefault();

        let a = Employee[index];
        a.name=name;
        a.age=age

        history('/');
    }

    useEffect(() =>{
        setId(localStorage.getItem('Id'))
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
    
    },[])

    return(
        <div>
             <form className="d-grid gap-2" style={{margin:"200px"}}>  
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text"  value={name} placeholder="enter user name" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <Form.Control type="text" value={age} placeholder="enter user Age" required onChange={(e) => setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button> 
            </form>
        </div>
    )

}

export default Edit;