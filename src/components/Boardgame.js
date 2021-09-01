import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import { FavouritesContext } from "./FavouritesContext";
import './Boardgame.css';

const Boardgame = (props) => {
    const favourites = useContext(FavouritesContext);
    const addToFavourites = (gameId) => {
        axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
        .then(res => favourites[1]([...favourites[0], res.data]));
    }
    
    const{name, gameId, image, rating, yearPublished} = props.boardgame;
    return (
        <div className="card">
            <div className="properties-container">
            <img src={`${image}`} alt="Boardgame"></img>
            <p className="game-link">
            <Link to={`/boardgame/${gameId}`}>
            
            {name}
            
            </Link>
            </p>
            <small>{'Rating: '}{Number.parseFloat(rating).toFixed(1)}</small>
            <div className='year'>{yearPublished}</div>
            </div>
            <div className='favourites-container'>
            <div className='favourites' onClick={() => addToFavourites(gameId)}><span>Add To Favourites</span></div>
            </div>
        </div>
    )
}

export default Boardgame;