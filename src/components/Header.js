import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsCart4 } from 'react-icons/bs'

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  return (
    <header className='bg-blue-200 position-absolute'>
      <div>Header</div>
      <div onClick={()=> setIsOpen(!isOpen)}>
          <div className='hover-6ba8f2 cursor-pointer'>
            <BsCart4  className='text-2x1'/>
          </div>
        </div>
    </header>
  )
};

export default Header;
