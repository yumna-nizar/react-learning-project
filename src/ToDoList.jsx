import { useState } from "react";
function ToDoList() {
  const [list, updateList] = useState([]);
  const [task, setNewtask] = useState("");
  function addToList() {
    updateList((l) => [...l, task]);
    setNewtask("");

  }
  function removeFromList(index) {
    updateList(list.filter((l,i)=>i!==index))
  }
  return (
    <>
      <h1 className="heading">TO DO LIST</h1>
      <div className="input-container">
      <input type="text" id="addtolist" placeholder="Add new activity" value={task} onChange={(e)=>setNewtask(e.target.value)}></input>
      <button onClick={addToList} className="add-btn">Add to List</button>
      </div>
      <ul>
        {list.map((l, index) => (
          <div className="list-item">
            <li key={index} className="list-text">{l}</li>
            <input type="checkbox" className="list-checkbox" />
            <button className="remove-btn" onClick={()=>removeFromList(index)}>Remove </button>
          </div>
        ))}
      </ul>
    </>
  );
}
export default ToDoList;
