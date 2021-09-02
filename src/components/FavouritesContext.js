import axios from 'axios';
import React, { useState, createContext } from 'react';

export const FavouritesContext = createContext();

export const FavouritesProvider = (props) => {
    const [favouriteGames, setFavouriteGames] = useState(JSON.parse(localStorage.getItem("favourites")) || []);
    const toggleFavouriteGames = (gameId) => {
        setFavouriteGames(JSON.parse(localStorage.getItem("favourites")));
        if (favouriteGames.length === 0){
            axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
            .then(res => {
                setFavouriteGames([...favouriteGames, res.data]);
            })
            .then(localStorage.setItem("favourites", JSON.stringify(favouriteGames)));
        } else {
            const newFavouriteGames = favouriteGames.filter(favourite => favourite.gameId !== gameId);
            if (favouriteGames.length === newFavouriteGames.length){
                axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
                .then(res => {
                    setFavouriteGames([...favouriteGames, res.data]);
                })
                .then(localStorage.setItem("favourites", JSON.stringify(favouriteGames)));
                
            } else {
            setFavouriteGames([...newFavouriteGames]);
            localStorage.setItem("favourites", favouriteGames);
            }
        }
    }

    return (
       <FavouritesContext.Provider  value={[favouriteGames, toggleFavouriteGames]}>{props.children}</FavouritesContext.Provider>
    );
}
