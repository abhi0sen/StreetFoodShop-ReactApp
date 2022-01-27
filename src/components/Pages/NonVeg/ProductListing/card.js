// import { Link } from "react-router-dom";

// import "./card.css";

const ProductCard = (props) => {
  const {id, title, location, image } = props.details;
  console.log("productsList");
  return (
    <div className="product-card">
      {/* <img src={image} alt="phone" />
      <div className="Shop-title">{title}</div>
      <div className="Shop-Location">{location}</div>
      <button>Add To Card</button> */}

      {/* {count === 0 && (
        <button onClick={() => props.handleProductAdd()}> Add to Cart</button>
      )}
      {count > 0 && (
        <div className="card-count-wrapper">
          <button onClick={() => props.handleProductAdd()}>+</button>
          <div className="count-text"> {count} </div>
          <button onClick={() => props.handleProductRemove()}>-</button>
        </div>
      )}
      <div>
        <Link to={`/product-details/${id}`}>Details</Link>
      </div> */}
    </div>
  );
};

export default ProductCard;