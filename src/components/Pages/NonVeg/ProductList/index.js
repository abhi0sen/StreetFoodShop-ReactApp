import React, { Component } from "react";
// import Navbar from "./component/Navbar";
// import SearchFilter from "./component/SearchFilter";
// import ProductListing from "./component/ProductListing";
import prod from './products.json';
import './style.css';
import Search from '../../../front-page/Search.js';
import Navbar from '../../../commons/Navbar';
import { Link } from "react-router-dom";
// import ProductListing from "../ProductListing";

class NonVeg extends Component {
    constructor() {
        super();
        this.state = {
            ProductList: [],
            loading: true,
            // productsAddedToCart: [],
            // shopid: 0,
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
            // shopid: 0
        });
    }
    // componentDidMount(){
        
    //     // const data = {prod}.json();
    //     // this.setState({
    //     //     productsList: data,
    //     // });
    //     console.log("productsList");
    // }

    render() {
        const { productsList, loading, productsAddedToCart } = this.state;
        // const { loading} = this.state;
        // const 
        // const {  } = useParams();
//         <BrowserRouter>
//     <Routes>
//       <Route path="/veg/shopDetail" element={<ProductDetails />} />
//     </Routes>
//   </BrowserRouter>
        return (
            <div>
                <Navbar />
                {/* <SearchFilter /> */}
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
                {loading && <p>Products are loading.. Please Wait..</p>}
                {/* {!loading && <ProductListing list={productsList} />} */}
            </div>);
    }
}

export default NonVeg;