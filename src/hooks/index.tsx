import { ReactNode } from 'react';

import { UserProvider } from './user';

type AppProviderProps = {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
}
