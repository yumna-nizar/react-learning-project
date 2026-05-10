function List() {
  const fruits = [
    { id: 1, name: "piano", calorie: 95 },
    { id: 2, name: "orange", calorie: 56 },
    { id: 3, name: "banana", calorie: 45 },
  ];
  fruits.sort((a, b) => a.name.localeCompare(b.name));
  const lowcaloriefruits = fruits.filter((fruit) => fruit.calorie > 50);
  const listItem = lowcaloriefruits.map((fruit) => (
    <li key={fruit.id}>{fruit.name}-{fruit.calorie}</li>
  ));
  return (
    <>
      <ul>{listItem}</ul>
    </>
  );
}
export default List;
