import { ReactNode, createContext, useCallback, useState, useContext } from 'react';

type UserProviderProps = {
  children?: ReactNode;
}

interface UserContextData {
  newUser: (name: string) => void;
  removeUser: () => void;
  user: string;
}

const UserContext = createContext<UserContextData>({} as UserContextData);
  
function UserProvider({ children }: UserProviderProps) {
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

function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useFullName must be used within a UserProvider'); 
  }

  return context;
}

export { UserProvider, useUser };