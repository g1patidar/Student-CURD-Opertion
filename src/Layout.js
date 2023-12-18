import { Link, Outlet } from "react-router-dom"

const Layout=()=>{

    return(
        <>
            <nav className="navbar">
                <Link to={"/home"}>Home</Link>
                <Link to={"/insert"}>Insert</Link>
                <Link to={"/display"}>Display</Link>
                <Link to={"/edit"}>Edit</Link>
                <Link to={"/search"}>Search</Link>
                
            </nav>
        

        <div className="outlet">
        <Outlet/>
        </div>
        <hr size="2" />
        www.mycompany.com

        
        </>
    )
}

export default Layout;