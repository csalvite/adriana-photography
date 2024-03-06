import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import '../Photos/Photos.css';
import './Stills.css';
import Loading from '../../components/Loading';
import { SwiperKeyControl } from '../../components/Stills/SwiperKeyControl';
const { REACT_APP_BACK } = process.env;

const Stills = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: '',
  });
  const [stills, setStills] = useState([]);
  const [fullScreenStills, setFullScreenStills] = useState(false);

  useEffect(() => {
    const getStills = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${REACT_APP_BACK}/stills`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (response.ok) {
          const { data: responseStills } = data;

          setStills(responseStills);
          setLoading(false);
        }
      } catch (error) {
        setError({
          status: true,
          message: 'Ha ocurrido un error al cargar las imágenes :(',
        });
        setLoading(false);
      }
    };

    getStills();
  }, []);

  const handleSetFullScreenStills = () => {
    setFullScreenStills(!fullScreenStills);
  };

  const innerRender = () => {
    if (loading) {
      return <Loading />;
    }

    if (error.status) {
      return <p>{error.message}</p>;
    }

    return (
      <main>
        <div className='stills-container'>
          {fullScreenStills ? (
            <div className='fullScreen'>
              <i
                className='fa-solid fa-xmark close'
                onClick={handleSetFullScreenStills}
              ></i>
              <SwiperKeyControl images={stills} />
            </div>
          ) : stills.length > 0 ? (
            stills.map((still, index) => {
              return (
                // <Reveal key={still.id} delay={0.25 + index / 10}>
                <img
                  key={still.id}
                  className='stills-item'
                  src={`${REACT_APP_BACK}/stills/${still.name}`}
                  alt={`Stills ${still.id}`}
                  onClick={handleSetFullScreenStills}
                />
                // </Reveal>
              );
            })
          ) : (
            <p>No hay imágenes todavía...</p>
          )}
        </div>
      </main>
    );
  };

  return (
    <div className='App container-photos'>
      <Header />

      {innerRender()}
    </div>
  );
};

export default Stills;
