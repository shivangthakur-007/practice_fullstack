import { useContext } from "react";
import { Bio } from "./A";

function B(){
  const head=useContext(Bio)
  console.log(head.img1)
return (
  <div>
    {/* <h1>{img.img1}</h1> */}
    <img src={head.img1} alt="" />
  </div>
);
}
export default B;