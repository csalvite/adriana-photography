import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Info from './Info/Info';
import Photos from './Photos/Photos';
import Videos from './Videos/Videos';
import Login from './Login/Login';
import Form from './Form/Form';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/narrative' element={<Home />} /> */}
        <Route path='/info' element={<Info />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/videos' element={<Videos />} />
        {/* Pagina para login */}
        <Route path='/acceso' element={<Login />} />
        <Route path='/add' element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
