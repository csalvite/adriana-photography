import { useEffect, useState } from 'react';
import './styles.css';
import Reveal from '../Reveal';

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
            <Reveal key={img.id} delay={0.25 + index / 10}>
              <img
                key={index}
                src={`${REACT_APP_BACK}/${title.title}/${img.name}`}
                alt={`title${idImagen}`}
              />
            </Reveal>
          );
        })}
      <h2>{title?.title}</h2>
    </div>
  );
};

export default JobPhotos;
