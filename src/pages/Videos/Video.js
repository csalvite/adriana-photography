import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import Jobs from '../../components/Jobs/Jobs';
import './Videos.css';

const Video = () => {
  const { idVideo } = useParams();

  return (
    <div className='App'>
      <Header />

      <div className='container-video'>
        <iframe
          title='video'
          src='https://player.vimeo.com/video/868399826?h=82bc10be63'
          className='video'
          frameborder='0'
          allow='autoplay; fullscreen; picture-in-picture'
          allowfullscreen
        ></iframe>

        <h2>Video de prueba</h2>
      </div>
      <Jobs
        idVideo={1}
        image={'/resources/photos-content/image1.jpg'}
        title={'Video Musical'}
      />
      <Jobs
        idVideo={1}
        image={'/resources/photos-content/image1.jpg'}
        title={'Video Musical'}
      />
      <Footer />
    </div>
  );
};

export default Video;
