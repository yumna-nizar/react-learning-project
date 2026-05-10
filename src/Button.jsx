import { useState } from "react";
function Button() {
 
const [ct ,setct]=useState("yumna");
     
  
  return (
    <>
       <p>{ct}</p>
      <button onClick={() => setct("yusra")}>change</button>
      <button onClick={() =>setct("yumna")}>orginal</button>
     
    </>
  );
}
export default Button;
