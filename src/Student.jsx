import proptypes from "prop-types";
function Student(props) {
  if(props.isStudent){
  return (
    <div style={{display:"flex"}}>
      <h4>Name:  {props.sname}</h4>
      <h4>Class:  {props.grade>10 ? "age is greater than 10 ":"no"}</h4>
      <h4>isStudent:  {props.isStudent ? "yes":"no"}</h4>
    </div>
  );
  }
}
Student.propTypes={
  class:proptypes.number,
  sname:proptypes.string
}
export default Student;
