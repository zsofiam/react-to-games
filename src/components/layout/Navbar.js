import React, { useContext } from "react";
import { FavouritesContext } from "./../FavouritesContext";

export default function Navbar() {
    //let favourites = JSON.parse(localStorage.getItem("favourites"));
    const favourites = useContext(FavouritesContext);
    return (
        <div className="navbar">
            <span>Welcome {' '}
                <span className="username">User</span>!
            </span>
            <a href="/favourites">Favourite games:{' '} 
                <span id="favourite-counter">
                    {favourites[0]
                    ?
                    favourites[0].length
                    :
                    "0"}
                </span>
            </a>
            <form>
            <input
                type="text"
                placeholder="Search"
                className="mr-2"
                name="Search"
            />
            <input type="submit" value="Search"/>
            </form>
            <a href="/">Previous</a>
            <a href="/">Next</a>
        </div>
    );
}