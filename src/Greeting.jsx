function Greeting(props) {
  const welcome = <h2>welcome {props.name}</h2>;
  const loginMessage = <h2>please login</h2>;
  return (<>{props.isLoggedin ? welcome : loginMessage}</>);
}

export default Greeting;

