import Layout from "./Layout"
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./Edit";
import Display from "./Display";
import Insert from "./Insert";
import Search from "./Search";

const App =()=>{

    return(
        <>
            <BrowserRouter>
            
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="home" element={<Home/>}/>
                        <Route path="insert" element={<Insert/>}/>
                        <Route path="edit" element={<Edit/>}/>
                        <Route path="display" element={<Display/>}/>
                        <Route path="search" element={<Search/>}/>
                    </Route>
                </Routes>
            
            </BrowserRouter>
        </>
    )
}

export default App;
