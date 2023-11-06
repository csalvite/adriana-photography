import { Link } from 'react-router-dom';
import './styles.css';

const Job = () => {
  return (
    <div className='job-container job-container-big'>
      <Link to='/photos'>
        <div className='image-hover'>
          <h3>Kaméleon Vintage</h3>
        </div>
        <div className='image-container-background'></div>
      </Link>
    </div>
  );
};

export default Job;
