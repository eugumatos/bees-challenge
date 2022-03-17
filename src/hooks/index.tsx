import { ReactNode } from 'react';

import { UserProvider } from './user';
import { ToastProvider } from './toast';

type AppProviderProps = {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <UserProvider>
      <ToastProvider>{children}</ToastProvider>
    </UserProvider>
  );
}
