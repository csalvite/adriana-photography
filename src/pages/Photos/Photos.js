// import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import WSPGallery from '../../components/PhotoCarrousel/WSPGallery';
import './Photos.css';
// import JobPhotos from '../../components/Jobs/JobPhotos';
import Reveal from '../../components/Reveal';
import { PhotosContext } from '../../context/PhotosContext';
import Loading from '../../components/Loading';
import RectanguloImagenes from '../../components/imagenes/RectanguloImagenes';
import { SwiperKeyControl } from '../../components/Stills/SwiperKeyControl';

const { REACT_APP_BACK } = process.env;

const Photos = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState({
    status: false,
    message: '',
  });
  const [loading, setLoading] = useState(true);
  const [imagesOnScreen, setImagesOnScreen] = useState({
    idImages: 0,
    images: [],
  });
  const [fullScreenStills, setFullScreenStills] = useState(false);

  const handleSetImagesOnScreen = (
    imagesId,
    images,
    title,
    collection,
    description
  ) => {
    setImagesOnScreen();
    setImagesOnScreen({
      id: imagesId,
      images,
      title,
      collection,
      description,
    });

    window.scrollTo(0, 0);
  };

  const handleSetFullScreenStills = () => {
    setFullScreenStills(!fullScreenStills);
  };

  useEffect(() => {
    const getPhotos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${REACT_APP_BACK}/photos`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (response.ok) {
          const dataArray = data.data.map((collections) => {
            return {
              title: collections.collection,
              titleCol: collections.title,
              description:
                collections.description !== 'undefined'
                  ? collections.description
                  : '',
              images: collections.photos,
            };
          });

          setLoading(false);
          setImages(dataArray);
        } else {
          setError({
            status: true,
            message: data.message,
          });
          setLoading(false);
        }
      } catch (error) {
        setError({
          status: true,
          message: error.message,
        });
        setLoading(false);
      }
    };
    getPhotos();
  }, []);

  const innerRender = () => {
    if (loading) {
      return <Loading />;
    }

    if (error.status) {
      return <p>{error.message}</p>;
    }

    return (
      <main>
        <div className='container'>
          {fullScreenStills ? (
            <div className='fullScreen'>
              <i
                className='fa-solid fa-xmark close'
                onClick={handleSetFullScreenStills}
              ></i>
              <SwiperKeyControl
                sectionTitle={imagesOnScreen.title}
                images={imagesOnScreen.images}
              />
            </div>
          ) : (
            <>
              {imagesOnScreen?.id !== 0 && (
                <WSPGallery
                  images={imagesOnScreen.images}
                  sectionTitle={imagesOnScreen.title}
                  onClick={handleSetFullScreenStills}
                />
              )}
              {images?.length > 0 ? (
                images?.map((image, index) => {
                  return (
                    <Reveal key={index} delay={0.25 + index / 10}>
                      <RectanguloImagenes
                        imagenes={image.images}
                        titulo={image.title}
                        idImage={index}
                        title={{
                          title: image.title,
                          subtitle: image.titleCol,
                          p: image.description,
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
        </div>
      </main>
    );
  };

  return (
    <div className='App container-photos'>
      <Header />
      {innerRender()}
    </div>
  );
};

export default Photos;
