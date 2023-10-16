import React, { createContext, useEffect, useState } from 'react';

const { REACT_APP_BACK } = process.env;

export const PhotosContext = createContext();

export const PhotosProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

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
          const dataArray = Object.keys(data.data).map((title) => {
            return {
              title,
              images: data.data[title],
            };
          });
          setLoading(false);
          setImages(dataArray);
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

  return (
    <PhotosContext.Provider
      value={{ images, setImages, error, setError, loading, setLoading }}
    >
      {children}
    </PhotosContext.Provider>
  );
};
