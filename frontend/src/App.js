import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

export default function App() {

  
   const [first, setFirst] = useState("")
   const [last, setLast] = useState("User not found")
 
     return (
       <div style={{backgroundColor : 'lightblue', width : 200, padding : 100, margin : 400}}>
        
        <input type="text" name="firstName" placeholder='first name goes here' onChange={(e) => {setFirst (e.target.value)}}/> 
        <button onClick={() => {fetch("/firstName/" + first)
          .then(response => response.json())
          .then(data => {setLast(data.lastName);})
          .catch(error => {console.log(error);})
        }}>Submit</button>
         <h3> Last name:  </h3>
         <h3> {last} </h3>
       </div>
     );
 }
 
