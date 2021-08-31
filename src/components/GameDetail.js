import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function GameDetail() {
    const { gameId } = useParams();
    const gameDetailUrl = `https://bgg-json.azurewebsites.net/thing/${gameId}`;
    const [gameDetails, setGameDetails] = useState({});
    useEffect(() => {
        axios.get(gameDetailUrl)
        .then(res => setGameDetails(res.data));
    }, []);

    return (
        <div>
            {gameDetails.name 
            ?
            <>
            <h3 id="title">{gameDetails.name}</h3>
            <img src={gameDetails.image} alt="This is a game"/>
            <div id="details">
            <p id="description">{gameDetails.description}</p>
            <p>Players: <span id="minPlayer">{gameDetails.minPlayers}</span>{' '}-{' '}<span id="maxPlayer">{gameDetails.maxPlayers}</span></p>
            <p>Duration: <span id="playingTime">{gameDetails.playingTime}</span>{' '}min</p>
            <p>Rating: <span id="rating">{Number.parseFloat(gameDetails.bggRating).toFixed(1)}</span></p>
            <p>Year published: <span id="yearPublished">{gameDetails.yearPublished}</span></p>
            <button id="favouriteButton">Select</button>
            </div>
            </>
            :
            <div id="detailError">
            <p>Ooops!</p>
            <p>The details could not be fetched from the source. Sorry for the inconvenience!</p>
            </div>
            }
            <p>Return{' '}<a href="/">Home</a></p>
        </div>
    )
}
