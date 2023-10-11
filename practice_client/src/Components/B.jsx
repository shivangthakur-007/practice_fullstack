import A from "./A";

function B({message, children}) {

  return (
    <>
    <button onClick={()=> alert(message)}>{children}</button>
    </>
  );
  }
export default B;
