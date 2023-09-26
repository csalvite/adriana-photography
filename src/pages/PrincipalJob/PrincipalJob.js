import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Jobs from '../../components/Jobs/Jobs';
import Footer from '../../components/Footer/Footer';

const PrincipalJob = () => {
  const { idElement } = useParams();

  console.log(idElement);

  return (
    <div className='App'>
      <Header />
      <VideoPlayer src='/resources/videos/headerBackground.mp4' />
      <Jobs />
      <Jobs />
      <Jobs />
      <Footer />
    </div>
  );
};

export default PrincipalJob;
