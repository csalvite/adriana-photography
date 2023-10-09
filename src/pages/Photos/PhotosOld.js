// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import WSPGallery from '../../components/PhotoCarrousel/WSPGallery';
import './Photos.css';
import JobPhotos from '../../components/Jobs/JobPhotos';

const Photos = () => {
  //   const { type } = useParams();
  const [images, setImages] = useState([]);
  const [imagesOnScreen, setImagesOnScreen] = useState({
    idImages: 0,
    images: [],
  });

  function importAll(r) {
    return r.keys().map(r);
  }

  const handleSetImagesOnScreen = (imagesId, images, title) => {
    setImagesOnScreen({
      id: imagesId,
      images: images,
      title: title,
    });

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const photoFiles = importAll(
      require.context('../../assets', true, /\.(jpg|jpeg|png|gif|bmp)$/)
    );

    // Función para dividir el array en grupos de 3 imágenes
    const dividirEnGrupos = (array, chunkSize) => {
      const grupos = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        grupos.push(array.slice(i, i + chunkSize));
      }
      return grupos;
    };

    const gruposDeImagenes = dividirEnGrupos(photoFiles, 3);

    setImages(gruposDeImagenes);
  }, []);

  return (
    <div className='App container-photos'>
      <Header />
      <div className='hr'>
        <hr />
      </div>
      <main>
        {imagesOnScreen?.id !== 0 && (
          <WSPGallery
            images={imagesOnScreen.images}
            sectionTitle={imagesOnScreen.title}
          />
        )}

        <div className='container-options'>
          <JobPhotos
            idImage={1}
            title={{
              title: 'Moda',
              subtitle: 'Dir Taylor Swift',
              p: 'Sony Venice, Panavision SPHERO',
            }}
            image={images[0]}
            onClick={handleSetImagesOnScreen}
          />
          <JobPhotos
            idImage={2}
            title={{
              title: 'DJ Shadow ft. De La Soul "Rocket Fuel"',
              subtitle: 'Dir. Sam Pilling',
              p: '35mm, Super 16mm',
            }}
            image={images[1]}
            onClick={handleSetImagesOnScreen}
          />
          <JobPhotos
            idImage={3}
            title={{
              title: 'Sam Fender "DEAD BOYS"',
              subtitle: 'Dir. Vincent Haycock',
              p: 'Super 16mm',
            }}
            image={images[2]}
            onClick={handleSetImagesOnScreen}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Photos;
