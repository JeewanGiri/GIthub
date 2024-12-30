import { useState } from "react"
import "../sass/input.scss";
import { Link } from "react-router-dom";
const InputData = () => {
    const [users,setUsers]=useState([
      {
       Name:"Jeewan Giri",
       Email:"jeewangiri@gmail.com",
       Age:20
      },
      {
        Name:"Jeewan Giri",
        Email:"jeewangiri@gmail.com",
        Age:20
       },
    ])
  return (
    <div>
    <div className="table">
    <Link to='/create' className="add" >Add +</Link>
        <thead>
            <tr>
                <th>Name </th>
                <th>Email </th>
                <th>Age </th>
                <th>Action </th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((i,index)=>{
                    return(
                    <tr key={index}>
                        <td>{i.Name}</td>
                        <td>{i.Email}</td>
                        <td>{i.Age}</td>
                        <td>
                        <Link to='/update' >
                        <button>Edit</button>
                        </Link>
                        <button className="dlt">Delete</button></td>
                    </tr>
                    )
                })
            }
        </tbody>
    </div>
      
    </div>
  )
}

export default InputData
