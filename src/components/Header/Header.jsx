import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  // document.getElementById('menu-toggle').addEventListener('click', function () {
  //   this.classList.toggle('active'); // Agrega o remueve la clase "active" al botón
  // });

  const [open, setOpen] = useState('close');

  const toggleOpen = () => {
    open === 'close' ? setOpen('open') : setOpen('close');
  };

  return (
    <header>
      <Link to='/'>
        <h1>
          Adriana Lago <span>Photographer</span>
        </h1>
      </Link>
      {/* <button id='menu-toggle'>&#9776;</button> */}
      <ul id='menu'>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/info'>Fotografía</Link>
        </li>
        <li>
          <Link to='/info'>Videos</Link>
        </li>
        <li>
          <Link to='/info'>Sobre Mí</Link>
        </li>
        <li>
          <Link to='/info'>Stills</Link>
        </li>
      </ul>

      <ul id='dropdown-menu' className={open}>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/info'>Fotografía</Link>
        </li>
        <li>
          <Link to='/info'>Videos</Link>
        </li>
        <li>
          <Link to='/info'>Sobre Mí</Link>
        </li>
        <li>
          <Link to='/info'>Stills</Link>
        </li>
      </ul>
      {open === 'close' ? (
        <i
          id='menu-toggle'
          className='fa-solid fa-bars menu-icon'
          onClick={() => toggleOpen()}
        ></i>
      ) : (
        <i
          id='menu-toggle'
          className='menu-icon fa-solid fa-x'
          onClick={() => toggleOpen()}
        ></i>
      )}
    </header>
  );
};
