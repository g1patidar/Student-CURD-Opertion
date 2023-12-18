import axios from "axios";
import { useState , useEffect} from "react";
import del from "./delete.jpeg";

const Display=()=>{
    const [data , setdata]= useState([]);

    const loaddata=()=>{
        axios.get("http://localhost:5000/display").then((res)=>{
            setdata(res.data);

        })
    }
    useEffect(()=>{
        loaddata();
    },[]);

    
const deldata=(id)=>{
    axios.get(`http://localhost:5000/delete/${id}`).then((res)=>loaddata())
}
    
    const studentdata = data.map((key)=>
    {
        return(
            <>
             <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                <td><img onClick={()=>deldata(key._id)} width="40px" src={del}/></td>
            </tr>
            </>
        )
    }
    )

    return(
        <>
            <div className="displaybox">

                <div className="innerdisplaybox">
                    <h2 style={{textShadow:"3px 3px 3px pink"}}>Display student data</h2>
                <tr>
                    <th>Rollno</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Fees</th>
                    <th>Delete</th>
                </tr>
                {studentdata}
                </div>
            </div>
        </>
    )
}

export default Display;
