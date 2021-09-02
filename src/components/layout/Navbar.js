import { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";

export default function Navbar() {
  const { decrementPageNumber, incrementPageNumber } = useContext(PageContext);

  return (
    <div className="navbar">
      <span>
        Welcome <span className="username">User</span>!
      </span>
      <a href="/">
        Favourite games: <span id="favourite-counter">0</span>
      </a>
      <form>
        <input
          type="text"
          placeholder="Search"
          className="mr-2"
          name="Search"
        />
        <input type="submit" value="Search" />
      </form>
      <button onClick={decrementPageNumber}>Previous</button>
      <button onClick={incrementPageNumber}>Next</button>
      {/* <a href="/" onClick={decrementPageNumber}>
        Previous
      </a>
      <a href="/" onClick={incrementPageNumber}>
        Next
      </a> */}
    </div>
  );
}
