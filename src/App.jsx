import Card from './Card.jsx';
import Button from './assets/Button/Button.jsx';
import Student from './Student.jsx';
import Greeting from './Greeting.jsx';
import { StrictMode } from 'react';

function App() {
  return(
    <>
   <StrictMode>
    <div className="card-container">
    <Card/>
    <Card/>
    <Card/>
    </div>
    <Button/>
    <Student sname="yumna" grade="40" isStudent={false}/>
    <Student sname="rasheeda" grade={12} isStudent={true} />
    <Greeting name="nazri" isLoggedin={true}/>
    </StrictMode>
    
   
    </>
  );
}

export default App
