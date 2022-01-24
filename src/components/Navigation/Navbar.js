import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import "./navbar.css";
import Router from 'router';
// import Heading from "../Heading";
// const Navbar = function(){
//     return (
//         <div>
//             <div className="maindiv">
//             <div className="navHead">
// {/* <Heading head = "Food Shop" /> */}
// <h1 className="fs-1">Food Shop</h1>
// </div>
//             <div className="nav">
//         <ul className="navlist">
            
//           <a href="#"><li>Home</li></a>
//             <a href="#"><li>About Us</li></a>
//             <a href="#"><li>Contact</li></a>
//         </ul>
//         </div>
//         {/* <div className="search">
//             <input type="text" placeholder="Search Shop" />
//             <button type="submit">Search</button>
//         </div> */}
//         </div>
//     </div>
//     );
// };

class Navbar extends Component {
    render() {
        return (
        <div className='container bg-secondary justify-content-center text-light p-2 text-center'>
            <div>
            <h1>Food Shop</h1>
            <link to={"../Pages/Contact"}>
                    <li>Dashboard</li>
                </link>
            
            </div>
        </div>
        );
    };
}


export default Navbar;