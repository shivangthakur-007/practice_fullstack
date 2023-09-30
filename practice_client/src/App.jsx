import Layouts from './Layouts/Layouts';
import A from './Components/A';
import {Route, Routes} from 'react-router-dom';
import Electronic from './Components/Electronic/Electronic';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Layouts />}></Route>
          <Route path='/electronic' element={<Electronic />}></Route>
          {/* <Route path="/" element={<A />} /> */}
        </Routes>
    </>
  );
}

export default App;
// export {Bio}
