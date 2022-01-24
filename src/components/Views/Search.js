import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import img from './streetShop.jpg';

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
        <div>
            <img className='w-100' src={img} alt="Food Banner" />
        </div>
        <div className='my-2 border p-2'>
            <h3 className='mx-5'>Street Shops in Ujjain</h3>
        </div>
        </div>
        );
    };
}

export default Search;