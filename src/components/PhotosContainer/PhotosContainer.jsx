import { useEffect, useState } from 'react';
import Reveal from '../Reveal';

const { REACT_APP_BACK } = process.env;

const PhotosContainer = ({ idImagen, title, image, onClick }) => {
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
    <div className='container'>
      <div className='img-reveal'>
        {photosCover &&
          photosCover?.map((img, index) => {
            return (
              <Reveal delay={0.25 + index / 10}>
                <img
                  key={index}
                  src={`${REACT_APP_BACK}/${title.title}/${img.name}`}
                  alt={`title${idImagen}`}
                />
              </Reveal>
            );
          })}
      </div>
    </div>
  );
};

export default PhotosContainer;
