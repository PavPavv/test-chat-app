import React from 'react';
import { ThemeProvider} from '@material-ui/styles';
import { values } from "mobx";
import { observer } from 'mobx-react-lite';

import ChatPage from './pages/ChatPage/ChatPage';
import theme from './components/ui/Theme';

import './App.css';

const App = ({ store }) => {

  console.log(values(store.messages))

  return (
    <ThemeProvider theme={theme}>
      <ChatPage  store={store} />
    </ThemeProvider>
  );
}

export default observer(App);
