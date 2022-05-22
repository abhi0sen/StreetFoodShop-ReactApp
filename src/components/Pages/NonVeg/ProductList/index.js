import React, { Component } from "react";
import prod from './products.json';
import './style.css';
import Search from '../../../front-page/Search.js';
import Navbar from '../../../commons/Navbar';
import { Link } from "react-router-dom";

class NonVeg extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Navbar />
                <Search />
                <h1 className="fs-1 text-center p-4">Try Out Some Delicious Today</h1>
                {prod && prod.map(({ id, title, location, image }) => (
                    <div className="container col-3 height d-inline-block m-3 mx-auto" key={id}>
                         <Link to={'/nonvegitemlist'}>
                        <button className="shop col-sm-12 btn btn-outline-secondary">
                            <p className='p-3 fs-2'>{title}</p>
                            <img className="col-sm-12 h-50 w-100" src={image} alt="photos" />
                            <p className='p-3 fs-5'>Location : <em className="text-decoration-underline">{location}</em></p>
                        </button>
                        </Link>
                    </div>
                ))}
            </div>);
    }
}

export default NonVeg;