import axios from 'axios';
import React, { useState, createContext } from 'react';

export const FavouritesContext = createContext();

export const FavouritesProvider = (props) => {
    console.log("before toggle");
    const [favouriteGames, setFavouriteGames] = useState(JSON.parse(localStorage.getItem("favourites")) || []);
    console.log("before toggle", favouriteGames);
    const toggleFavouriteGames = (gameId) => {
        setFavouriteGames(JSON.parse(localStorage.getItem("favourites")));
        if (favouriteGames.length === 0){
            console.log("main if")
            axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
            .then(res => {
                setFavouriteGames([...favouriteGames, res.data]);
            })
            .then(localStorage.setItem("favourites", JSON.stringify(favouriteGames)));
        } else {
            console.log("main else");
            const newFavouriteGames = favouriteGames.filter(favourite => favourite.gameId !== gameId);
            if (favouriteGames.length === newFavouriteGames.length){
                console.log("second if");
                axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
                .then(res => {
                    setFavouriteGames([...favouriteGames, res.data]);
                })
                .then(localStorage.setItem("favourites", JSON.stringify(favouriteGames)));
                
            } else {
            console.log("second else");
            setFavouriteGames([...newFavouriteGames]);
            localStorage.setItem("favourites", favouriteGames);
            }
        }
        console.log("after toggle", favouriteGames);
    }

    return (
       <FavouritesContext.Provider  value={[favouriteGames, toggleFavouriteGames]}>{props.children}</FavouritesContext.Provider>
    );
}
