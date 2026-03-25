import { Link } from "react-router-dom";
import "../static/navbar.css"
function Navbar(){
return(
    <nav className="Navbar">
        <Link to="/homepage">Home</Link>
        <Link to="/tasks">Task</Link>
    </nav>
)
}
export default Navbar;