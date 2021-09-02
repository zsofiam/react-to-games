import axios from 'axios';
import React, { useState, createContext } from 'react';

export const FavouritesContext = createContext();

export const FavouritesProvider = (props) => {
    const [favouriteGames, setFavouriteGames] = useState(JSON.parse(localStorage.getItem("favourites")) || []);
    const toggleFavouriteGames = (gameId) => {
        setFavouriteGames(JSON.parse(localStorage.getItem("favourites")));
        // if favourites has no element add new boardgame
        if (favouriteGames.length === 0){
            axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
            .then(res => {
                setFavouriteGames([...favouriteGames, res.data]);
            })
            .then(localStorage.setItem("favourites", JSON.stringify(favouriteGames)));
        // else check if game is in array
        } else {
            const newFavouriteGames = favouriteGames.filter(favourite => favourite.gameId !== gameId);
            // if length are the same it means gameId did not match, so add this game
            if (favouriteGames.length === newFavouriteGames.length){
                axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
                .then(res => {
                    setFavouriteGames([...favouriteGames, res.data]);
                })
                .then(localStorage.setItem("favourites", JSON.stringify(favouriteGames)));
            // else gameId is found, game should be removed
            } else {
            setFavouriteGames([...newFavouriteGames]);
            localStorage.setItem("favourites", JSON.stringify(favouriteGames));
            }
        }
        console.log(favouriteGames);
    }

    return (
       <FavouritesContext.Provider  value={[favouriteGames, toggleFavouriteGames]}>{props.children}</FavouritesContext.Provider>
    );
}
