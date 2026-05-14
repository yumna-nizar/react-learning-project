import { useState } from "react";

function Mycomponent()
{
const [car,setCar]=useState({model:"MG",
                             year:2024});

    function handleclick1(e){
      setCar({...car,model:e.target.value});
    }
    function handleclick2(e){
setCar({...car,year:e.target.value});
    }
return(
    <>
    <p>My favorite car is :{car.model} {car.year}</p>
    <input type="text" value={car.model} onChange={handleclick1}></input>

    <br/>
    <br/>
    <input type="number" value={car.year} onChange={handleclick2}></input>
    </>
);
}
export default Mycomponent;