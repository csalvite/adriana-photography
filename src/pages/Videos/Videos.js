import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import Jobs from '../../components/Jobs/Jobs';
import './Videos.css';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const Videos = () => {
  // Pagina para mostar una lista de todos los videos
  const [images, setImages] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({
    src: 'https://www.youtube.com/embed/5GJWxDKyk3A?si=gQmoi1M1ICACYxGz',
    id: 4,
    title: 'Happier Than Ever',
  });

  function importAll(r) {
    return r.keys().map(r);
  }

  useEffect(() => {
    // setSelectedVideo({
    //   src: '',
    //   id: 0,
    // });
    const newImages = [];

    const photoFiles = importAll(
      require.context('../../assets', true, /\.(jpg|jpeg|png|gif|bmp)$/)
    );

    photoFiles.map((photo) =>
      newImages.push({
        original: photo,
        thumbnail: photo,
      })
    );

    setImages(newImages);
  }, []);

  const handleSelectVideo = (idVideo, srcVideo, title) => {
    setSelectedVideo({
      id: idVideo,
      src: srcVideo,
      title: title,
    });

    window.scrollTo(0, 0);
  };

  return (
    <div className='App videos-container'>
      <Header />
      <main>
        {selectedVideo?.id !== 0 && (
          <VideoPlayer title={selectedVideo.title} src={selectedVideo?.src} />
        )}
        <div className='container'>
          <Jobs
            idVideo={1}
            image={images}
            title={'Taylor Swift - All Too Well'}
            subtitle={'Dir. Taylor Swift'}
            src={
              'https://www.youtube.com/embed/tollGa3S0o8?si=oXrkfh5JiH6zKmjU'
            }
            onClick={handleSelectVideo}
          />
          <Jobs
            idVideo={2}
            image={images}
            title={'Taylor Swift - 22'}
            subtitle={'Dir. Taylor Swift'}
            src={
              'https://www.youtube.com/embed/9boiT64sm0Q?si=wy_nTXMiacnuUARg'
            }
            onClick={handleSelectVideo}
          />
          <Jobs
            idVideo={3}
            image={images}
            title={'Taylor Swift - Anti Hero'}
            subtitle={'Dir. Taylor Swift | Photography Assistant'}
            src={
              'https://www.youtube.com/embed/b1kbLwvqugk?si=u8pBbS-IJILxrXqj'
            }
            onClick={handleSelectVideo}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
