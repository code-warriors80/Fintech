import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import pay from '../Images/payne011.png'
import balance from '../Images/payne08.png'
import loan from '../Images/payne07.png'
import transfer from '../Images/payne012.png'

const Services = () => {
  return (
    <section className='px-5 pb-5 lg:px-20'>
               <h1 className='text-center my-20 text-3xl lg:text-4xl'>Top Up, Transfer, and Balance Withdraw is Easy</h1>
               <div className='lg:flex lg:items-center lg:justify-around'>
                              <div className='box bg-green-400 lg:w-5/12 lg:mx-5 w-[100%]  py-5 rounded-lg shadow-lg mb-10 lg:mb-0'>
                                             <div className='flex items-center justify-center'>
                                                            <img src={pay} alt='' className='w-4/12 lg:w-5/12' />
                                             </div>
                                             
                                             <h1 className='text-center text-[17px] lg:text-[22px] font-semibold my-3 text-white'>Smooth Top Up</h1>
                                             <p className='text-center mb-3 px-7 text-white text-sm lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                             <Link className='flex items-center justify-center text-white text-sm lg:text-lg'>Read More <span className='ml-3'><FaArrowRight /></span></Link>
                              </div>

                              <div className='box bg-green-400 lg:mx-5 w-[100%] lg:w-5/12 py-5 rounded-lg shadow-lg mb-10 lg:mb-0'>
                                             <div className='flex items-center justify-center'>
                                             <img src={balance} alt='' className='w-4/12 lg:w-5/12'/> 
                                             </div>
                                             
                                             <h1 className=' text-center text-[17px] lg:text-[22px] font-semibold my-3 text-white'>Balance Withdraw</h1>
                                             <p className='text-center mb-3 px-7 text-white text-sm lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                             <Link className='flex items-center  justify-center text-white text-sm lg:text-lg'>Read More <span className='ml-3'><FaArrowRight /></span></Link>
                              </div>

                              <div className='box bg-green-400 lg:mx-5 w-[100%] lg:w-5/12 py-5 rounded-lg shadow-lg mb-10 lg:mb-0'>
                                             <div className='flex items-center justify-center'>
                                                            <img src={loan} alt='' className='w-4/12 lg:w-5/12'/>
                                             </div>
                                             
                                             <h1 className='text-center text-[17px] lg:text-[22px] font-semibold my-3 text-white'>Loan & Credit</h1>
                                             <p className='text-center mb-3 px-7 text-white text-sm lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                             <Link className='flex items-center  justify-center text-white text-sm lg:text-lg'>Read More <span className='ml-3'><FaArrowRight /></span></Link>
                              </div>

                              <div className='box bg-green-400 lg:mx-5 w-[100%] lg:w-5/12 py-5 rounded-lg shadow-lg mb-10 lg:mb-0'>
                                             <div className='flex items-center justify-center'>
                                                            <img src={transfer} alt='' className='w-4/12 lg:w-5/12'/>
                                             </div>
                                             
                                             <h1 className='text-center text-[17px] lg:text-[22px] font-semibold my-3 text-white'>Easy Transfer</h1>
                                             <p className='text-center mb-3 px-7 text-white text-sm lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                             <Link className='flex items-center  justify-center text-white text-sm lg:text-lg'>Read More <span className='ml-3'><FaArrowRight /></span></Link>
                              </div>
               </div>
    </section>
  )
}

export default Services