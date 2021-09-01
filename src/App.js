import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import GameDetail from './components/GameDetail';
import BoardgamesList from './components/BoardgamesList';
import { FavouritesProvider } from './components/FavouritesContext';

import './App.css';


const App = () => {
  return (
    <div className="container">
      <FavouritesProvider>
        <Router>
          <Header />
          <Route exact path="/">
                  <div className="wrapper">
              <BoardgamesList allBoardgames = {true}/>
                </div>
              </Route>
          <Route path="/boardgame/:gameId" component={GameDetail}/>
          <Route path="/favourites">
            <div className="wrapper">
              <BoardgamesList/>
            </div>
          </Route>
        </Router>
      </FavouritesProvider>
    </div>

  );
}

export default App;
