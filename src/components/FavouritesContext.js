import axios from 'axios';
import React, { useState, createContext, useEffect } from 'react';

export const FavouritesContext = createContext();

export const FavouritesProvider = (props) => {
    let [favouriteGames, setFavouriteGames] = useState(JSON.parse(localStorage.getItem("favourites")));
    const toggleFavouriteGames = (gameId) => {
        if (favouriteGames === null) {
            favouriteGames = [];
        }
        setFavouriteGames(JSON.parse(localStorage.getItem("favourites")));
        // if favourites has no element add new boardgame
        if (favouriteGames.length === 0){
            axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
            .then(res => {
                favouriteGames.push(res.data);
            })
            //.then(localStorage.setItem("favourites", JSON.stringify(favouriteGames)));
        // else check if game is in array
        } else {
            const newFavouriteGames = favouriteGames.filter(favourite => favourite.gameId !== gameId);
            // if length are the same it means gameId did not match, so add this game
            if (favouriteGames.length === newFavouriteGames.length){
                axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
                .then(res => {
                    favouriteGames.push(res.data);
                })
                //.then(localStorage.setItem("favourites", JSON.stringify(favouriteGames)));
            // else gameId is found, game should be removed
            } else {
            favouriteGames = [...newFavouriteGames];
            //localStorage.setItem("favourites", JSON.stringify(favouriteGames));
            }
        }
        setFavouriteGames([...favouriteGames]);
    }

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favouriteGames));
    }, [favouriteGames])

    return (
       <FavouritesContext.Provider  value={[favouriteGames, toggleFavouriteGames]}>{props.children}</FavouritesContext.Provider>
    );
}
