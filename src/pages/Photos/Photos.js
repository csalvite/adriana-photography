// import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import WSPGallery from '../../components/PhotoCarrousel/WSPGallery';
import './Photos.css';
import JobPhotos from '../../components/Jobs/JobPhotos';
import Reveal from '../../components/Reveal';
import { PhotosContext } from '../../context/PhotosContext';
import PhotosContainer from '../../components/PhotosContainer/PhotosContainer';

const Photos = () => {
  //   const { type } = useParams();
  // const [images, setImages] = useState([]);
  const { images, error, loading } = useContext(PhotosContext);
  // const [imagesLoaded, setImagesLoaded] = useState(false);

  const [imagesOnScreen, setImagesOnScreen] = useState({
    idImages: 0,
    images: [],
  });
  // const [error, setError] = useState();
  // const [loading, setLoading] = useState(true);

  const handleSetImagesOnScreen = (imagesId, images, title) => {
    setImagesOnScreen({
      id: imagesId,
      images: images,
      title: title,
    });

    window.scrollTo(0, 0);
  };

  // // Hasta que se obtengan al completo las imágenes que se mostrarán se muestra el componente Loading
  // useEffect(() => {
  //   const imagePromises = images.map((src) => {
  //     return new Promise((resolve, reject) => {
  //       const img = new Image();
  //       img.src = src;
  //       img.onload = resolve;
  //       img.onerror = reject;
  //     });
  //   });

  //   Promise.all(imagePromises)
  //     .then(() => {
  //       setImagesLoaded(true);
  //     })
  //     .catch((error) => {
  //       console.error('Error al cargar imágenes:', error);
  //     });
  // }, [images]);

  return (
    <div className='App container-photos'>
      <Header />
      <div className='hr'>
        <hr />
      </div>
      {loading ? (
        <div className='loading'>
          <img src='/resources/tail-spin.svg' alt='loading' />
        </div>
      ) : (
        <main>
          {imagesOnScreen?.id !== 0 && (
            <WSPGallery
              images={imagesOnScreen.images}
              sectionTitle={imagesOnScreen.title}
            />
          )}

          {error ? (
            <p>{error}</p>
          ) : (
            <>
              {images?.length > 0 ? (
                images?.map((image, index) => {
                  return (
                    <Reveal key={index} className={'container-options'}>
                      {/* <JobPhotos
                        key={index}
                        idImage={index}
                        title={{
                          title: image.title,
                          subtitle: 'Dir Taylor Swift',
                          p: 'Sony Venice, Panavision SPHERO',
                        }}
                        image={image.images}
                        onClick={handleSetImagesOnScreen}
                      /> */}
                      <PhotosContainer
                        idImage={index}
                        title={{
                          title: image.title,
                          subtitle: 'Dir Taylor Swift',
                          p: 'Sony Venice, Panavision SPHERO',
                        }}
                        image={image.images}
                        onClick={handleSetImagesOnScreen}
                      />
                    </Reveal>
                  );
                })
              ) : (
                <div>No hay imágenes todavía...</div>
              )}
            </>
          )}
        </main>
      )}
    </div>
  );
};

export default Photos;
