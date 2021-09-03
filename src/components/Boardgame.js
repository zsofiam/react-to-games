import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { FavouritesContext } from "./FavouritesContext";
import './Boardgame.css';

const Boardgame = (props) => {
    const favourites = useContext(FavouritesContext);
    
    const{name, gameId, image, averageRating, yearPublished} = props.boardgame;
    return (
        <div className="card">
            <div className="properties-container">
            <img src={`${image}`} alt="Boardgame"></img>
            <p className="game-link">
            <Link to={`/boardgame/${gameId}`}>
            
            {name}
            
            </Link>
            </p>
            <small>{'Rating: '}{Number.parseFloat(averageRating).toFixed(1)}</small>
            <div className='year'>{yearPublished}</div>
            </div>
            <div className='favourites-container'>
            <div className='favourites' onClick={() => favourites[1](gameId)}><span>Add To Favourites</span></div>
            </div>
        </div>
    )
}

export default Boardgame;