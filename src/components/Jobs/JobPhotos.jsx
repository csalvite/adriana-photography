import { useEffect, useState } from 'react';
import './styles.css';

const { REACT_APP_BACK } = process.env;

const JobPhotos = ({ idImagen, title, image, onClick }) => {
  const [photosCover, setPhotosCover] = useState();

  useEffect(() => {
    const photos = [];
    for (let i = 0; i < image.length; i++) {
      photos.push(image[i]);
      if (i === 2) break;
    }

    setPhotosCover(photos);
  }, [image]);

  return (
    <div className='option' onClick={() => onClick(idImagen, image, title)}>
      {photosCover &&
        photosCover?.map((img, index) => {
          return (
            <img
              key={index}
              src={`${REACT_APP_BACK}/${title.title}/${img.name}`}
              alt={`title${idImagen}`}
            />
          );
        })}
      <h2>{title?.title}</h2>
    </div>
  );
};

export default JobPhotos;
