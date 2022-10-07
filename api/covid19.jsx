import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Api=()=>{

const [val,setVal]=useState([]);

const getCovidData = async () =>{
  const res= await fetch('https://data.covid19india.org/data.json');
  const actualData=await res.json();
  console.log(actualData.statewise)
  setVal(actualData.statewise);
}

useEffect(()=>{
  getCovidData();
},[])
  return(
    <>
    <h1 className="text-center">covid data</h1>
    <table className="table text-center table-striped">
  <thead>
    <tr>
      <th scope="col">state</th>
      <th scope="col">confirmed</th>
      <th scope="col">recoverd</th>
      <th scope="col">deths</th>
    </tr>
  </thead>
  <tbody>
   { val.map((current)=>{
     return( <tr>
      <th scope="row">{current.state}</th>
      <td>{current.confirmed}</td>
      <td>{current.recovered}</td>
      <td>{current.deaths}</td>
    </tr> )
   }) }
   
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Api;
