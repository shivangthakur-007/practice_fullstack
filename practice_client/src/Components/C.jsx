import { useContext } from "react";
import { hello } from "./A";

function C(){
    const context= useContext(hello);
    return (
        <>
        <h1>Hello COMC {context}</h1>
        </>
    )
}
export default C;