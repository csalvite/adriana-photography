import './videoPlayer.css';

const VideoPlayer = ({ title, src }) => {
  return (
    <div className='container-video'>
      <iframe
        src={src}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>

      <h2>{title}</h2>
    </div>
  );
};

export default VideoPlayer;
