import { useContext } from "react";
import { Bio } from "./A";

function B() {
  const head = useContext(Bio);
  console.log(head);
  const b=head.map((items, index) => (
    <li key={index}>{items}</li>
  ))
  return (
    <div>
      {/* <h1>{img.img1}</h1> */}
      <img src={head.img1} alt="" />
      <ul>
        {b}
      </ul>
    </div>
  );
  }
export default B;
