import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='container-fluid d-flex bg-secondary justify-content-center text-light py-2 text-center'>
                <div>
                    <h1>Food Shop</h1>
                </div>
                <div className='d-flex justify-content-end'>
                    <button onClick={() => {
                        if (typeof window != "undefined") window.history.back();
                    }} className='back-pos btn btn-outline-dark text-light d-flex'><img className='back' src='back.png' alt='back' />
                        <span className='fs-4'></span>
                    </button>
                    <button onClick={() => {
                        if (typeof window != "undefined") window.history.forward();
                    }} className='back-pos-for btn btn-outline-dark text-light d-flex'><img className='back' src='forward.png' alt='back' />
                        <span className='fs-4'></span>
                    </button>
                </div>
            </div>
        );
    };
}


export default Navbar;