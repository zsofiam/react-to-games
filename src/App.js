import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import Details from './components/GameDetail';

import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Route path="/">
          <Header />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Router>
    </div>
  );
}

export default App;
