import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";

class Search extends Component {
    render() {
        return (
        <div className='container'>
        <div>
            <form action="" className='text-center bg-dark py-3'>
                <input className='w-50' type="text" placeholder="Enter Shop Name" />
                <input className='mx-3 text-light btn btn-outline-secondary' type="submit" value="Search" />
            </form>
        </div>
        </div>
        );
    };
}

export default Search;