import Layouts from './Layouts/Layouts';
import A from './Components/A';
import {Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
         <Route path='/' element={<Layouts />}></Route>
         {/* <Route path='/' element={<A name={Carousel_Pics} />}/> */}
      </Routes>
    </>
  );
}

export default App
