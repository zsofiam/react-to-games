export default function Navbar() {
    return (
        <div className="navbar">
            <span>Welcome {' '}
                <span className="username">User</span>!
            </span>
            <a href="/favourites">Favourite games: <span id="favourite-counter">2</span></a>
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