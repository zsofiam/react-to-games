import axios from 'axios';
import React, { useState, createContext } from 'react';

export const FavouritesContext = createContext();

export const FavouritesProvider = (props) => {
    let [favouriteGames, setFavouriteGames] = useState(JSON.parse(localStorage.getItem("favourites")) || []);
    const toggleFavouriteGames = (gameId) => {
        if (favouriteGames.length === 0){
            axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
            .then(res => setFavouriteGames(favouriteGames => [...favouriteGames, res.data]))
            .then(localStorage.setItem("favourites", JSON.stringify(favouriteGames)));
        } else {
            favouriteGames = JSON.parse(localStorage.getItem("favourites"));
            const newFavouriteGames = favouriteGames.filter(favourite => favourite.gameId !== gameId);
            if (favouriteGames.length === newFavouriteGames.length){
                axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
                .then(res => setFavouriteGames(favouriteGames => [...favouriteGames, res.data]))
                .then(localStorage.setItem("favourites", JSON.stringify(favouriteGames)));
                
            } else {
            favouriteGames = setFavouriteGames(newFavouriteGames => [...newFavouriteGames]);
            localStorage.setItem("favourites", favouriteGames);
            }
        }
        console.log(favouriteGames);
    }

    return (
       <FavouritesContext.Provider  value={[favouriteGames, toggleFavouriteGames]}>{props.children}</FavouritesContext.Provider>
    );
}
