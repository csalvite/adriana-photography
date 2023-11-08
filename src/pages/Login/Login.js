/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect, useState } from 'react';
import './Login.css';
import Loading from '../../components/Loading';
import { TokenContext } from '../..';
import { Navigate } from 'react-router-dom';

const { REACT_APP_BACK } = process.env;

const Login = () => {
  const [active, setActive] = useState('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  // recuperamos del contexto: token y setToken
  const [token, setToken] = useContext(TokenContext);

  const registerBtnOnClick = () => {
    setActive('active');
  };

  const loginBtnOnClick = () => {
    setActive('');
  };

  const createAccount = async (e) => {
    e.preventDefault();

    const newUser = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
    };

    try {
      setLoading(true);

      const response = await fetch(`${REACT_APP_BACK}/new`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setError(false);
        setMessage('¡Usuario registrado con éxito!');
      } else {
        setError(true);
      }

      setLoading(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
    };

    try {
      setLoading(true);

      const response = await fetch(`${REACT_APP_BACK}/acceso`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userLogin = await response.json();
        setToken(userLogin.token);
        setError(false);
      } else {
        const err = await response.json();
        setError(true);
        setMessage(err.message);
      }
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage();
      setError();
      setLoading(false);
    }, [2500]);
  }, [message, error, loading]);

  // Si existe el token significa que se ha logeado, por lo que redirigimos a la página principal
  if (token) {
    return <Navigate to='/add' />;
  }

  return (
    <div className='body-login'>
      {error && (
        <div className={`login-container`} id='container'>
          <div className='message'>
            <p>{message}</p>
          </div>
        </div>
      )}
      {loading && <Loading />}
      {!(message || error || loading) && (
        <div className={`login-container ${active}`} id='container'>
          <div className='form-container sign-up'>
            <form onSubmit={createAccount}>
              <h1>Regístrate</h1>
              <input type='text' name='username' placeholder='Username' />
              <input type='password' name='password' placeholder='Password' />
              <button>Sign Up</button>
            </form>
          </div>

          <div className={`form-container sign-in`}>
            <form onSubmit={handleLogin}>
              <h1>Inicia Sesión</h1>
              <input type='text' name='username' placeholder='Username' />
              <input type='password' name='password' placeholder='Password' />
              {/* <a href='#'>Forget Your Password?</a> */}
              <button>Entrar</button>
            </form>
          </div>

          <div className='toggle-container'>
            <div className='toggle'>
              <div className='toggle-panel toggle-left'>
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button
                  className='hidden'
                  id='login'
                  onClick={() => loginBtnOnClick()}
                >
                  Sign In
                </button>
              </div>
              <div className='toggle-panel toggle-grid toggle-right'>
                <img
                  src='/resources/images/fondoInicioSesion.png'
                  alt='inicioSesion'
                />
                <div>
                  <h1>Holi!</h1>
                  <p>
                    Inicia Sesión co teu usuario e contraseña para poder subir
                    contenido novo ao teu portfolio :)
                  </p>
                  {/* <button
                    className='hidden'
                    id='register'
                    onClick={() => registerBtnOnClick()}
                  >
                    Sign Up
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
