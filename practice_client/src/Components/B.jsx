import A from "./A";

function B() {
  function onchageColor(){
      let bodyStyle= document.body.style;
      if(bodyStyle.backgroundColor === 'black'){
        bodyStyle.backgroundColor = 'white';
      }
      else{
        bodyStyle.backgroundColor = 'black';
      }
  }
  return (
    <>
      <A a={onchageColor}/>
    </>
  );
  }
export default B;
