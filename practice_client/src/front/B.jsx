import { people } from "./data";
import GetURLIMAGE from "./utlis";

function B() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listitems = chemists.map((person, i) => (
    <li key={i}>
      <img src={GetURLIMAGE(person)} alt={person.name} />
      <p>
        <strong>{person.name}:</strong>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ol type="a">{listitems}</ol>;
}

export default B;
