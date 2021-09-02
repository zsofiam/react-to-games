import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import Boardgame from "./Boardgame";
import { FavouritesContext } from "./FavouritesContext";
import { PageContext } from "../contexts/PageContext";

const BoardgamesList = (props) => {
    const favourites = useContext(FavouritesContext);
    const { pageNumber, itemsPerPage } = useContext(PageContext);
    const [state, setState] = useState({
        boardgames: [ 
        ]
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
    }

    return (
        <>
        {props.allBoardgames
        ?
    
        state.boardgames.map((boardgame) => (
            <Boardgame key={boardgame.gameId} id={boardgame.gameId} boardgame = {boardgame}/>
        ))
        
        :
        favourites[0].map((favourite) => (
            <Boardgame key={favourite.gameId} id={favourite.gameId} boardgame = {favourite}/>
            ))
        }
        </>
    )
}

export default BoardgamesList;