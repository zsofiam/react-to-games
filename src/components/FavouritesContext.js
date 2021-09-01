import axios from 'axios';
import React, { useState, createContext } from 'react';

export const FavouritesContext = createContext();

export const FavouritesProvider = (props) => {
    let [favouriteGames, setfavouriteGames] = useState(JSON.parse(localStorage.getItem("favourites")) || []);
    const toggleFavouriteGames = (gameId) => {
        //favouriteGames = localStorage.getItem("favourites");
        const newFavouriteGames = favouriteGames.filter(favourite => favourite.gameId !== gameId);
        if (favouriteGames.length === newFavouriteGames.length){
            axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}?callback=myCallback`)
            .then(res => favouriteGames.push(res.data))
            .then(localStorage.setItem("favourites", JSON.stringify(favouriteGames)));
            
        } else {
           favouriteGames = setfavouriteGames([...newFavouriteGames]);
           localStorage.setItem("favourites", favouriteGames);
        }
        console.log(favouriteGames);
        console.log("2:", localStorage.getItem("favourites"), JSON.parse(localStorage.getItem("favourites"))[0]);
    }

    return (
       <FavouritesContext.Provider  value={[favouriteGames, toggleFavouriteGames]}>{props.children}</FavouritesContext.Provider>
    );
}
