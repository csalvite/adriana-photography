import { useContext, useEffect, useRef, useState } from 'react';
import { TokenContext } from '../..';
import Select from 'react-select';
import './Form.css';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
const { REACT_APP_BACK } = process.env;

const Form = () => {
  const [active, setActive] = useState('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [cargarCat, setCargarCat] = useState(false);
  // recuperamos del contexto: token y setToken
  const [token, setToken] = useContext(TokenContext);
  const [categories, setCategories] = useState([]);
  const filesInputRef1 = useRef();
  const filesInputRef2 = useRef();
  const [success, setSuccess] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [urlVideo, setUrlVideo] = useState();
  const [titleVideo, setTitleVideo] = useState();
  const [descriptionVideo, setDescriptionVideo] = useState();

  const registerBtnOnClick = () => {
    setActive('active');
  };

  const loginBtnOnClick = () => {
    setActive('');
  };

  const handleChangeCategories = (e) => {
    const newCategories = categories;

    newCategories.push({
      label: e,
      value: e,
    });

    setCategories(newCategories);
  };

  const handleSubmitPhotos = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const selectedCollection = e.target.elements.category.value;

      if (selectedCollection === '' || selectedCollection.length < 1) {
        throw new Error('Indica un valor para la categoria');
      }

      const photos = filesInputRef1.current.files;

      if (photos.length < 1) {
        throw new Error('Debes indicar al menos 1 foto');
      }

      const payload = new FormData();
      payload.append('nameCollection', selectedCollection);
      payload.append('title', title);
      payload.append('description', description);

      for (let i = 0; i < photos.length; i++) {
        payload.append(`photos`, photos[i]);
      }
      const response = await fetch(`${REACT_APP_BACK}/photos/new`, {
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body: payload,
      });
      if (response.ok) {
        const body = await response.json();

        setSuccess(body.message);
        setLoading(false);
      } else {
        const err = await response.json();
        setError(err.message);
        //throw new Error(error.message);
        console.log(err.message);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitNewVideo = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const photos = filesInputRef2.current.files;

      if (photos.length < 1) {
        throw new Error('Debes indicar al menos 1 foto');
      }

      const payload = new FormData();
      payload.append('urlVideo', urlVideo);
      payload.append('title', titleVideo);
      payload.append('description', descriptionVideo);

      for (let i = 0; i < photos.length; i++) {
        payload.append(`photos`, photos[i]);
      }
      const response = await fetch(`${REACT_APP_BACK}/videos`, {
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body: payload,
      });
      if (response.ok) {
        const body = await response.json();

        console.log(body);
        setSuccess(body.message);
        setLoading(false);
      } else {
        const err = await response.json();
        setError(err.message);
        //throw new Error(error.message);
        console.log(err.message);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getCollections = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${REACT_APP_BACK}/categories`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCategories(data.categories);
          setLoading(false);
        } else {
          setLoading(false);
          setError('Ocurrio un error al cargar las categorias.');
        }
      } catch (error) {
        setError('Ocurrio un error al cargar las categorias.');
      }
    };

    getCollections();
  }, [cargarCat]);

  return (
    <div className='App'>
      <main>
        {error && (
          <div className={`login-container`} id='container'>
            <div className='message'>
              <p>{error}</p>
              <button
                onClick={() => {
                  setError();
                  setCargarCat(!cargarCat);
                }}
              >
                Intentar de novo
              </button>
            </div>
          </div>
        )}
        {success && (
          <div className={`login-container`} id='container'>
            <div className='message'>
              <p>{success}</p>
              <button
                onClick={() => {
                  setSuccess();
                  setCargarCat(!cargarCat);
                }}
              >
                Subir máis contido
              </button>
              <Link to='/' onClick={() => setToken('')}>
                Volver á páxina principal
              </Link>
            </div>
          </div>
        )}
        {loading && <Loading />}
        {token && !(error || loading || success) && (
          <>
            <h1>Formulario de Subida de contenido</h1>
            <div className={`login-container ${active}`} id='container'>
              <div className='form-container sign-up'>
                <form onSubmit={handleSubmitNewVideo}>
                  <h1>Novo Video</h1>
                  <input
                    type='text'
                    name='urlVideo'
                    onChange={(e) => {
                      setUrlVideo(e.target.value);
                    }}
                    placeholder='Inserta aqui a url...'
                  />
                  <input
                    type='text'
                    name='titleVideo'
                    onChange={(e) => {
                      setTitleVideo(e.target.value);
                    }}
                    placeholder='Inserta aqui un título do video...'
                  />
                  <input
                    type='text'
                    name='descriptionVideo'
                    onChange={(e) => {
                      setDescriptionVideo(e.target.value);
                    }}
                    placeholder='Descripción do video...'
                  />

                  <label>
                    Ingresa un maximo 3 fotos para o fondo do listado:
                  </label>
                  <input
                    type='file'
                    multiple
                    ref={filesInputRef2}
                    accept='.jpg, .png, .svg, .jpeg'
                  />

                  <button>Subir</button>
                </form>
              </div>

              <div className={`form-container sign-in`}>
                <form onSubmit={handleSubmitPhotos}>
                  <h1>Novas Fotos</h1>
                  <Select
                    name='category'
                    className='max-width'
                    options={categories}
                    onInputChange={handleChangeCategories}
                    // onChange={(e) => {
                    //   setNameCollection(e.target.label);
                    // }}
                    placeholder='Selecciona una colección...'
                  />

                  <input
                    type='text'
                    maxLength={100}
                    name='title'
                    value={title}
                    placeholder='Titulo del proyecto...'
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />

                  <input
                    type='text'
                    maxLength={250}
                    name='description'
                    placeholder='Descripción del proyecto...'
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />

                  <input
                    type='file'
                    multiple
                    ref={filesInputRef1}
                    accept='.jpg, .png, .svg, .jpeg'
                  />
                  <button>Subir</button>
                </form>
              </div>

              <div className='toggle-container'>
                <div className='toggle'>
                  <div className='toggle-panel toggle-left'>
                    <h1>Formulario para Videos</h1>
                    <p>A url debe ter un aspecto parecido ao seguinte:</p>
                    <p>
                      <em>https://player.vimeo.com/video/874939109</em> <br />{' '}
                      ou <br />
                      <em>
                        https://www.youtube.com/embed/5GJWxDKyk3A?si=gQmoi1M1ICACYxGz
                      </em>
                    </p>
                    <p>
                      Si deseas subir novo contenido de fotos fai click no
                      seguinte boton.
                    </p>
                    <button
                      className='hidden'
                      id='login'
                      onClick={() => loginBtnOnClick()}
                    >
                      Subir Fotos
                    </button>
                  </div>
                  <div className='toggle-panel toggle-right'>
                    <h1>Formulario para Fotos</h1>
                    <p>
                      Usa este formulario para indicar o nome da colección a que
                      queres engadir novas fotos ou unha nova colección que
                      queiras crear.
                    </p>
                    <p>
                      Si deseas subir un video novo fai click no seguinte boton.
                    </p>
                    <button
                      className='hidden'
                      id='register'
                      onClick={() => registerBtnOnClick()}
                    >
                      Subir Videos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}{' '}
        {!token && (
          <>
            <p>
              Non iniciastes sesión, fai click no seguinte enlace para ir á
              pantalla de inicio de sesión
            </p>
            <p>
              <Link to='/acceso'>Iniciar Sesion</Link>
            </p>
          </>
        )}
        <button
          className='button'
          onClick={() => {
            setToken('');
          }}
        >
          <Link to='/'>Salir</Link>
        </button>
      </main>
    </div>
  );
};

export default Form;
