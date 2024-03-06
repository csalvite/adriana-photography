import React, { createContext, useEffect, useState } from 'react';

const { REACT_APP_BACK } = process.env;

export const PhotosContext = createContext();

export const PhotosProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  // Función para cargar las fotos iniciales utilizando useEffect
  useEffect(() => {
    const getPhotos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${REACT_APP_BACK}/photos`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (response.ok) {
          const dataArray = data.data.map((collections) => {
            return {
              title: collections.collection,
              titleCol: collections.title,
              description:
                collections.description !== 'undefined'
                  ? collections.description
                  : '',
              images: collections.photos,
            };
          });

          setLoading(false);
          setImages(dataArray);
          setAllImagesLoaded(true); // Indica que todas las imágenes están cargadas
        } else {
          setError(data.message);
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getPhotos();
  }, []);

  const handleImageLoad = () => {
    // Esta función se llamará cuando cada imagen termine de cargar
    // Puedes realizar acciones adicionales aquí si es necesario
  };

  return (
    <PhotosContext.Provider
      value={{
        images,
        setImages,
        error,
        setError,
        loading,
        setLoading,
        allImagesLoaded,
        handleImageLoad,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
};
