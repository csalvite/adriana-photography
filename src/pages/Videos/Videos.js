import { useContext, useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import Jobs from '../../components/Jobs/Jobs';
import './Videos.css';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import ReactPlayer from 'react-player';
import Reveal from '../../components/Reveal';
import JobPhotos from '../../components/Jobs/JobPhotos';
import { PhotosContext } from '../../context/PhotosContext';

const Videos = () => {
  // Pagina para mostar una lista de todos los videos
  const { images, error, loading } = useContext(PhotosContext);
  const [selectedVideo, setSelectedVideo] = useState({
    src: 'https://www.youtube.com/embed/5GJWxDKyk3A?si=gQmoi1M1ICACYxGz',
    id: 4,
    title: 'Happier Than Ever',
  });

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
          // <VideoPlayer title={selectedVideo.title} src={selectedVideo?.src} />
          <div className='container-video'>
            <ReactPlayer
              url={selectedVideo?.src}
              controls={true}
              playing={true}
              width='100%'
              height='600px'
            />
          </div>
        )}
        <div className='container'>
          {error ? (
            <p>{error}</p>
          ) : (
            <div className='container-options'>
              {images?.length > 0 ? (
                images?.map((image, index) => {
                  return (
                    <Reveal className={'container-options'}>
                      <JobPhotos
                        key={index}
                        idImage={index}
                        title={{
                          title: image.title,
                          subtitle: 'Dir Taylor Swift',
                          p: 'Sony Venice, Panavision SPHERO',
                        }}
                        image={image.images}
                        onClick={handleSelectVideo}
                      />
                    </Reveal>
                  );
                })
              ) : (
                <div>No hay imágenes todavía...</div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Videos;
