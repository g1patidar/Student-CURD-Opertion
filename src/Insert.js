import { useState } from "react";
import axios from "axios";

const Insert=()=>{

    const [input , setinput]= useState({});
    const [img, setimg]= useState();

    const inputhandle=(e)=>{
        let name = e.target.name;
        let value= e.target.value;

        setinput(values=>({...values,[name]:value}));
    }
    const submitdata=()=>{
        axios.post("http://localhost:5000/insert",input).then(alert("data save !!"));
    }
    const uploadimg=()=>{

        const formdata = new FormData();
        formdata.append("file",img);
        axios.post("http://localhost:5000/uploadimg", formdata).then((res)=>console.log(res)).
        catch(err=>console.log(err));
    }


    return(
        <>
        
            <div className="form">
                <h2 style={{textAlign:"center", color:"yellow"}}>Student Registration Form</h2>
                <div className="inform">
                
                    <label className="lab">Enter Rollno : 
                    <input 
                    type="text"
                    placeholder="Enter Rollno"
                    name="rollno"
                    value={input.rollno}
                    onChange={inputhandle}
                    /></label>
                    <br/><br/>

                    <label className="lab">Enter Name : 
                    <input type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={input.name}
                    onChange={inputhandle}
                    /></label>
                    <br/><br/>

                    <label className="lab">Enter City : 
                    <input
                    type="text"
                    placeholder="Enter City"
                    name="city"
                    value={input.city}
                    onChange={inputhandle}
                    /></label>
                    <br/><br/>

                
                    <label className="lab">Enter Fees : 
                    <input 
                    type="text"
                    placeholder="Enter Fees"
                    name="fees"
                    value={input.fees}
                    onChange={inputhandle}
                    /></label>
                    <br/>

                    <h3>Upload your photo </h3>
                        <input name="img" type="file" onChange={(e)=>(setimg(e.target.files[0]))}/>
                        
                    <input type="submit" value="upload" onClick={uploadimg} />

                    
                    <label className="submitbtn"> 
                    <br/><br/>
                    <button onClick={submitdata}>Data Save</button>
                    </label>
                    <br/><br/>

                </div>
            </div>
        </>
    )
}

export default Insert;
