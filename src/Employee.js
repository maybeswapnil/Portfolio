import React, { useEffect, useState } from 'react';
import './App.css';

function Getdata(props) {

  const [employeeList, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes()
  },[])

  const getRecipes = async (props) => {
    const req = await fetch('http://localhost:8080/retrieve_details');
    const data = await req.json();
    console.log(data);
    setRecipes(data);
  };  
      return (
        <div>
                <h1>{employeeList.name}</h1>
        </div>
      );
}
export var cartData = [];
export function addData(data) {
  cartData.push(data[0].label);
   
}

export default Getdata;
