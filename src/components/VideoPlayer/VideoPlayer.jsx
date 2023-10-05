import './videoPlayer.css';

const VideoPlayer = ({ title, src }) => {
  return (
    <div className='container-video'>
      <iframe
        src={src}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe>

      <h2>{title}</h2>
    </div>
  );
};

export default VideoPlayer;
