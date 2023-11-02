import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { TokenContext } from '..';

export const Logout = () => {
  const [token, setToken] = useContext(TokenContext);

  function logout() {
    setToken('');
    Navigate('/acceso');
  }

  return token && <button onClick={logout}>Cerrar Sesion</button>;
};
