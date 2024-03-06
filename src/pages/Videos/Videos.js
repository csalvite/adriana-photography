import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import './Videos.css';
import ReactPlayer from 'react-player';
import Reveal from '../../components/Reveal';
import JobVideos from '../../components/Jobs/JobVideos';
import useVideos from '../../hooks/useVideos';
import NotFound from '../../components/NotFound';

const Videos = () => {
  const { videos, error } = useVideos();
  const [selectedVideo, setSelectedVideo] = useState();

  const handleSelectVideo = (idVideo, srcVideo, title, description) => {
    setSelectedVideo({
      id: idVideo,
      src: srcVideo,
      title: title,
      description: description,
    });

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setSelectedVideo({
      id: videos[0]?.id,
      src: videos[0]?.urlVideo,
      title: videos[0]?.title,
      description: videos[0]?.description,
    });
  }, [videos]);

  return (
    <div className='App videos-container'>
      <Header />
      <main>
        {videos.length < 1 && (
          <NotFound
            text={'No hay videos todavía...'}
            error={'Es un not found'}
          />
        )}
        {selectedVideo && (
          <div className='container-video'>
            <ReactPlayer
              url={selectedVideo?.src}
              controls={true}
              playing={true}
              width='100%'
              height='100%'
            />
            <h2>{selectedVideo.title}</h2>
            <p>{selectedVideo.description}</p>
          </div>
        )}
        <div className='container'>
          {error ? (
            <p>{error}</p>
          ) : (
            <div className='container-options'>
              {videos?.length > 0 && (
                <div>
                  {videos.map((video) => {
                    return (
                      <Reveal key={video.id} className={'container-options'}>
                        <JobVideos
                          key={video.id}
                          idVideo={video.id}
                          urlVideo={video.urlVideo}
                          title={video.title}
                          description={video.description}
                          images={video.photos}
                          onClick={handleSelectVideo}
                        />
                      </Reveal>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Videos;
