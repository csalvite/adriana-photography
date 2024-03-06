import React, { useEffect, useState } from 'react';
import './RectanguloImagenes.css';

const { REACT_APP_BACK } = process.env;

const RectanguloImagenes = ({
  imagenes,
  idImagen,
  image,
  title,
  titulo,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);
  const [photosCover, setPhotosCover] = useState();

  useEffect(() => {
    const photos = [];
    for (let i = 0; i < imagenes.length; i++) {
      photos.push(imagenes[i]);
      if (i === 2) break;
    }

    setPhotosCover(photos);
  }, [imagenes]);

  return (
    <div
      className={`rectangulo-imagenes ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(idImagen, image, title)}
    >
      <div className='imagenes-container'>
        {photosCover?.map((imagen, index) => (
          <img
            key={index}
            src={`${REACT_APP_BACK}/${title.title}/${imagen.name}`}
            alt={`Imagen ${index + 1}`}
          />
        ))}
      </div>
      {hovered && <div className='titulo'>{titulo}</div>}
    </div>
  );
};

export default RectanguloImagenes;
