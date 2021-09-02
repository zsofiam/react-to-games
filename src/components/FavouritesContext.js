import axios from 'axios';
import React, { useState, createContext } from 'react';

export const FavouritesContext = createContext();

export const FavouritesProvider = (props) => {
    console.log("before toggle");
    const [favouriteGames, setFavouriteGames] = useState(JSON.parse(localStorage.getItem("favourites")) || []);
    console.log("before toggle", favouriteGames);
    const toggleFavouriteGames = (gameId) => {
        if (favouriteGames.length === 0){
            console.log("if")
            axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
            .then(res => {
                const copyOfFavourites = [...favouriteGames, res.data];
                setFavouriteGames(copyOfFavourites);
            })
            .then(localStorage.setItem("favourites", JSON.stringify(favouriteGames)));
        } else {
            console.log("else");
            setFavouriteGames(JSON.parse(localStorage.getItem("favourites")));
            const newFavouriteGames = favouriteGames.filter(favourite => favourite.gameId !== gameId);
            if (favouriteGames.length === newFavouriteGames.length){
                axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
                .then(res => {
                    const copyOfFavourites = [...favouriteGames, res.data];
                    setFavouriteGames(copyOfFavourites);
                })
                .then(localStorage.setItem("favourites", JSON.stringify(favouriteGames)));
                
            } else {
            setFavouriteGames(newFavouriteGames => [...newFavouriteGames]);
            localStorage.setItem("favourites", favouriteGames);
            }
        }
        console.log("after toggle", favouriteGames);
    }

    return (
       <FavouritesContext.Provider  value={[favouriteGames, toggleFavouriteGames]}>{props.children}</FavouritesContext.Provider>
    );
}
