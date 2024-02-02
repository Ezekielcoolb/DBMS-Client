import { Outlet } from "react-router-dom";
import Nav from "../../components/MyNav";
import MyFooter from "../../components/MyFooter";
export default function General(){
    return(
        <>
        <Nav/>
        <Outlet/>
        <MyFooter />
        </>
        
    )
}