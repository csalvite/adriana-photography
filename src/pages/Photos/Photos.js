// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import WSPGallery from '../../components/PhotoCarrousel/WSPGallery';
import './Photos.css';
import JobPhotos from '../../components/Jobs/JobPhotos';

const { REACT_APP_BACK } = process.env;

const Photos = () => {
  //   const { type } = useParams();
  const [images, setImages] = useState([]);
  const [imagesOnScreen, setImagesOnScreen] = useState({
    idImages: 0,
    images: [],
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const handleSetImagesOnScreen = (imagesId, images, title) => {
    setImagesOnScreen({
      id: imagesId,
      images: images,
      title: title,
    });

    window.scrollTo(0, 0);
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
          const dataArray = Object.keys(data.data).map((title) => {
            return {
              title,
              images: data.data[title],
            };
          });

          setImages(dataArray);
          setLoading(false);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getPhotos();
  }, []);

  console.log('DATA', images);

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
            <div className='container-options'>
              {images?.length > 0 &&
                images?.map((image, index) => {
                  return (
                    <JobPhotos
                      key={index}
                      idImage={index}
                      title={{
                        title: image.title,
                        subtitle: 'Dir Taylor Swift',
                        p: 'Sony Venice, Panavision SPHERO',
                      }}
                      image={image.images}
                      onClick={handleSetImagesOnScreen}
                    />
                  );
                })}
              {/*               
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
              /> */}
            </div>
          )}
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Photos;
