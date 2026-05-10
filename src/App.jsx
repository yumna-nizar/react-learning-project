import Card from './Card.jsx';
import Student from './Student.jsx';
import Greeting from './Greeting.jsx';
import { StrictMode } from 'react';
import List from './List.jsx';

function App() {
    const fruits = [
    { id: 1, name: "piano", calorie: 95 },
    { id: 2, name: "orange", calorie: 56 },
    { id: 3, name: "banana", calorie: 45 },
  ];
  return(
    <>
   <StrictMode>
    <div className="card-container">
    <Card/>
    <Card/>
    <Card/>
    </div>
   
    <Student sname="yumna" grade="40" isStudent={false}/>
    <Student sname="rasheeda" grade={12} isStudent={true} />
    <Greeting name="nazri" isLoggedin={false}/>
    <List/>

    </StrictMode>
    
   
    </>
  );
}

export default App
