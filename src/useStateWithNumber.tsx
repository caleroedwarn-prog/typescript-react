import { useState } from "react";

function Number() {

    const [count, setCount] = useState<number>(0);

    return (
      <>
        <h3> count : {count}</h3>
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          Add
        </button>

        <button type="button" onClick={() => setCount((prev) => prev - 1)}>
          Subtract
        </button>
      </>
    );

}
export default Number;