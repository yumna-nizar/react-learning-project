function Button() {
  let count = 0;
  const handleclick = (e) => {
      e.target.innerHTML=count;
      count++;
    
  };
  return (
    <>
      <button onClick={(e) => handleclick(e)}>Click me</button>
    </>
  );
}
export default Button;
