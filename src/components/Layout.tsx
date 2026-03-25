import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Hambourger from "./Hambourger";

function Layout(){
    return(
        <>
        <Navbar />
        <Hambourger />
        <main>
            <Outlet />
        </main>
        </>
    );
}
export default Layout;