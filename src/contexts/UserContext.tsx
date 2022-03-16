import { ReactNode, createContext, useCallback, useState } from 'react';

type UserProviderProps = {
  children?: ReactNode;
}

export interface UserContextData {
  newUser: (name: string) => void;
  removeUser: () => void;
  user: string;
}

export const UserContext = createContext<UserContextData>({} as UserContextData);
  
export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<string>(() => {
    const storagedUser = localStorage.getItem('@BeesChallenge:user');

    if (storagedUser) {
      return storagedUser;
    }

    return '';
  });

  const newUser = useCallback((name: string) => {
    localStorage.setItem('@BeesChallenge:user', name);
    setUser(name);
  }, []);

  const removeUser = useCallback(() => {
    localStorage.removeItem('@BeesChallenge:user');
    setUser('');
  }, []);

  return (
   <UserContext.Provider value={{ user, newUser, removeUser }} >
    {children}
   </UserContext.Provider>
 );
}