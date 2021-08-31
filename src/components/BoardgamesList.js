import React from "react";
import Boardgame from "./Boardgame";

const BoardgamesList = (props) => {

     return props.boardgames.map((boardgame, index) => (
        <Boardgame key={index} id={index + 1} boardgame = {boardgame}/>
    ));
    
}

export default BoardgamesList;