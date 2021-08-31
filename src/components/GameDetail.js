import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function GameDetail() {
    const [gameDetails, setGameDetails] = useState({});
    useEffect(() => {
        axios.get('https://bgg-json.azurewebsites.net/thing/133993')
        .then(res => setGameDetails(res.data));
    }, []);

    return (
        <div>
            {gameDetails.name 
            ?
            <>
            <h3 id="title">{gameDetails.name}</h3>
            <img src={gameDetails.image} alt="This is a game"/>
            <p id="description">{gameDetails.description}</p>
            <p>Players: <span id="minPlayer">{gameDetails.minPlayers}</span>{' '}-{' '}<span id="maxPlayer">{gameDetails.maxPlayers}</span></p>
            <p>Duration: <span id="playingTime">{gameDetails.playingTime}</span>{' '}min</p>
            <p>Rating: <span id="rating">{Number.parseFloat(gameDetails.bggRating).toFixed(1)}</span></p>
            <p>Year published: <span id="yearPublished">{gameDetails.yearPublished}</span></p>
            <button id="favouriteButton">Select</button>
            </>
            :
            <div id="detailError">
            <p>Ooops!</p>
            <p>The details could not be fetched from the source. Sorry for the inconvenience!</p>
            <p>Return{' '}<a href="/">Home</a></p>
            </div>
            }
        </div>
    )
}
