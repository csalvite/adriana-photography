import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Info from './Info/Info';
import PrincipalJob from './PrincipalJob/PrincipalJob';
import Photos from './Photos/Photos';
import Pruebas from './Pruebas/Pruebas';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/narrative' element={<Home />} /> */}
        <Route path='/info' element={<Info />} />
        <Route path='/element/:idElement' element={<PrincipalJob />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/pruebas' element={<Pruebas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;