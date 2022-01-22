import "./card.css";

const ProductCard = (props) => {
    const{title, price, category, image, count} = props.details;
    return (
        <div className="product-card">
            <img src={image} alt = "phone" />
            <div className="product-title">{title}</div>
            <div className="product-description">{category}</div>
            <div className="product-price">${price}</div>
            <div>Count = {count}</div>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductCard;