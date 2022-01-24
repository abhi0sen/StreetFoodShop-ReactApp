import "./navbar.css";
// import Heading from "../Heading";
const Navbar = function(){
    return (
        <div>
            <div className="maindiv">
            <div className="navHead">
{/* <Heading head = "Food Shop" /> */}
<h1>Food Shop</h1>
</div>
            <div className="nav">
        <ul className="navlist">
          <a href="#"><li>Home</li></a>
            <a href="#"><li>About Us</li></a>
            <a href="#"><li>Contact</li></a>
        </ul>
        </div>
        {/* <div className="search">
            <input type="text" placeholder="Search Shop" />
            <button type="submit">Search</button>
        </div> */}
        </div>
    </div>
    );
};

export default Navbar;