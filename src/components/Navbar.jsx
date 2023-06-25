import React from 'react'
import { useState } from 'react'
import { AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (

    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto'>
        <h1 className='font-bold text-[#00df9a] text-3xl w-full'>React.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer'>Home</li>
            <li className='p-4 cursor-pointer'>Company</li>
            <li className='p-4 cursor-pointer'>Resources</li>
            <li className='p-4 cursor-pointer'>About</li>
            <li className='p-4 cursor-pointer'>Contact</li>
        </ul>
        <div className='cursor-pointer block md:hidden' onClick={handleNav}>
            {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 p-4 top-0 border-r border-r-gray-900 w-[60%] h-full bg-transparent backdrop-blur-[8px] duration-500' : 'fixed left-[-100%]'}>
            <ul className='pt-24 uppercase'>
                <li className='p-4 border-b border-gray-600 cursor-pointer'>Home</li>
                <li className='p-4 border-b border-gray-600 cursor-pointer'>Company</li>
                <li className='p-4 border-b border-gray-600 cursor-pointer'>Resources</li>
                <li className='p-4 border-b border-gray-600 cursor-pointer'>About</li>
                <li className='p-4 cursor-pointer'>Contact</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar