import React, { useContext } from "react";
import { FavouritesContext } from "./../FavouritesContext";
import { PageContext } from "../../contexts/PageContext";

export default function Navbar() {
  //let favourites = JSON.parse(localStorage.getItem("favourites"));
  const favourites = useContext(FavouritesContext);
  const { decrementPageNumber, incrementPageNumber } = useContext(PageContext);
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
            <a href="/" onClick={decrementPageNumber}>
              Previous Page
            </a>
            <a href="/" onClick={incrementPageNumber}>
              Next Page
            </a>
        </div>
    );
}
