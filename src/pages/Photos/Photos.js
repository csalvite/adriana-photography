// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageCarousel from '../../components/PhotoCarrousel/ImageCarrousel';
import Jobs from '../../components/Jobs/Jobs';
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
      require.context('../../assets/trabajo1', false, /\.(png|jpe?g|svg)$/)
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
      {/* <h2>Trabajo de moda</h2> */}
      <h3>Trabajo de moda</h3>
      <p>Con fecha de 02/10/2022</p>
      <ImageCarousel images={images} />
      <br />
      <br />
      <h2>Gustache mais o de arriba ou o de abaixo?¿</h2>
      <br />
      <br />

      <WSPGallery images={images} />
      <Footer />
    </div>
  );
};

export default Photos;
