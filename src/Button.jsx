import { useState } from "react";
function Button()
{
    const[count,setCount]=useState(0);
    function handleclick()
    {
        setCount((count)=>count+1);
        setCount((count)=>count+1);
        setCount((count)=>count+1);
        setCount((count)=>count+1);
    }
    return(
        <>
        <button onClick={handleclick}>increase</button>
        <p>{count}</p>
        </>
    )
}
export default Button;
