import 'bootstrap/dist/css/bootstrap.min.css';
// import button from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, {Component} from "react";

// class Search extends Component {
    // render() {
        const Search = (props) => {
        return (
        <div className='container-fluid bg-dark'>
        <div >
            <form action="" className='text-center bg-dark py-2'>
                <input className='w-50' type="text" placeholder="Enter Shop Name" />
                <input className='mx-3 text-light btn btn-outline-secondary' type="submit" value="Search" />
            </form>
        </div>
        <div>
            <img src="/cart.jpg" alt="Cart" />
            <p className='text-light'>{props.count}</p>
        </div>
        </div>
        );
    // };
}

export default Search;