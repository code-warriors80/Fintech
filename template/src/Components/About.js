import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import landing from '../Images/payne01-1013x1024.png'
import deals from '../Images/payne03.png'

const About = () => {
  return (
    <section className='lg:flex lg:items-center lg:justify-between px-5 lg:pt-20 lg:px-36'>
                     <div className='hidden lg:block w-[100%] bg-green-400 pt-20 rounded-2xl lg:w-[55%] mb-10'>
                              <div className='w-[100%] rounded-2xl'>
                                              <div className='flex items-center justify-center relative top-[90px] h-0'>
                                                            <img src={deals} alt=''  className='lg:w-8/12 '/>      
                                             </div>                
                                             <div className='flex items-center justify-center'>
                                                            <img src={landing} alt=''  className='lg:w-7/12 '/>      
                                             </div>
                              </div>
               </div>
               <div className='w-[100%] lg:w-[35%] mb-10'>
                              <h1 className='text-3xl lg:text-4xl text-center lg:text-left'>Get To Know Paynet</h1>
                              <p className='py-8 text-sm lg:text-lg text-gray-400 text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime neque repellendus similique, dolorum praesentium sapiente blanditiis alias impedit.</p>
                              <Link className='flex items-center justify-center lg:flex lg:items-center lg:justify-start text-sm lg:text-lg'>Read More <span className='ml-3'><FaArrowRight /></span></Link>
               </div>

               <div className='block lg:hidden w-[100%] bg-green-400 pt-10 rounded-2xl lg:w-[55%] mb-10'>
                              <div className='w-[100%] rounded-2xl'>
                                              <div className='flex items-center justify-center relative top-[50px] h-0'>
                                                            <img src={deals} alt=''  className='lg:w-8/12 '/>      
                                             </div>                
                                             <div className='flex items-center justify-center'>
                                                            <img src={landing} alt=''  className='w-10/12 '/>      
                                             </div>
                              </div>
               </div>
    </section>
  )
}

export default About