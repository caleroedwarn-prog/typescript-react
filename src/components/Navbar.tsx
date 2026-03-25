import { Link } from "react-router-dom";
import "../static/navbar.css"
function Navbar(){
return(
    <nav className="Navbar">
        <Link to="/homepage" className="nav-link">Home</Link>
        <Link to="/tasks" className="nav-link">Task</Link>
        <Link to="/previouseTask" className="nav-link">PreviouseTasks</Link>
    </nav>
)
}
export default Navbar;