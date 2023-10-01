import Layouts from './Layouts/Layouts';
import A from './Components/A';
import {Route, Routes} from 'react-router-dom';
import Electronic from './Components/Electronic/Electronic';
import { createContext } from 'react';

const Bios=createContext();

function App() {
   const img={
    img1:
    "https://www.combonation.in/storage/9453/63ca5f25af222_Xmas_logo_theme.png",
    img2:
    "https://www.combonation.in/storage/55399/6501ac9b11108_BYOC_Strip_banner_Sep_DT.jpg",
    img3:
    "https://www.combonation.in/storage/56834/6512dbb29b553_MKQ_banner_DT_oct.jpg",
    img4:
    "https://www.combonation.in/storage/55406/6503f10e5e302_buy--Recovered-RecoveredArtboard-1-copy-6.jpg",
    };
  return (
    <Bios.Provider value={img}>
        <Routes>
          <Route path='/' element={<Layouts />}></Route>
          <Route path='/electronic' element={<Electronic />}></Route>
          {/* <Route path="/" element={<A />} /> */}
        </Routes>
    </Bios.Provider>
  );
}

export default App;
export {Bios}
