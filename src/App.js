import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header';

import './App.css';
import GameDetail from './components/GameDetail';

function App() {
  return (
    <div className="container">
      <Router>
        <Route path="/">
          <Header />
        </Route>
        <Route path="/details/:gameId" component={GameDetail}/>
      </Router>
    </div>
  );
}

export default App;
