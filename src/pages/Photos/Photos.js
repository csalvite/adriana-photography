// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageCarousel from '../../components/PhotoCarrousel/ImageCarrousel';
import Jobs from '../../components/Jobs/Jobs';
import 'animate.css/animate.min.css';
// import {
//   Animator,
//   ScrollContainer,
//   ScrollPage,
//   batch,
//   Fade,
//   FadeIn,
//   FadeOut,
//   Move,
//   MoveIn,
//   MoveOut,
//   Sticky,
//   StickyIn,
//   StickyOut,
//   Zoom,
//   ZoomIn,
//   ZoomOut,
// } from 'react-scroll-motion';

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

  // const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  // const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className='App'>
      <Header />
      {/* <PhotoCarousel photos={photoFiles} /> */}
      <ImageCarousel images={images} />

      <Footer />
    </div>
  );
};

export default Photos;
