import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { UserProvider } from './contexts/UserContext';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes />
        </UserProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
