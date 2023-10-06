import './styles.css';

const Jobs = ({ idVideo, image, title, subtitle, src, onClick }) => {
  return (
    <div
      id={idVideo}
      className='job-container'
      onClick={() => onClick(idVideo, src, title)}
    >
      <div className='image-hover image-group-hover'>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      <div className='image-container-background group-images'>
        <img src={image} alt='imagen random' />
      </div>
    </div>
  );
};

export default Jobs;
