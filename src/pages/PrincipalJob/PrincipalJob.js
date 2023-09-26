import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const PrincipalJob = () => {
  const { idElement } = useParams();

  console.log(idElement);

  return (
    <div className='App'>
      <Header />
      <VideoPlayer src='/resources/videos/headerBackground.mp4' />
    </div>
  );
};

export default PrincipalJob;
