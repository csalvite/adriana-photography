// import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import PhotoCarousel from '../../components/PhotoCarrousel/PhotoCarrousel';

const Photos = () => {
  //   const { type } = useParams();

  function importAll(r) {
    return r.keys().map(r);
  }

  const photoFiles = importAll(
    require.context('../../assets/trabajo1', false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className='App'>
      <Header />
      <PhotoCarousel photos={photoFiles} />
      <Footer />
    </div>
  );
};

export default Photos;
