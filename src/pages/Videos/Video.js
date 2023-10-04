// import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import Jobs from '../../components/Jobs/Jobs';
import './Videos.css';

const Video = () => {
  //   const { idVideo } = useParams();

  return (
    <div className='App'>
      <Header />

      <div className='container-video'>
        <iframe
          src='https://www.youtube.com/embed/tollGa3S0o8?si=CSmCG-sAM4V7eWoT'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>

        <h2>Taylor Swift - All Too Well (10 minutes version)</h2>
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
