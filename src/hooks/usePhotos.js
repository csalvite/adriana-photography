import { useEffect, useState } from 'react';

const { REACT_APP_BACK } = process.env;

const usePhotos = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

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

  return { images, error, loading };
};

export default usePhotos;
