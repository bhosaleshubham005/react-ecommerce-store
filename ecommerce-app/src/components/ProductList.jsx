import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList({ addToCart }) {   
    return (
        <div className="productlist">
            {products.map((product) =>(

            <ProductCard
            
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            addToCart={addToCart}
                />
            ))}
        </div>        
    )
}

export default ProductList;