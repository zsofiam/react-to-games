import React, { useState, createContext } from 'react';

export const FavouritesContext = createContext();

export const FavouritesProvider = props => {
    console.log("FavouritesProvider function start");
    const [favouriteGames, setFavouriteGames] = useState([
        {
            gameId: 333,
            name: "Test Game",
            image: "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            bggRating: 8.3333,
            yearPublished: 2020
        },
        {
            gameId: 55555,
            name: "Test Game 2",
            image: "https://images.unsplash.com/photo-1530328411047-7063dbd29029?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
            bggRating: 7.123,
            yearPublished: 2021
        }
    ]);

    return (
       <FavouritesContext.Provider  value={[favouriteGames, setFavouriteGames]}>{props.children}</FavouritesContext.Provider>
    );
}
