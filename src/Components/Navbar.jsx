import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

z

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false); // Corrected state variable name

  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src='' className='w-32 cursor-pointer'/>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallet"].map((item, index) => (
          <NavbarItems key={item + index} title={item} />
        ))}
        <li className='bg-[#2925e3] py-2 px-7 mx-4 cursor-pointer rounded-md hover:bg-[#2546bd]'>Login</li>
      </ul>

      <div className='flex relative'>
        {toggleMenu
          ? <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} /> // Corrected onClick function
          : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} /> // Corrected onClick function
        }

        {toggleMenu && (
          <ul
          className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none text-white
          flex flex-col justify-start items-end rounded-md blue-glassmorphism animate-slide-in'
          >
            <li className='text-xl w-full my-2'>
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallet"].map((item, index) => (
          <NavbarItems key={item + index} title={item} classProps='my-2 text-lg' />
        ))}
          </ul>
        )}

      </div>

    </nav>
  );
}

export default Navbar;
