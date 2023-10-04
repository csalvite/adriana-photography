import { Link } from 'react-router-dom';
import './styles.css';

const Job = () => {
  return (
    <div className='job-container job-container-big'>
      <Link to='/element/2'>
        <div className='image-hover'>
          <h3>Happier Than Ever</h3>
        </div>
        <div
          className='image-container-background'
          style={{
            backgroundImage: 'url(http://source.unsplash.com/random)',
          }}
        ></div>
      </Link>
    </div>
  );
};

export default Job;
