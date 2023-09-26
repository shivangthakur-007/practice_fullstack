
import { createContext } from "react";
import B from "./B";

const hello = createContext();
function A() {
    return (
      <>
        <hello.Provider value={"thapa technical"}>
          hello<B />
        </hello.Provider>
      </>
    );
}
export default A;
export {hello};
