import axios from "axios";
import { useState } from "react";

const Search=()=>{

    const [data, setdata]=useState("");
    const [seardata, setsearchdata]=useState([]);

    const searchdata=()=>{
        axios.post("http://localhost:5000/search",{rollno:data}).then((res)=>{setsearchdata(res.data)});
    }
    const sdata = seardata.map((key)=>{
       return(
       <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
        </tr>
       )
    })
    
   

    return(
        <>
        <br/>
        <div>
        ENTER ROLLNO :<input value={data} onChange={(e)=>{setdata(e.target.value)}}/>
            <button onClick={searchdata}>Search</button>

        <br/>
            <table className="searchtable">
                <tr>
                    <th>Rollno</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Fees</th>
                </tr>
                {sdata}

            </table>
        </div>
        </>
    )
}

export default Search;
