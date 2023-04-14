import { Link } from "react-router-dom";

const ProductItem = (props) => {
    return (
        <div>
            <h3>{props.productname}</h3>
            <img src={props.img} alt="productImage" />
            <Link to={`/products/${props.id}`} className="button-style">Shop now</Link>
        </div>
    );
}

export default ProductItem;