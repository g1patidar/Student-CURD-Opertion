import axios from "axios";
import { useState , useEffect} from "react";
import editimg from "./edit.jpeg";

const Edit=()=>{
    const [data , setdata]= useState([]);
    const [edit, seteditdata]= useState({})

    const loaddata=()=>{
        axios.get("http://localhost:5000/display").then((res)=>{
            setdata(res.data);

        })
    }
    useEffect(()=>{
        loaddata();
    },[]);

    
const editdata=(id)=>{
    axios.get(`http://localhost:5000/edit/${id}`).then((res)=>seteditdata(res.data));
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
                <td><img onClick={()=>editdata(key._id)} width="40px" src={editimg}/></td>
            </tr>
            </>
        )
    }
    )

    const changeshandle=(e)=>{

        let name = e.target.name;
        let value = e.target.value;

        seteditdata(values=>({...values, [name]:value}));
    }

    const updatedata=()=>{

        axios.post(`http://localhost:5000/editandupdate/${edit._id}`,edit).then((data)=>loaddata())
    }

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
                    <th>Edit</th>
                </tr>
                {studentdata}

                </div>

                <div className="editbox">
                    <h2>Edit data </h2>
                    <h3>Edit Rollno:</h3> 
                    <input type="text" name="rollno" value={edit.rollno} onChange={changeshandle}/>
                    
                    <h3>Edit Name:</h3>
                    <input type="text" name="name" value={edit.name} onChange={changeshandle}/>
                    
                    <h3>Edit city:</h3> 
                    <input type="text" name="city" value={edit.city} onChange={changeshandle}/>
                    
                    <h3>Edit Fees:</h3> 
                    <input type="text" name="fees" value={edit.fees} onChange={changeshandle}/>
                    <br/>
                    <br/>
                    <input type="submit" onClick={updatedata} />
                    <br/>
                    <br/>
                </div>
            </div>
        </>
    )
}

export default Edit;
