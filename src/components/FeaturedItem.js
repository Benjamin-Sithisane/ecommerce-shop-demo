import { React, useContext } from 'react'
import FeaturedProduct from './FeaturedProduct';
import { ProductContext } from '../contexts/ProductContext';

const FeaturedItem = () => {
    const { products } = useContext(ProductContext)

    const filteredProducts = products.filter(item => {
        return (
          item.category === "men's clothing" || 
          item.category === "women's clothing"
        )
      })

      const getRandomProduct = (products) => {
        const randomIndex = Math.floor(Math.random() * products.length);
        return products[randomIndex];
    };

    const randomProduct = getRandomProduct(filteredProducts);

    return (
        <div className='w-[600px] justify-center place-content-center'>
            <h1 className='font-bold text-xl mb-10'>Featured Product</h1>
           {randomProduct && <FeaturedProduct product={randomProduct} key={randomProduct.id} />}
        </div>
    );
}

export default FeaturedItem