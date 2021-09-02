import React, { useContext, useState, useEffect } from "react";
import Boardgame from "./Boardgame";
import { FavouritesContext } from "./FavouritesContext";
import axios from 'axios';

const BoardgamesList = (props) => {
    const favourites = useContext(FavouritesContext);
    const [state, setState] = useState({
        boardgames: [ 
        ]
      });
    
    useEffect(() => {
    axios.get('https://bgg-json.azurewebsites.net/collection/edwalter')
    .then(res => {
        setState({boardgames: res.data});
    });
    }, [])

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