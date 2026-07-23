import "../styles/ProductCard.css";

function ProductCard(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.image} alt={props.name} />
      </div>

      <h2>{props.name}</h2>
      <h3>₹{props.price}</h3>

      <button onClick={props.addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;