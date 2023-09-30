import Layouts from './Layouts/Layouts';
import A from './Components/A';
import {Route, Routes} from 'react-router-dom';
import Electronic from './Components/Electronic/Electronic';
import { createContext, useState } from 'react';

const Bio=createContext();
function App() {
  const [state, setstate]= useState(0)
    function handledclick(){
        setstate(state=state+1)
    }
  return (
    <Bio.Provider value={{handledclick, state}}>
        <Routes>
          <Route path='/' element={<Layouts />}></Route>
          <Route path='/electronic' element={<Electronic />}></Route>
          {/* <Route path="/" element={<A />} /> */}
        </Routes>
    </Bio.Provider>
  );
}

export default App;
export {Bio}
