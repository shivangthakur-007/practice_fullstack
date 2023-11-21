import Layouts from './Layouts/Layouts';
import A from './Components/A';
import {Route, Routes} from 'react-router-dom';
import Electronic from './Electronic/Electronic';
import Jewellery from './Jewellery/Jewellery';
import Men from './Men\'s Clothing/Men\'s';
import Women from './Women\'s Clothing/Women\'s';
import Footer from './footer';
import StoreNav from './Components/storeNav';
import B from './Components/B';

function App() {
   
  return (
        <Routes>
          <Route path='/' element={<Layouts />}></Route>
          <Route path='/electronics' element={<Electronic />}></Route>
          <Route path='/jewelery' element={<Jewellery />}></Route>
          <Route path='/men' element={<Men />}></Route>
          <Route path='/women' element={<Women />}></Route>     
          <Route path='/storenav' element={<StoreNav />}></Route>
          {/* <Route path="/" element={<A />} /> */}
        </Routes>
  );
}

export default App;
