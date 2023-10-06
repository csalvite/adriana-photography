import './styles.css';

const JobPhotos = ({ idImagen, title, image, onClick }) => {
  return (
    <div className='option' onClick={() => onClick(idImagen, image, title)}>
      {image &&
        image.map((img) => {
          return <img src={img} alt={`title${idImagen}`} />;
        })}
      <h2>{title?.title}</h2>
    </div>
  );
};

export default JobPhotos;
