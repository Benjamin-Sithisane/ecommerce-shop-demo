import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsCart4 } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)
  return (
    <header className='bg-blue-200 position-absolute'>
      <Link to={'/'}>
        <div>
          <h1>NOTTA STORE</h1>
        </div>
      </Link>
      <div onClick={()=> setIsOpen(!isOpen)}>
          <div className='hover-6ba8f2 cursor-pointer max-w-[50px]'>
            <BsCart4  className='text-2x1'/>
            <div className='bg-red-500 absolute -right-2 
            -bottom-2 text-[12px] w-[18px] h-[18px] text-white 
            rounded-full flex justify-center items-center'>
              {itemAmount}
            </div>
          </div>
        </div>
    </header>
  )
};

export default Header;
