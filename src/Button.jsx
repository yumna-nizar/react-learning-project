import { useState } from "react";
function Button() {
 
const [ct ,setct]=useState(0);
     
  
  return (
    <>
       <p>{ct}</p>
      <button onClick={() => setct(ct+1)}>Increase</button>
      <button onClick={() =>setct(ct-1)}>Decrease</button>
     
    </>
  );
}
export default Button;
