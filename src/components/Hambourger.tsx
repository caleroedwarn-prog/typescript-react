import "../static/hambourger.css";
import { useState } from "react";
function Hambourger(){
    const[isToggle, setIsToggle] = useState(false);

    const toggleState = () =>{
        setIsToggle(!isToggle);
    }
    return(
        <div className={isToggle ?  "Hambourger active" : "Hambourger"} onClick={toggleState}>    
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
export default Hambourger;