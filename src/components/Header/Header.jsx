import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import MenuResponsive from './MenuResponsive';

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
          VY ADRI <span>CINEMATOGRAPHER</span>
        </h1>
      </Link>
      <div className='icon-container'>
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
        <MenuResponsive className={open} />
      </div>
      {/* <button id='menu-toggle'>&#9776;</button> */}
      <ul id='menu'>
        <li className='link'>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/photos'>Fotografía</Link>
        </li>
        <li>
          <Link to='/videos'>Videos</Link>
        </li>
        <li>
          <Link to='/info'>Sobre Mí</Link>
        </li>
      </ul>
    </header>
  );
};
