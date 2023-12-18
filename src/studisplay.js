import axios from "axios";



const deldata=(id)=>{
    axios.get(`http://localhost:5000/delete/${id}`).then(alert("data delete"))
}

const Studisplay=(props)=>{

    return(
        <>
            <tr>
                <td>{props.rno}</td>
                <td>{props.nm}</td>
                <td>{props.ct}</td>
                <td>{props.fee}</td>
                <td><img onClick={()=>deldata(props.myid)} width="40px" src={del}/></td>
            </tr>
        </>
    )
}
export default Studisplay;