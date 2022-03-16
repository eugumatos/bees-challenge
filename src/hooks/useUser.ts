import { useContext } from 'react';
import { UserContext, UserContextData } from '../contexts/UserContext';

export function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useFullName must be used within a UserProvider'); 
  }

  return context;
}