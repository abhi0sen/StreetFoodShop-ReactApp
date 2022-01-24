import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import img from './streetShop.jpg';

class Search extends Component {

    render() {
        return (
        <div className='container'>
        <div>
            <form action="" className='text-center bg-dark py-3'>
                <input className='w-75 rounded-100' type="text" placeholder="Enter Shop Name" />
                <input className='mx-3 text-light btn btn-outline-secondary' type="submit" value="Search" />
            </form>
        </div>
        <div>
            <img className='w-100' src={img} alt="Jai Shri Ram" />
        </div>
        <div className='my-2 border p-2'>
            <h3 className='mx-5'>Street Shops of Ujjain</h3>
        </div>
        </div>
        );
    };
}

export default Search;