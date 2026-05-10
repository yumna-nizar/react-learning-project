function List(){
 const fruits=["apple","banana"]; 
 const listItem=fruits.map(fruit=><li>{fruit}</li>);
 return (<>
 <ul>
   {listItem}
 </ul>
 </>);
}
export default List;
