// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import 'react-image-gallery/styles/css/image-gallery.css';
import WSPGallery from '../../components/PhotoCarrousel/WSPGallery';
import './Photos.css';

const Photos = () => {
  //   const { type } = useParams();
  const [images, setImages] = useState([]);

  function importAll(r) {
    return r.keys().map(r);
  }

  useEffect(() => {
    const newImages = [];

    const photoFiles = importAll(
      require.context('../../assets', true, /\.(jpg|jpeg|png|gif|bmp)$/)
    );

    photoFiles.map((photo) =>
      newImages.push({
        original: photo,
        thumbnail: photo,
      })
    );

    setImages(newImages);
  }, []);

  return (
    <div className='App container-photos'>
      <Header />
      <div className='hr'>
        <hr />
      </div>
      <WSPGallery images={images} />
      <Footer />
    </div>
  );
};

export default Photos;
