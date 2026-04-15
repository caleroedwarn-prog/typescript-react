import "../static/hambourger.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Hambourger(){
    const[isToggle, setIsToggle] = useState(false);

    const toggleState = () =>{
        setIsToggle((prev) => !prev);
    }
    const closeMenu = () => {
        setIsToggle(false);
    }
    return (
      <div>
        <div
          className={isToggle ? "Hambourger active" : "Hambourger"}
          onClick={toggleState}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {isToggle && (
            <div className="menu">
                <Link to="/settings" onClick={closeMenu}>Settings
                </Link>
                <Link to="/bin" onClick={closeMenu}>
                Recycle
                </Link>
                <Link to="/backup" onClick={closeMenu}>
                BackUp
                </Link>
            </div>
        )}
      </div>
    );
}
export default Hambourger;