// import ProductCard from "./card";
import React, { Component } from "react";
import Navbar from "../../../commons/Navbar";
import Search from "../../../front-page/Search";
import food from './products.json';

class NonVegItemList extends Component {
    constructor() {
        super();
        this.state = ({
            productsList: food,
            productsAddedToCart: 0,
        });
    }

    addToCart(index){
        console.log(index);
        const {productsList} = this.state;
        let {productsAddedToCart} = this.state;

        if(typeof productsList[index].count != "undefined"){
            productsList[index].count +=1;
        }else{
            productsList[index].count = 1;
        }

            productsAddedToCart += 1;
            console.log(productsAddedToCart)
        
        this.setState({
            productsList,
            productsAddedToCart,
        })
    }

    RemoveToCart(index){
        console.log(index);
        const {productsList} = this.state;
        let {productsAddedToCart} = this.state;

        if(typeof productsList[index].count != "undefined"){
            productsList[index].count -=1;
        }else{
            productsList[index].count = 1;
        }

        productsAddedToCart -= 1;
        
        this.setState({
            productsList,
            productsAddedToCart,
        })
    }


    render(){
        const {productsAddedToCart} = this.state;
    return (
        <div>
            <Navbar />

                <Search count={productsAddedToCart} />
                {food && food.map(({ id, FoodType, image, count=0 }, index) => (
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

                        <button  onClick={() => this.addToCart(index)} className="btn btn-outline-secondary px-4 m-2 ">
                            +
                        </button>
                                <span className=" px-3">{count}</span>
                        <button  onClick={() => this.RemoveToCart(index)} className="btn btn-outline-secondary  px-4 m-2 ">
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
export default NonVegItemList;