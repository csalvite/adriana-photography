/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import './Login.css';
import Loading from '../../components/Loading';

const { REACT_APP_BACK } = process.env;

const Login = () => {
  const [active, setActive] = useState('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();

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

  useEffect(() => {
    setTimeout(() => {
      setMessage();
      setError();
      setLoading(false);
    }, [5000]);
  }, [message, error, loading]);

  return (
    <div className='body-login'>
      {message && (
        <div className={`login-container`} id='container'>
          <div className='message'>
            <p>{message}</p>
          </div>
        </div>
      )}
      {error && (
        <div className={`login-container`} id='container'>
          <div className='message'>
            <p>Hay un error</p>
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
            <form>
              <h1>Inicia Sesión</h1>
              <input type='text' placeholder='Username' />
              <input type='password' placeholder='Password' />
              <a href='#'>Forget Your Password?</a>
              <button>Sign In</button>
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
              <div className='toggle-panel toggle-right'>
                <h1>Hello, Friend!</h1>
                <p>
                  Register with your personal details to use all of site
                  features
                </p>
                <button
                  className='hidden'
                  id='register'
                  onClick={() => registerBtnOnClick()}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
