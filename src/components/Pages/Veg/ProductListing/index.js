import React, { Component } from "react";
import Navbar from "../../../commons/Navbar";
import Search from "../../../front-page/Search";
import food from './products.json';

class VegItemList extends Component {
    constructor() {
        super();
        this.state = ({
            productsList: food,
            masterList: food,
            productsAddedToCart: 0,
            cartData: [],
        });
    }

    addToCart(index) {
        console.log(index);
        const { productsList, cartData } = this.state;
        let { productsAddedToCart } = this.state;

        if (typeof productsList[index].count != "undefined") {
            productsList[index].count += 1;
        } else {
            productsList[index].count = 1;
        }

        if(cartData[productsList[index].id]){
            cartData[productsList[index].id] += 1;
        }else {
            cartData[productsList[index].count] =1;
        }

        productsAddedToCart += 1;
        console.log(productsAddedToCart);
        localStorage.setItem('cartData', JSON.stringify(cartData));


        this.setState({
            productsList,
            productsAddedToCart,
            cartData,
        })
    }

    RemoveToCart(index) {
        console.log(index);
        const { productsList, cartData } = this.state;
        let { productsAddedToCart } = this.state;

        if (typeof productsList[index].count != "undefined") {
            productsList[index].count -= 1;
        } else {
            productsList[index].count = 1;
        }
        
        if(cartData[productsList[index].id]){
            cartData[productsList[index].id] -= 1;
            if(cartData[productsList[index].id] === 0){
                delete cartData[productsList[index].id];
            }
        }else {
            cartData[productsList[index].count] =1;
        }

        productsAddedToCart -= 1;
        localStorage.setItem('cartData', JSON.stringify(cartData));

        this.setState({
            productsList,
            productsAddedToCart,
            cartData,
        })
    }

    searchHandler(searchTerm){
        console.log(searchTerm);
        const {masterList} = this.state;
        // console.log(masterList);
        if (!searchTerm && searchTerm === ""){
            this.setState({
                productsList: masterList,
            });
        } else {
            const filteredList = [];
            for (let i=0; i < masterList.length; i++){
                if(masterList[i].FoodType.indexOf(searchTerm)>-1){
                    filteredList.push(masterList[i]);
                }
            }
            this.setState({
                productsList : filteredList,
            });
            console.log(filteredList);
        }
    }

    componentDidMount (){
        let {productsAddedToCart} = this.state;
        const {productsList, cartData} = this.state;

        for (let i=0; i<Object.keys(cartData).length; i+=1){
            const key = Object.keys(cartData)[i];

            for(let j = 0; j < productsList.length; j+=1) {
                // console.log(productsList[j].key );
                if (productsList[j].id == key){
                    productsList[j].count = cartData[key];
                    productsAddedToCart += cartData[key]
                    break;
                }
            }
        }
        this.setState({
            cartData,
            productsAddedToCart,
            // productsList: food,
            // masterList: food,
        });
    }

    render() {
        const { productsAddedToCart} = this.state;
        return (
            <div>
                <Navbar />
                <Search count={productsAddedToCart} searchHandler={(searchTerm) => this.searchHandler(searchTerm)} />
                {food && food.map(({ id, FoodType, image, count = 0 }, index) => (
                    <div className=" my-4 container col-3 m-3 mx-auto text-center" key={id}>
                        <p className='p-3 fs-2'>{FoodType}</p>
                        <img className="w-100  col-lg-12" src={image} alt="photos" />
                        {/* <div>count = {count}</div> */}
                        {count === 0 &&
                            <button onClick={() => this.addToCart(index)} className="btn btn-outline-secondary m-2 ">
                                Add To Cart
                            </button>
                        }
                        {count > 0 &&
                            <div>
                                <button onClick={() => this.addToCart(index)} className="btn btn-outline-secondary px-4 m-2 ">
                                    +
                                </button>
                                <span className="px-3">{count}</span>
                                <button onClick={() => this.RemoveToCart(index)} className="btn btn-outline-secondary  px-4 m-2 ">
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
export default VegItemList;