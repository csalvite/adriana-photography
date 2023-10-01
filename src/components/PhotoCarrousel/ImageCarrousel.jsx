import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './PhotosCarrousel.css';
import Gallery from 'react-image-gallery';

const ImageCarousel = ({ images }) => {
  return (
    <div className='container-photos'>
      <h2>Título de la colección de fotos</h2>

      <h1>Mi Carrusel de Imágenes</h1>
      <Gallery items={images} />
      <h3>Trabajo de moda</h3>
      <p>Con fecha de 02/10/2022</p>
    </div>
  );
};

export default ImageCarousel;
