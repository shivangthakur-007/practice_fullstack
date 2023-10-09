import Layouts from './Layouts/Layouts';
import A from './Components/A';
import {Route, Routes} from 'react-router-dom';
import Electronic from './Electronic/Electronic';
import Jewellery from './Jewellery/Jewellery';
import Men from './Men\'s Clothing/Men\'s';
import Women from './Women\'s Clothing/Women\'s';


function App() {
   
  return (
        <Routes>
          <Route path='/' element={<Layouts />}></Route>
          <Route path='/electronic' element={<Electronic />}></Route>
          <Route path='/jewelery' element={<Jewellery />}></Route>
          <Route path='/men' element={<Men />}></Route>
          <Route path='/women' element={<Women />}></Route>
          {/* <Route path="/" element={<A />} /> */}
        </Routes>
  );
}

export default App;
