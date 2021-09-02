import React, { useContext, useState, useEffect } from "react";
import Boardgame from "./Boardgame";
import { PageContext } from "../contexts/PageContext";
import axios from "axios";

const BoardgamesList = (props) => {
  const [pageNumber, itemsPerPage] = useContext(PageContext);

  const [state, setState] = useState({
    boardgames: [],
    pageNumber: pageNumber,
  });

  useEffect(() => {
    axios
      .get("https://bgg-json.azurewebsites.net/collection/edwalter")
      .then((res) => setState({ boardgames: res.data }))
      .then(setState({ boardgames: sliceItems(state.boardgames) }));
  }, []);

  console.log(pageNumber);
  console.log(itemsPerPage);

  const sliceItems = (boardgames) => {
    const startItem = (pageNumber - 1) * itemsPerPage;
    const endItem = startItem + itemsPerPage;
    return boardgames.slice(startItem, endItem);
  };

  return state.boardgames.map((boardgame) => (
    <Boardgame
      key={boardgame.gameId}
      id={boardgame.gameId}
      boardgame={boardgame}
    />
  ));
};

export default BoardgamesList;
