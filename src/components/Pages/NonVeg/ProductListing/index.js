// import ProductCard from "./card";
import React, { Component } from "react";
import Navbar from "../../../commons/Navbar";
import Search from "../../../front-page/Search";
import food from './products.json';
// import './style.css';

class ProductListing extends Component {
    constructor() {
        super();
        this.state = ({
            productsList: food,
            loading: true,
            productsAddedToCart: [],
            //count : 0,
        });
    }

      componentDidMount() {
        this.getProducts();
    }

    async getProducts() {
        const response = await fetch({ food })
        const data = await response.json();

        this.setState({
            loading: false,
            productsList: data,
            // shopid: 0
        });
    }

    addToCart(index){
        console.log(index);
        const {productsList} = this.state;
        productsList[0].count = 2;
        if(typeof productsList[index].count != "undefined"){
            productsList[index].count +=1;
        }else{
            productsList[index].count = 1;
        }
        
        this.setState({
            productsList,
        })
    }

    RemoveToCart(index){
        console.log(index);
        const {productsList} = this.state;
        // productsList[0].count = 2;
        if(typeof productsList[index].count != "undefined"){
            productsList[index].count -=1;
        }else{
            productsList[index].count =1;
        }

        this.setState({
            productsList,
        })
    }
    render(){
        const {count =0} = this.state;
    return (
        <div>
            <Navbar />

                {/* <Search count={this.productsAddedToCart.length} /> */}
                <Search count = {4} />
                {food && food.map(({ id, FoodType, image }, index) => (
                    <div className="height my-4 container col-3 m-3 mx-auto text-center" key={id}>                        
                            <p className='p-3 fs-2'>{FoodType}</p>
                            <img className="w-100  col-lg-12" src={image} alt="photos" />
                            <div>count = {count}</div>
                            {count === 0 &&
                        <button  onClick={() => this.addToCart(index)} className="btn btn-outline-secondary m-2 ">
                            Add To Cart
                        </button>
                            }
                            {count > 0 &&
                            <div>

                        <button  onClick={() => this.addToCart(index)} className="btn btn-outline-secondary m-2 ">
                            +
                        </button>
                                <p>{count}</p>
                        <button  onClick={() => this.removeToCart(index)} className="btn btn-outline-secondary m-2 ">
                            -
                        </button>
                        </div>
                            }
                    </div>
                ))}
    </div>
  );
};
}
export default ProductListing;