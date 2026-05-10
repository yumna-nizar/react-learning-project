import profilepic from "./assets/gopika.jpg";
function Card() {
  return (
    <div className="card">
      <img
        src={profilepic}
        alt="profile"
      />
      <p>Gopika</p>
      <p>I am a full stack developer</p>
    </div>
  );
}
export default Card;
