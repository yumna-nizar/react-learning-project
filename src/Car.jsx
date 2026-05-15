import { useState } from "react";

function Car()
{ 
    const [Car,SetCar]=useState([]);
    const [CarModel ,Setcarmodel]=useState();
    const [CarYear ,Setcaryear]=useState(2024);
    function Addcar()
    {
        const Newcarmodel=document.getElementById("carmodel").value;
        const Newcaryear=document.getElementById("caryear").value;
      SetCar((c=>[...c,{caryear:Newcaryear,
                       carmodel:Newcarmodel
      }]));
      console.log(Car);

    }
    function Removecar(index){
       SetCar(Car.filter((car,i)=>i!==index));
    }
    
    return(<>
    <h1>Cars</h1>
    <ul>{Car.map((car,index)=><li onClick={()=>Removecar(index)} key={index}>{car.caryear} - {car.carmodel}</li>)}
    </ul>
    <input type="number"  id="caryear" ></input>
    <br></br>
    <input type="text" value={CarModel} id="carmodel"></input>
    <br/>
    <button onClick={Addcar}>Add Car</button>
    
    </>);
}
export default Car;