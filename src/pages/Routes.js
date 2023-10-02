import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Info from './Info/Info';
import PrincipalJob from './PrincipalJob/PrincipalJob';
import Photos from './Photos/Photos';
import Pruebas from './Pruebas/Pruebas';
import Videos from './Videos/Videos';
import Video from './Videos/Video';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/narrative' element={<Home />} /> */}
        <Route path='/info' element={<Info />} />
        <Route path='/element/:idElement' element={<PrincipalJob />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/pruebas' element={<Pruebas />} />
        <Route path='/videos/:idVideo' element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
