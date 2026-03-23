import {useState} from "react";

function String(){
    const [name, setName] = useState<string>("");

    return(
        <>
        <label>
            Input
        <input 
        name={name}
        type="input"
        onChange={(e) => setName(e.target.value)}
        />
        </label>
        <p>name: {name}</p>
        </>
    )
}
export default String;