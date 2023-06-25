import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex justify-center items-center flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer'>
                <img src={Single} alt='/' className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='mx-auto font-bold my-1 text-2xl'>Single User</h2>
                <p className='font-bold text-3xl'>$149</p>
                <div className='font-medium'>
                    <p className='py-2 border-b mt-8 mx-8'>500 GB Storage</p>
                    <p className='py-2 border-b mt-2 mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mt-2 mx-8'>Send up to 2 Gb</p>
                </div>
                <button className='bg-[#00df9a] w-[150px] text-center rounded-[10px] font-medium py-1 mt-2 text-black'>Start Trial</button>
            </div>

            <div className='w-full bg-gray-100 shadow-xl flex justify-center items-center flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 cursor-pointer'>
                <img src={Double} alt='/' className='w-20 mx-auto mt-[-3rem] bg-transparent'/>
                <h2 className='mx-auto font-bold my-1 text-2xl'>Single User</h2>
                <p className='font-bold text-3xl'>$149</p>
                <div className='font-medium'>
                    <p className='py-2 border-b mt-8 mx-8'>500 GB Storage</p>
                    <p className='py-2 border-b mt-2 mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mt-2 mx-8'>Send up to 2 Gb</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[150px] text-center rounded-[10px] font-medium py-1 mt-2'>Start Trial</button>
            </div>
            
            <div className='w-full shadow-xl flex justify-center items-center flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer'>
                <img src={Triple} alt='/' className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='mx-auto font-bold my-1 text-2xl'>Single User</h2>
                <p className='font-bold text-3xl'>$149</p>
                <div className='font-medium'>
                    <p className='py-2 border-b mt-8 mx-8'>500 GB Storage</p>
                    <p className='py-2 border-b mt-2 mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mt-2 mx-8'>Send up to 2 Gb</p>
                </div>
                <button className='bg-[#00df9a] w-[150px] text-center rounded-[10px] font-medium py-1 mt-2 text-black'>Start Trial</button>
            </div>

        </div>
    </div>
  )
}

export default Cards