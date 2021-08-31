import React from 'react';
import { Link } from "react-router-dom";
import './Boardgame.css';


const Boardgame = (props) => {
    
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
                <small>{'Rating: '}{rating}</small>
                <div className='year'>{yearPublished}</div>
                </div>
                <div className='favourites-container'>
                <div className='favourites'><span>Add To Favourites</span></div>
                </div>
            </div>
        )
}

export default Boardgame;