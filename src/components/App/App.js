import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import TinderCards from '../TinderCards/TinderCards';
import SwipeButtons from '../SwipeButtons/SwipeButtons';
import Chats from '../Chats/Chats';
import ChatScreen from '../ChatScreen/ChatScreen';
import AppSearchBar from '../AppSearchBar/AppSearchBar';

import { Provider } from 'react-redux';
import store from '../../store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/chat/:person">
              <Header backButton="/chat" />
              <ChatScreen />
            </Route>
            <Route path="/chat">
              <Header backButton="/" />
              <Chats />
            </Route>
            <Route path="/">
              <Header />
              <AppSearchBar />
              <TinderCards />
              <SwipeButtons />
            </Route>
          </Switch>


          {/*   Tinder Cards  */}
          {/*   Buttons below tinder cards  */}


          {/*   Chat screen  */}
          {/*   Individual chat screen  */}
        </Router>
      </div>
    </Provider>

  );
}

export default App;
