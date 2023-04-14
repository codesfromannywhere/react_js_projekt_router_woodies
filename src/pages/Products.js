import productData from '../data/productData'
// console.log(productData);
import ProductItem from '../components/ProductItem';

const Products = () => {
    return (
        <section className='product-grid'>
            {productData.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        id={product.id}
                        productname={product.productname}
                        img={product.img}
                    />
                )
            })}
        </section>);
}

export default Products;