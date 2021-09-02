import React, { useContext } from "react";
import Boardgame from "./Boardgame";
import PageContext from "../contexts/PageContext";

const BoardgamesList = (props) => {
  const { pageNumber, itemsPerPage } = useContext(PageContext);

  const startItem = (pageNumber - 1) * itemsPerPage;
  const endItem = startItem + itemsPerPage;
  const boardgames = props.boardgames.slice(startItem, endItem);

  return boardgames.map((boardgame) => (
    <Boardgame
      key={boardgame.gameId}
      id={boardgame.gameId}
      boardgame={boardgame}
    />
  ));
};

export default BoardgamesList;
