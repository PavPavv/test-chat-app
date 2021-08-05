import React from 'react';
import { ThemeProvider} from '@material-ui/styles';

import ChatPage from './pages/ChatPage/ChatPage';
import theme from './components/ui/Theme';

import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatPage />
    </ThemeProvider>
  );
}

export default App;
