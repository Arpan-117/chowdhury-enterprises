// import React from 'react'
import { Link } from 'react-router'
import BannerCE from './BannerCE'
import Img from '../../images/Hero.jpg'

function HeroCE() {
  return (
    <div>

        <BannerCE />

        {/* Large Screen UI */}
        <div className='md:hidden lg:flex hidden lg:py-14 lg:gap-4 lg:px-40'>
            <div className='lg:basis-1/2'>
            <div className='lg:mx-auto'>
                <h3 className='lg:py-8 lg:font-bold lg:text-4xl lg:uppercase'>Find The Best Internet Connection in Your City</h3>
                <p className='lg:w-2/3 lg:pb-10 lg:text-2xl lg:tracking-wide'>Start using our hassle free internet services as we offer a variety of internet plans for home & office with speeds upto 300 Mbps.</p>
                <p className='lg:w-2/3 lg:text-2xl lg:tracking-wide'>Plans starting from Rs 299/-* per month</p>
                <p className='lg:w-2/3 lg:pb-14 lg:text-sm lg:tracking-wide'>*For 12 months with term agreement</p>
                <Link to='/internet'>
                <button className='lg:bg-black lg:p-4 lg:text-white lg:text-2xl lg:tracking-wide lg:rounded'>Explore More</button>
                </Link>
                </div>
            </div>
            <div className='lg:basis-1/2'>
            <div className='lg:mx-auto lg:pt-10'>
                <img src={Img} alt='internet' className='lg:mx-auto lg:w-[32rem] lg:h-[28rem] lg:rounded-lg lg:drop-shadow-lg' />
                </div>
            </div>
        </div>

        {/* Tablet Screen UI */}
        <div className='md:flex md:py-14 lg:hidden hidden md:px-24'>
        <div className='md:basis-1/2'>
            <div className='md:mx-auto'>
                <h3 className='md:py-8 md:font-bold md:text-2xl md:uppercase'>Find The Best Internet Connection in Your City</h3>
                <p className='md:w-2/3 md:pb-10 md:text-lg md:tracking-wide'>Start using our hassle free internet services as we offer a variety of internet plans for home & office with speeds upto 300 Mbps.</p>
                <p className='md:w-2/3 md:text-lg md:tracking-wide'>Plans starting from Rs 299/-* per month</p>
                <p className='md:w-2/3 md:pb-14 md:text-xs md:tracking-wide'>*For 12 months with term agreement</p>
                <Link to='/internet'>
                <button className='md:bg-black md:p-4 md:text-white md:text-lg md:tracking-wide md:rounded'>Explore More</button>
                </Link>
                </div>
            </div>
            <div className='md:basis-1/2'>
            <div className='md:mx-auto md:pt-10'>
                <img src={Img} alt='internet' className='md:mx-auto md:size-64 md:rounded-lg md:drop-shadow-lg' />
                </div>
            </div>
        </div>

        {/* Mobile Screen UI */}
          <div className='flex py-5 lg:hidden md:hidden px-5'>
              <div className=''>

                  <div className='mx-auto'>
                      <h3 className='py-4 font-bold text-center text-2xl uppercase'>Find The Best Internet Connection in Your City</h3>
                      <div className='mx-auto py-2'>
                          <img src={Img} alt='internet' className='mx-auto size-40 rounded-lg drop-shadow-lg' />
                      </div>
                      <p className='pb-8 text-center text-base tracking-wide'>Start using our hassle free internet services as we offer a variety of internet plans for home & office with speeds upto 300 Mbps.</p>
                      <p className='text-center text-lg tracking-wide'>Plans starting from Rs 299/-* per month</p>
                      <p className='pb-8 text-center text-xs tracking-wide'>*For 12 months with term agreement</p>
                      <Link to='/internet'>
                          <button className='bg-black w-full p-2 font-semibold text-white text-base tracking-wide rounded'>Explore More</button>
                      </Link>
                  </div>
              </div>

          </div>

    </div>
  )
}

export default HeroCE