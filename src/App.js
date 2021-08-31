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
  const [favouriteGames, setFavouriteGames] = useState(
    [
      {
          gameId: 333,
          name: "Test Game",
          image: "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          rating: 8.3333,
          yearPublished: 2020
      },
      {
          gameId: 55555,
          name: "Test Game 2",
          image: "https://images.unsplash.com/photo-1530328411047-7063dbd29029?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
          rating: 7.123,
          yearPublished: 2021
      }
    ]);

  useEffect(() => {
    axios.get('https://bgg-json.azurewebsites.net/collection/edwalter')
    .then(res => setState({boardgames: res.data}));
  }, [])


  return (
    <div className="container">
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
        <Route path="/favourites" render ={props => (
              <>
                <div className="wrapper">
            <BoardgamesList boardgames = {favouriteGames}/>
              </div>
              </>
            )}/>
      </Router>
    </div>

  );
}

export default App;
