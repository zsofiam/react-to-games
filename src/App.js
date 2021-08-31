import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

import Header from './components/layout/Header';
import GameDetail from './components/GameDetail';
import BoardgamesList from './components/BoardgamesList';

import './App.css';


const App = () => {
  const [state, setState] = useState({
    boardgames: [ 
    ]
  });

  useEffect(() => {
    axios.get('https://bgg-json.azurewebsites.net/collection/edwalter')
    .then(res => setState({boardgames: res.data}));
  }, [])


  return (
    <div className="container">
      <Router>
        <Header />
        <Route path="/" render ={props => (
              <>
                <div className="wrapper">
            <BoardgamesList boardgames = {state.boardgames}/>
              </div>
              </>
            )}/>
        <Route path="/details/:gameId" component={GameDetail}/>
      </Router>
    </div>

  );
}

export default App;
