import React, { useContext } from "react";
import Boardgame from "./Boardgame";
import { FavouritesContext } from "./FavouritesContext";

const BoardgamesList = (props) => {
    const favourites = useContext(FavouritesContext);
    console.log("Favourites: ", favourites);

     return (
         <>
         {props.boardgames
         ?
        
        props.boardgames.map((boardgame, index) => (
            <Boardgame key={index} id={index + 1} boardgame = {boardgame}/>
        ))
       
        :
        favourites.map((favourite) => (
            <Boardgame key={favourite.gameId} id={favourite.gameId} boardgame = {favourite}/>
            ))
        }
        </>
     )
}

export default BoardgamesList;