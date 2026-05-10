function Button() {
  let count = 0;
  const handleclick = () => {
    count++;
      document.getElementById("clk").innerHTML = count;
      
};
  const handleclick2 = () => {
    count--;
      document.getElementById("clk").innerHTML = count;
      
};

     
  
  return (
    <>
       <p id="clk"></p>
      <button onClick={() => handleclick()}>Increase</button>
      <button onClick={() => handleclick2()}>Decrease</button>
     
    </>
  );
}
export default Button;
