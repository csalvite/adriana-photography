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
        <img src={image[0]?.original} alt='imagen random' />
        <img src={image[1]?.original} alt='imagen random' />
        <img src={image[2]?.original} alt='imagen random' />
      </div>
    </div>
  );
};

export default Jobs;
