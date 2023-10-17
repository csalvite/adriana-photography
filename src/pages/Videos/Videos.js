import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import './Videos.css';
import ReactPlayer from 'react-player';
import Reveal from '../../components/Reveal';
import JobVideos from '../../components/Jobs/JobVideos';
import useVideos from '../../hooks/useVideos';

const Videos = () => {
  // Pagina para mostar una lista de todos los videos
  // const { images, error } = useContext(PhotosContext);
  const { videos, error } = useVideos();
  const [selectedVideo, setSelectedVideo] = useState({
    src: 'https://www.youtube.com/embed/5GJWxDKyk3A?si=gQmoi1M1ICACYxGz',
    id: 999999,
    title: 'Happier Than Ever',
  });

  const handleSelectVideo = (idVideo, srcVideo, title) => {
    console.log('onclick', idVideo, srcVideo, title);
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
              {videos?.length > 0 ? (
                <div>
                  {videos.map((video) => {
                    return (
                      <Reveal className={'container-options'}>
                        <JobVideos
                          key={video.id}
                          idVideo={video.id}
                          urlVideo={video.urlVideo}
                          title={video.title}
                          images={video.photos}
                          onClick={handleSelectVideo}
                        />
                      </Reveal>
                    );
                  })}
                </div>
              ) : (
                <div> No hay videos todavía...</div>
              )}
              {/* {images?.length > 0 ? (
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
              )} */}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Videos;
