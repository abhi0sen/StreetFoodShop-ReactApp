import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
// import Navbar from "./component/Navbar";
// import SearchFilter from "./component/SearchFilter";
// import ProductListing from "./component/ProductListing";
import prod from './products.json';
// import './style.css';



class Veg extends Component {

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
                    <div className="shop mx-auto" key={id}>
                        <button className="btn btn-outline-secondary">
                            <p className='p-3 fs-2'>{title}</p>
                            <img className="img" src={image} alt="photos" />
                            <em><p className='p-3 fs-5'>{location}</p></em>
                        </button>
                    </div>
                ))}
                {loading && <p>Products are loading.. Please Wait..</p>}
                {/* {!loading && <ProductListing list={productsList} />} */}
            </div>);
    }
}

export default Veg;