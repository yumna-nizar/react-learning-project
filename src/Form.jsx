import { useState } from "react";
function Form() {
  const [name, setName] = useState("nothing");
  const [subject, changeSubject] = useState("");
  const [comment,setComment]=useState("");
  const [quantity,setQuantity]=useState("");
  const [gender,setGender]=useState();

  return (
    <>
    {/* input type text */}
      <input
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}/>
      <p>Name:{name}</p>


      {/* select element */}
      <select
      value="subject"
        onChange={(e) => changeSubject(e.target.value)}>
        <option value="CS">CS</option>
        <option value="MATHS">Maths</option>
        <option value="ENGLISH">English</option>
        <option value="PSHYCHOLOGY">Psychology</option>
      </select>
      <p>Subject:{subject}</p>
      

      {/* textarea element */}
      <textarea value={comment} onChange={(e)=>setComment(e.target.value)}/>
      <p>Comment :{comment}</p>


      {/* input type number */}
      <input type="number" value="quantity" onChange={(e)=>setQuantity(e.target.value)}/>
      <p>Quantity :{quantity}</p>

        <label>Male</label>
        <input type="radio" name="gender" value="male"  onChange={(e)=>setGender(e.target.value)}/>
        <label>Female</label>
        <input type="radio" name="gender" value="female" onChange={(e)=>setGender(e.target.value)}/>
        <p>Gender: {gender}</p>
    
    </>
  );
}
export default Form;
