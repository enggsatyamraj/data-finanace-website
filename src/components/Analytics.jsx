import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full py-16 bg-white px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/'/>
            <div className='flex flex-col justify-center'>
                <p className='uppercase text-[#00df9a] font-bold'>Data analytics Dashboard</p>
                <h1 className='md:text-2xl text-xl font-bold py-2'>Manage Data Analaytics Centrally</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Et at id doloribus illo 
                    praesentium perferendis exercitationem alias 
                    veritatis. Vitae, natus.
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Voluptate omnis, eius mollitia
                    temporibus quo, consequatur sunt numquam iusto, 
                    enim eaque amet tenetur itaque accusantium culpa
                    doloremque tempore? Vero, repellendus delectus!
                </p>
                <button className='bg-[#00df9a] w-[150px] text-center rounded-md mx-auto md:mx-0 font-medium py-1 mt-2 text-black'>Get Started</button>

            </div>
        </div>
    </div>
  )
}

export default Analytics