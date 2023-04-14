import productData from '../data/productData'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const productParams = useParams();
    // console.log(productData[productParams.detail].img);

    return (
        <section>
            <h3>{productData[productParams.detail].productname}</h3>
            <p>{productData[productParams.detail].content}</p>
            <img src={productData[productParams.detail].img} />
        </section>
    );
}

export default ProductDetail;