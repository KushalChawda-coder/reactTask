import React, { Fragment } from "react";
import { Button,Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Employee';
import {Link,useNavigate} from 'react-router-dom';


function Home(){
    let history = useNavigate();

    const  handleEdit = (id,name,age) =>{
        localStorage.setItem('name',name)
        localStorage.setItem('age',age)
        localStorage.setItem('Id',id)
        history('/')
    } 

    const  handleDelete = (id) =>{
        var index = Employee.map(function(e){
            return e.id
        }).indexOf(id);

        Employee.splice(index,1)
        history('/')
    } 
    return(
        <Fragment>
            <div style={{margin:"10px"}}>
                <Table striped bordered hover size="lg">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            Employee && Employee.length > 0 
                            ?
                            Employee.map((item) =>{
                                return(
                                    <tr>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                             {item.age} 
                                        </td>
                                        <td>  
                                            <Link to={`/edit`}>
                                             <Button onClick={() => handleEdit(item.id,item.name,item.age)}>Edit</Button>
                                             </Link>
                                             &nbsp;
                                             <Button onClick={() => handleDelete(item.id)}>Delete</Button>

                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data availabel"
                       }
                    </tbody>
                </Table>
                <br></br>
                <Link className="btn btn-primary" to={`/create`}>
                    <button className="btn btn-primary" size="lg">Insert new row</button>
                </Link>

            </div>
        </Fragment>
    )
}
export default Home;