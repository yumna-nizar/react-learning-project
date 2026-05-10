function List(props) {
  // props.items.sort((a, b) => a.name.localeCompare(b.name));
  // const lowcaloriefruits = props.items.filter((fruit) => fruit.calorie > 50);
  const listItem = props.items.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}-{fruit.calorie}
    </li>
  ));
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <h3 className="list-heading">{props.category}</h3>
      <ul>{listItem}</ul>
    </div>
  );
}
export default List;
