// import React from 'react'
import { Link } from 'react-router'
import Cctv from '../../images/cctv.jpg'
// import { IoShieldCheckmark } from "react-icons/io5";
import { IoShieldCheckmark } from 'react-icons/io5'

function Hero2CE() {
  return (
    <>

            {/* Large Screen UI */}
            <div className='lg:block md:hidden hidden lg:px-40 lg:bg-slate-200'>
                <div className='lg:flex lg:py-20 lg:gap-4'>
                    <div className='lg:basis-1/2'>
                        <div className='lg:mx-auto'>
                            <h3 className='lg:py-8 lg:font-bold lg:text-4xl lg:uppercase'>Invest in Protecting Your Home & Family</h3>
                            <p className='lg:w-2/3 lg:pb-10 lg:text-2xl lg:tracking-wide'>Comprehensive security systems including intrusion detection access control, video survelliance and 24x7 monitoring.</p>
                            <p className='lg:w-2/3 lg:pl-2 lg:pb-10 lg:text-2xl lg:tracking-wide lg:uppercase'>
                                <IoShieldCheckmark className='lg:text-green-500 lg:text-4xl lg:inline-block' />
                                safety and security at your fingertips</p>
                            <Link to='/cctv'>
                                <button className='lg:bg-white lg:p-4 lg:text-2xl lg:tracking-wide lg:rounded lg:border-2 lg:border-black'>Explore More</button>
                            </Link>
                        </div>
                    </div>
                    <div className='lg:basis-1/2'>
                        <div className='lg:mx-auto lg:pt-10'>
                            <img src={Cctv} alt='internet' className='lg:mx-auto lg:w-136 lg:h-112 lg:rounded-lg lg:drop-shadow-lg' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Tablet Screen UI */}
            <div className='md:block lg:hidden hidden md:px-24 md:bg-slate-200'>
                <div className='md:flex md:py-20 md:gap-4'>
                    <div className='md:basis-1/2'>
                        <div className='md:mx-auto'>
                            <h3 className='md:py-8 md:font-bold md:text-2xl md:uppercase'>Invest in Protecting Your Home & Family</h3>
                            <p className='md:w-2/3 md:pb-10 md:text-lg md:tracking-wide'>Comprehensive security systems including intrusion detection access control, video survelliance and 24x7 monitoring.</p>
                            <p className='md:w-2/3 md:pl-2 md:pb-10 md:text-lg md:tracking-wide md:uppercase'>
                                <IoShieldCheckmark className='md:text-green-500 md:text-2xl md:inline-block' />
                                safety and security at your fingertips</p>
                            <Link to='/cctv'>
                                <button className='md:bg-white md:p-4 md:text-lg md:tracking-wide md:rounded md:border-2 md:border-black'>Explore More</button>
                            </Link>
                        </div>
                    </div>
                    <div className='md:basis-1/2'>
                        <div className='md:mx-auto md:pt-10'>
                            <img src={Cctv} alt='internet' className='md:mx-auto md:size-64 md:rounded-lg md:drop-shadow-lg' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Screen UI */}
            <div className='md:hidden lg:hidden block px-5 bg-slate-200'>
                <div className='flex py-8'>
                    <div className=''>
                        <div className='mx-auto'>
                            <h3 className='py-2 font-bold text-center text-2xl uppercase'>Invest in Protecting Your Home & Family</h3>
                            <div className='mx-auto py-2'>
                                <img src={Cctv} alt='internet' className='mx-auto size-40 rounded-lg drop-shadow-lg' />
                            </div>
                            <p className='pb-8 text-center text-base tracking-wide'>Comprehensive security systems including intrusion detection access control, video survelliance and 24x7 monitoring.</p>
                            <p className='pb-4 text-center text-lg tracking-wide uppercase'>
                                <IoShieldCheckmark className='text-green-500 text-xl inline-block' />
                                safety and security at your fingertips</p>
                                <div className='block mx-auto'>
                            <Link to='/cctv'>
                                <button className='bg-white w-full mx-auto p-2 font-semibold text-base tracking-wide rounded border-2 border-black'>Explore More</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Hero2CE