import React, { Component } from "react";
// import Navbar from "./component/Navbar";
// import SearchFilter from "./component/SearchFilter";
// import ProductListing from "./component/ProductListing";
import prod from './products.json';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class NonVeg extends Component {

    constructor() {
        super();
        this.state = {
            ProductList: [],
            loading: true,
            productsAddedToCart: [],
        };
    }

    componentDidMount() {
        this.getProducts();
    }

    async getProducts() {
        const response = await fetch({ prod })
        const data = await response.json();

        this.setState({
            loading: false,
            productsList: data,
        });
    }

    // addToCart(index) {
    //     const { productList } = this.state;
    // }

    render() {
        // const { productsList, loading, productsAddedToCart } = this.state;
        const { loading} = this.state;
        return (
            <div>
                {/* <Navbar count={productsAddedToCart.length} /> */}
                {/* <SearchFilter /> */}
                {prod && prod.map(({ id, title, location, image }) => (
                    <div className="container col-sm-12 mb-1 mx-auto" key={id}>
                        <button className="btn btn-outline-secondary">
                            <p className='p-3 fs-2'>{title}</p>
                            <img className="w-100" src={image} alt="photos" />
                            <p className='p-3 fs-5'>Location: <em className="text-decoration-underline">{location}</em></p>
                        </button>
                    </div>
                ))}
                {loading && <p>Products are loading.. Please Wait..</p>}
                {/* {!loading && <ProductListing list={productsList} />} */}
            </div>);
    }
}

export default NonVeg;