import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TokenContext } from '..';

export const TokenProvider = ({ children }) => {
  const [jwt, setJwt] = useLocalStorage('jwtToken', '');
  return (
    <TokenContext.Provider value={[jwt, setJwt]}>
      {children}
    </TokenContext.Provider>
  );
};
