import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='font-bold text-[#00df9a] text-3xl w-full'>React.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe dolores quasi quos minima doloribus suscipit 
                tempore, reprehenderit consectetur modi velit explicabo
                minus optio sint possimus quo, quidem eveniet ea in!
            </p>
            <div className='flex md:w-[75%] gap-[5px]'>
                <FaFacebookSquare size={30} className='cursor-pointer'/>
                <FaGithubSquare size={30} className='cursor-pointer'/>
                <FaInstagram size={30} className='cursor-pointer'/>
                <FaDribbbleSquare size={30} className='cursor-pointer'/>
                <FaTwitterSquare size={30} className='cursor-pointer'/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-2'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blogs</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>

        </div>

    </div>
  )
}

export default Footer