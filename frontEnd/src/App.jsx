import React, { useEffect, useState } from 'react'
import './App.css'
function App() {
const [data, setData] = useState([])
  useEffect(()=> {
    fetch('http://localhost:8081/students/')
    .then(res => res.json())
   
    .then(data => setData(data))
    .catch(err => console.log(err));

  }, [])
  return (
    <div style={{padding: "50px"}}>
      
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </thead>
        <tbody>
          {data.map((d , i)=> (
            <tr  key={i}>
              <td>{d.ID}</td>
              <td>{d.Name}</td>
              <td>{d.Phone}</td>
              <td>{d.Email}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default App
