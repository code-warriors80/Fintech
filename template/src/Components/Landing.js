import React from 'react'
import landing from '../Images/payne015-1024x938.png'

const Landing = () => {
  return (
    <div className='landing lg:flex lg:items-center lg:justify-around pt-[120px]  lg:pt-[250px] lg:pb-[0px] relative lg:px-36'>

               <div className='text-center lg:text-left w-[100%]'>
                              <h1 className='text-3xl font-bold lg:text-7xl lg:w-[75%] '>Pay Anything Anywhere Easier</h1>
                              <p className='mt-5 text-gray-400 mb-11 lg:mt-6 text-lg'>Top Up, Transfer and Withdraw is Easy</p>
               </div>
               <img src={landing} alt=''  className=' hidden lg:block lg:w-5/12 '/>    

               <div className='flex items-center block lg:hidden justify-center pb-10'>
                              <img src={landing} alt=''  className='w-11/12 lg:w-4/12'/>      
                </div> 

    </div>
  )
}

export default Landing