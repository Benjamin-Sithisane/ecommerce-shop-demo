import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  return (
    <div>
      <div>Header</div>
      <div onClick={()=> setIsOpen(!isOpen)}><button className='hover-6ba8f2'>open/close sidebar</button></div>
    </div>
  )
};

export default Header;
