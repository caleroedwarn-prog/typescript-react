import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../static/navbar.css";

interface NavbarProps {
  themeColor: string;
}

function getTextColor(color: string): string {
  // Simple function to determine text color based on background brightness
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#000000' : '#FFFFFF';
}

function Navbar({ themeColor }: NavbarProps){
  useEffect(() => {
    document.documentElement.style.setProperty('--navbar-bg', themeColor);
    document.documentElement.style.setProperty('--navbar-text', getTextColor(themeColor));
  }, [themeColor]);

  return(
    <nav className="Navbar">
        <Link to="/homepage" className="nav-link">Home</Link>
        <Link to="/tasks" className="nav-link">Task</Link>
        <Link to="/previouseTask" className="nav-link">PreviouseTasks</Link>
    </nav>
  )
}
export default Navbar;