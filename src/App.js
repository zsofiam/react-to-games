import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

import Header from './components/layout/Header';
import GameDetail from './components/GameDetail';
import BoardgamesList from './components/BoardgamesList';
import { FavouritesProvider } from './components/FavouritesContext';

import './App.css';


const App = () => {
  console.log("App function start");
  const [state, setState] = useState({
    boardgames: [ 
    ]
  });

  useEffect(() => {
    axios.get('https://bgg-json.azurewebsites.net/collection/edwalter')
    .then(res => {
      setState({boardgames: res.data});
      console.log("App function useEffect");
    });
  }, [])


  return (
    <div className="container">
      <FavouritesProvider>
        <Router>
          <Header />
          <Route exact path="/" render ={props => (
                <>
                  <div className="wrapper">
              <BoardgamesList boardgames = {state.boardgames}/>
                </div>
                </>
              )}/>
          <Route path="/boardgame/:gameId" component={GameDetail}/>
          <Route path="/favourites">
            <div className="wrapper">
              <BoardgamesList boardgames={[]}/>
            </div>
          </Route>
        </Router>
      </FavouritesProvider>
    </div>

  );
}

export default App;
