import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";

class Navbar extends Component {
    render() {
        return (
        <div className='container-fluid bg-primary justify-content-center text-light py-2 text-center'>
            <div>
            <h1>Food Shop</h1>
            </div>
        </div>
        );
    };
}


export default Navbar;