import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { BsPlus, BsEyeFill } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext'

const FeaturedProduct = ({ product  }) => {
  const { addToCart } = useContext(CartContext)
  
  //destructure product
  const { id, image, title, price } = product

  return (
    <div>
      <div className='border-2 border-slate-600 mb-4 
      relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center 
        items-center px-2'>
                    {/* image */}
          <div className='h-fit mx-auto flex 
          justify-center items-center'> 
            <img
              className='h-[400px] w-[300px]' 
              src={image}
              alt=''
            />
          </div>
          <div className='absolute top-6 -right-11 
          group-hover:right-5 bg-red-500/40 
          p-2 flex flex-col items-center justify-center gap-y-2 
          opacity-0 group-hover:opacity-100 transition-all 
          duration-300'>
            <button onClick={() => addToCart(product, id)}>
              <div className='flex justify-center items-center 
              text-white w-12 h-12 bg-red-500'>
                <BsPlus className='text-3x1' />
              </div>
            </button>
            <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center 
            items-center text-primary drop-shadow-x1'><BsEyeFill /></Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col px-12'>
        <Link to ={`/product/${id}`}>
          <h2 className='font-semibold mb-1 justify-center hover:underline'>{title}</h2>
        </Link>
        <span>${parseFloat(price).toFixed(2)}</span>
      </div>
    </div>
  )
};

export default FeaturedProduct;