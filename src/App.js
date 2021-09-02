import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import GameDetail from "./components/GameDetail";
import BoardgamesList from "./components/BoardgamesList";
import "./App.css";
import { PageProvider } from "./contexts/PageContext";

const App = () => {
  return (
    <div className="container">
      <Router>
        <PageProvider>
          <Header />
          <Route
            exact
            path="/"
            render={() => (
              <>
                <div className="wrapper">
                  <BoardgamesList />
                </div>
              </>
            )}
          />
          <Route path="/boardgame/:gameId" component={GameDetail} />
        </PageProvider>
      </Router>
    </div>
  );
};

export default App;
