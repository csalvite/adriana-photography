import { Link } from 'react-router-dom';
import './styles.css';

const Jobs = ({ idVideo, image, title }) => {
  console.log(idVideo);
  return (
    <div id={idVideo} className='job-container'>
      <Link to={`/videos/${idVideo}`}>
        <div className='image-hover image-group-hover'>
          <h3>{title}</h3>
        </div>
        <div className='image-container-background group-images'>
          <img src={image} alt='imagen random' />
          <img src={image} alt='imagen random' />
          <img src={image} alt='imagen random' />
        </div>
      </Link>
    </div>
  );
};

export default Jobs;
