import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white flex justify-center items-center min-h-[100vh] mt-[-96px] mr-[10px] ml-[10px]'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-center p-0 tracking-widest uppercase text-[#00df9a] font-bold md:text-xl'>Growing with data analytics</p>
            <p className='text-center font-extrabold p-0 md:text-4xl sm:text-3xl text-[2rem]'>Grow with data.</p>
            <div className='flex gap-x-[10px] justify-center items-center'>
                <p className='md:text-3xl sm:text-2xl text-[1.25rem] text-center'>Fast, flexible financing for</p>
                <Typed className='md:text-3xl text-[#00df9a] underline font-bold sm:text-2xl text-[1.25rem] text-center' strings={['HTML', 'CSS', 'JS','SASS']} typeSpeed={120} backSpeed={140} loop/>
            </div>

            <p className='text-center md:text-[1.2rem] text-[1rem] mt-[5px]'>Monitor your data analytics to increase revenue for HTML, CSS, JS, SASS</p>
            <button className='bg-[#00df9a] w-[150px] text-center rounded-md font-medium py-1 mt-2 text-black'>Get Started</button>

        </div>
    </div>
  )
}

export default Hero