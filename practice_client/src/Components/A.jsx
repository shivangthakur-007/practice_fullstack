import { useState } from "react";
import B from "./B";

function A() {
  function Button({onClick, children}){
      return (
        <button onClick={onClick}>
          {children}
        </button>
      )
  }
  function PlayButton({movieName}){
    function handlePlayClick(){
      alert(`Playing ${movieName}`)
    }
    return (
      <Button onClick= {handlePlayClick}>
          Play "{movieName}"
      </Button>
    );
  } 
  return (
    <div>
      <PlayButton movieName = "Ram"/>
      <br />
      <PlayButton movieName = "hari hari"/>
    </div>
  );
}
export default A;
