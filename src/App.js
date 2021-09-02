import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/layout/Header";
import GameDetail from "./components/GameDetail";
import BoardgamesList from "./components/BoardgamesList";
import "./App.css";
import PageContext from "./contexts/PageContext";

//export const PageContext = React.createContext();

const App = () => {
  const [state, setState] = useState({
    boardgames: [],
  });

  useEffect(() => {
    axios
      .get("https://bgg-json.azurewebsites.net/collection/edwalter")
      .then((res) => setState({ boardgames: res.data }));
  }, []);

  const [pageNumber, updatePageNumber] = useState(1);
  const itemsPerPage = 12;

  function incrementPageNumber(e) {
    e.preventDefault();
    if (pageNumber < state.boardgames.length / itemsPerPage + 1);
    updatePageNumber(pageNumber + 1);
  }

  function decrementPageNumber(e) {
    e.preventDefault();
    if (pageNumber > 1) {
      updatePageNumber(pageNumber - 1);
    }
  }

  return (
    <div className="container">
      <Router>
        <PageContext.Provider
          value={{
            pageNumber,
            itemsPerPage,
            incrementPageNumber,
            decrementPageNumber,
          }}
        >
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <div className="wrapper">
                  <BoardgamesList boardgames={state.boardgames} />
                </div>
              </>
            )}
          />
          <Route path="/boardgame/:gameId" component={GameDetail} />
        </PageContext.Provider>
      </Router>
    </div>
  );
};

export default App;
