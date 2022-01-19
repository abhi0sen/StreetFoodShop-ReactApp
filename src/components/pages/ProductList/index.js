import React, {Component} from "react";
import Navbar from "./component/Navbar";
import SearchFilter from "./component/SearchFilter";
import ProductListing from "./component/ProductListing";


class ProductList extends Component{

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
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json();
        this.setState({
            loading: false,
            productsList: data,
        });
    }

    render(){
        const {productsList, loading, productsAddedToCart} = this.state;
        return(
        <div>
            <Navbar count={productsAddedToCart.length} />
            <SearchFilter />
            {loading && <p>Products are loading.. Please Wait..</p>}
            {!loading && <ProductListing list={productsList} />}
        </div>);
    }
}

export default ProductList;