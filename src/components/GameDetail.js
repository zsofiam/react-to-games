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
            <div className="detailPage">
                <div className="detailHeader">
                    <h3 id="title">{gameDetails.name}</h3>
                </div>
            <div className="details">
                <div className="row">
                <div className="firstColumn">
                    <div className="firstRow">
                        <img className="detailImage" src={gameDetails.image} alt="This is a game"/>
                    </div>
                    <div className="secondRow">
                        <p>Players: <span id="minPlayer">{gameDetails.minPlayers}</span>{' '}-{' '}<span id="maxPlayer">{gameDetails.maxPlayers}</span></p>
                        <p>Duration: <span id="playingTime">{gameDetails.playingTime}</span>{' '}min</p>
                        <p>Rating: <span id="rating">{Number.parseFloat(gameDetails.averageRating).toFixed(1)}</span></p>
                        <p>Year published: <span id="yearPublished">{gameDetails.yearPublished}</span></p>
                    </div>
                </div>
                <div className="secondColumn">
                    <p id="description">{gameDetails.description}</p>
                    <div className="favouritesButtonContainer">
                        <button className="favouritesButton">Add To Favourites</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            :
            <div id="detailError">
            <p>Loading...</p>
            </div>
            }
            <div className="return"><p><a href="/">Return Home</a></p></div>
        </div>
    )
}
