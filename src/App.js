import Header from './components/layout/Header';

import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import BoardgamesList from './components/BoardgamesList';

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
    <Router>
    <div className="container">
      <Header />
      <Route path="/" render ={props => (
            <>
              <div className="wrapper">
          <BoardgamesList boardgames = {state.boardgames}/>
            </div>
            </>
          )}/>
    </div>
    </Router>
  );
}

export default App;
