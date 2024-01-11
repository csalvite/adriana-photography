// import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Header } from '../../components/Header/Header';
import WSPGallery from '../../components/PhotoCarrousel/WSPGallery';
import './Photos.css';
// import JobPhotos from '../../components/Jobs/JobPhotos';
import Reveal from '../../components/Reveal';
import { PhotosContext } from '../../context/PhotosContext';
import Loading from '../../components/Loading';
import RectanguloImagenes from '../../components/imagenes/RectanguloImagenes';

const Photos = () => {
  const { images, error, loading } = useContext(PhotosContext);
  const [imagesOnScreen, setImagesOnScreen] = useState({
    idImages: 0,
    images: [],
  });

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

  return (
    <div className='App container-photos'>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <main>
          <div className='container'>
            {imagesOnScreen?.id !== 0 && (
              <WSPGallery
                images={imagesOnScreen.images}
                sectionTitle={imagesOnScreen.title}
              />
            )}
            {error ? (
              <p>{error}</p>
            ) : images?.length > 0 ? (
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
          </div>
        </main>
      )}
    </div>
  );
};
/*

 {
   error ? (
     <p>{error}</p>
   ) : (
     <>
       {images?.length > 0 ? (
         images?.map((image, index) => {
           return (
             <Reveal key={index} className={'container-options'}>
               <JobPhotos
                 key={index}
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
   );
 }*/
export default Photos;
