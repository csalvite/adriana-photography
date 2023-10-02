import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './PhotosCarrousel.css';
import Gallery from 'react-image-gallery';

const ImageCarousel = ({ images }) => {
  return (
    <div className='container-photos'>
      <Gallery items={images} />
    </div>
  );
};

export default ImageCarousel;
