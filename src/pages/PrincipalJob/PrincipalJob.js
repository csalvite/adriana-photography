import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
// import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Jobs from '../../components/Jobs/Jobs';
import Footer from '../../components/Footer/Footer';

const PrincipalJob = () => {
  const { idElement } = useParams();

  console.log(idElement);

  return (
    <div className='App'>
      <Header />
      {/* <VideoPlayer src='/resources/videos/headerBackground.mp4' /> */}
      <div className='container-video'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/5GJWxDKyk3A?si=gQmoi1M1ICACYxGz'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>
        <Jobs
          idVideo={1}
          image={'/resources/photos-content/image1.jpg'}
          title={'All Too Well'}
        />
        <Jobs
          idVideo={1}
          image={'/resources/photos-content/image2.jpg'}
          title={'Video Musical'}
        />
        <Jobs
          idVideo={1}
          image={'/resources/photos-content/image3.jpg'}
          title={'Video Musical'}
        />
      </div>
      <Footer />
    </div>
  );
};

export default PrincipalJob;
