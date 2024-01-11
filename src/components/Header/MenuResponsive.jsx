import { Link } from 'react-router-dom';
import Reveal from '../Reveal';
import './Header.css';
import useVideos from '../../hooks/useVideos';

const MenuResponsive = ({ className }) => {
  const { videos } = useVideos();

  return (
    <ul id='dropdown-menu' className={className}>
      <Reveal width='100%'>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
      </Reveal>
      <Reveal width='100%' delay={0.25}>
        <li>
          <Link to='/photos'>Fotografía</Link>
        </li>
      </Reveal>
      {videos.length > 0 && (
        <Reveal width='100%' delay={0.35}>
          <li>
            <Link to='/videos'>Videos</Link>
          </li>
        </Reveal>
      )}
      <Reveal width='100%' delay={0.45}>
        <li>
          <Link to='/info'>Sobre Mí</Link>
        </li>
      </Reveal>
    </ul>
  );
};

export default MenuResponsive;
