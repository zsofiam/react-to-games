import React, { useContext, useState, useEffect } from "react";
import Boardgame from "./Boardgame";
import { PageContext } from "../contexts/PageContext";
import axios from "axios";

const BoardgamesList = () => {
  const { pageNumber, itemsPerPage } = useContext(PageContext);

  const [state, setState] = useState({
    boardgames: [],
  });

  useEffect(() => {
    axios
      .get("https://bgg-json.azurewebsites.net/collection/edwalter")
      .then((res) =>
        setState({ boardgames: sliceItems(res.data, pageNumber, itemsPerPage) })
      );
  }, [pageNumber, itemsPerPage]);

  const sliceItems = (boardgames, pageNumber, itemsPerPage) => {
    const startItem = (pageNumber - 1) * itemsPerPage;
    const endItem = startItem + itemsPerPage;
    return [...boardgames.slice(startItem, endItem)];
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
