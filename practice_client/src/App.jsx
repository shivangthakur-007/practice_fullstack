import Layouts from './Layouts/Layouts';
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
         <Route path='/' element={<Layouts />}/>
      </Routes>
    </>
  );
}

export default App
