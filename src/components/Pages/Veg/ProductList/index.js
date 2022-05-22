import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import prod from './products.json';
import './style.css';
import { Link } from 'react-router-dom';
import Navbar from '../../../commons/Navbar';
import Search from '../../../front-page/Search';


class Veg extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Navbar />
                <Search />
                <h1 className="text-center p-4">Try Out Some Delicious Today</h1>
                {prod && prod.map(({ id, title, location, image }) => (
                    <div className="container col-sm-3 height d-inline-block m-3 mx-auto" key={id}>
                         <Link to={'/vegitemlist'}>
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



// export {shopid};
export default Veg;