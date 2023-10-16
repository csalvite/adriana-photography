import { useEffect, useState } from 'react';

const { REACT_APP_BACK } = process.env;

const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${REACT_APP_BACK}/videos`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (response.ok) {
          setLoading(false);
          setVideos(data.videos);
        } else {
          setError(data.message);
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getVideos();
  }, []);

  return { videos, error, loading };
};

export default useVideos;
