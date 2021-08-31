import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

const App = () => {
  const [state, setState] = useState({
    boardgames: [ 
    ]
  });

  useEffect(() => {
    axios.get('https://bgg-json.azurewebsites.net/collection/edwalter')
    .then(res => {console.log(res.data)});
    // .then(res => setState({boardgames: res.data}));
  }, [])

  return (
    <div className="App">
      <Router>
      <div className="App">
        <div className="container">
          <Route path="/" render ={props => (
            <>
              <div className="wrapper">
          {/* <BoardgamesList boardgames = {state.boardgames}/> */}
            </div>
            </>
          )}/>
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
