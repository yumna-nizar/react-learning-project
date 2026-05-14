import { useState } from "react";

function FoodArray()
{

    const[Food,UpdateFood]=useState(["apple","orange","mango"]);
    function AddFood()
    {
         const newfood=document.getElementById("addfood").value;
        document.getElementById("addfood").value="";

        UpdateFood([...Food,newfood]);
    }

    function RemoveFood(){
         const newfood=document.getElementById("addfood").value;
         document.getElementById("addfood").value="";
         UpdateFood((Food=>Food.filter(food=>food!==newfood)));

    }
    return (<>  
    <h1>Food Items</h1>
    <ul>
       {Food.map((food,index)=><li key={index}>{food}</li>)}
    </ul>
    <input type="text" id="addfood"></input>
    <button onClick={AddFood}>
        Add Food
    </button>
    <button  onClick={RemoveFood}>Remove Food</button>
    </>);

}
export default FoodArray;
