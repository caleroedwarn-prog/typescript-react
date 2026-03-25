import { Link } from "react-router-dom";
function Navbar(){
return(
    <nav>
        <Link to="/">Home</Link>
        <Link to="/tasks">Task</Link>
    </nav>
)
}
export default Navbar;