import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import landing from '../Images/mm.png'

const Advert = () => {
  return (
    <section className=' lg:px-20 py-10'>
        <div className='lg:flex lg:items-center lg:justify-between bg-green-400 lg:rounded-2xl lg:px-20 py-10 lg:py-0'>
            <div className='lg:w-[40%] w-[100%]'>
                <h1 className='text-2xl text-white lg:text-4xl text-center lg:text-left'>Free Transaction with Paynet</h1>
                <p className='py-8 text-sm lg:text-lg text-white text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime neque repellendus similique, dolorum praesentium sapiente blanditiis alias impedit.</p>
                <Link className='flex text-white items-center justify-center lg:flex lg:items-center lg:justify-start text-sm lg:text-lg'>Read More <span className='ml-3'><FaArrowRight /></span></Link>
            </div>
            <div className='hidden lg:block lg:flex lg:items-center lg:justify-center lg:w-[50%] pt-5'>
                <img src={landing} alt=''  className=' lg:w-11/12 '/>    
            </div>
        </div>
    </section>
  )
}

export default Advert