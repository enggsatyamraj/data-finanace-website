import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-[2rem] text-[1.4rem] font-bold'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-center'>
                    <input placeholder='Enter your email' className='py-1 rounded-[10px] px-1 mr-0 sm:mr-[5px] w-full text-black' type='Email'/>
                    <button className='bg-[#00df9a] w-[150px] text-center rounded-[10px] font-medium py-1 mt-2 sm:mt-0 text-black'>Notify Me</button>
                    
                </div>
                <p className='text-[0.75rem] text-center my-1'>We care about the protection of your data, Read our <span className='text-[#00df9a] underline cursor-pointer'>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter