import './videoPlayer.css';

const VideoPlayer = ({ src }) => {
  return (
    <div className='about-me video-container'>
      <video controls className='video'>
        <source src={src} type='video/mp4' />
        {/* Puedes agregar más sources para formatos diferentes aquí */}
        Tu navegador no admite la reproducción de video.
      </video>

      <div className='video-text'>
        <h2>Titulo del video</h2>
        <p>Información acerca del vídeo</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
