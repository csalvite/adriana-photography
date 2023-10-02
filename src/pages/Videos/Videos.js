import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import Jobs from '../../components/Jobs/Jobs';
import './Videos.css';

const Videos = () => {
  // Pagina para mostar una lista de todos los videos
  return (
    <div className='App videos-container'>
      <Header />
      <div className='container'>
        <Jobs
          idVideo={1}
          image={'/resources/photos-content/image1.jpg'}
          title={'Video Musical'}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Videos;
