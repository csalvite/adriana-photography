import Reveal from '../Reveal';
import './styles.css';

const { REACT_APP_BACK } = process.env;

const JobVideos = ({
  idVideo,
  urlVideo,
  images,
  title,
  description,
  onClick,
}) => {
  return (
    <div
      className='option'
      onClick={() => onClick(idVideo, urlVideo, title, description)}
    >
      {images &&
        images?.map((img, index) => {
          return (
            <Reveal key={img.id} delay={0.25 + index / 10}>
              <img
                key={img.id}
                src={`${REACT_APP_BACK}/video-images/${img.photo}`}
                alt={`${title}imagen${img.id}`}
              />
            </Reveal>
          );
        })}
      <h2>{title}</h2>
    </div>
  );
};

export default JobVideos;
