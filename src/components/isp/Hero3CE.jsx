// import React from 'react'
import { Link } from 'react-router'
import Network from '../../images/networks.jpg'

function Hero3CE() {
  return (
    <>

            {/* Large Screen UI */}
            <div className='lg:block md:hidden hidden lg:py-20 lg:px-40 lg:bg-white'>
                <div className='lg:flex'>
                    <div className='lg:basis-1/2'>
                        <div className='lg:mx-auto'>
                            <h3 className='lg:py-8 lg:font-bold lg:text-4xl lg:uppercase'>Home & Business Networking Solutions</h3>
                            <p className='lg:w-2/3 lg:pb-20 lg:text-2xl lg:tracking-wide'>Our networking experts will build a solution that works around your needs.</p>
                            <Link to='/home-office-networking'>
                                <button className='lg:bg-black lg:p-4 lg:text-2xl lg:text-white lg:tracking-wide lg:rounded'>Explore More</button>
                            </Link>
                        </div>
                    </div>
                    <div className='lg:basis-1/2'>
                        <div className='lg:mx-auto lg:pt-10'>
                            <img src={Network} alt='internet' className='lg:rounded-lg lg:drop-shadow-lg lg:mx-auto lg:w-[34rem] lg:h-[20rem]' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Tablet Screen UI */}
            <div className='md:block lg:hidden hidden md:py-20 md:px-24 md:bg-white'>
                <div className='md:flex'>
                    <div className='md:basis-1/2'>
                        <div className='md:mx-auto'>
                            <h3 className='md:py-8 md:font-bold md:text-2xl md:uppercase'>Home & Business Networking Solutions</h3>
                            <p className='md:w-2/3 md:pb-20 md:text-lg md:tracking-wide'>Our networking experts will build a solution that works around your needs.</p>
                            <Link to='/home-office-networking'>
                                <button className='md:bg-black md:p-4 md:text-lg md:text-white md:tracking-wide md:rounded'>Explore More</button>
                            </Link>
                        </div>
                    </div>
                    <div className='md:basis-1/2'>
                        <div className='md:mx-auto md:pt-10'>
                            <img src={Network} alt='internet' className='md:rounded-lg md:drop-shadow-lg md:mx-auto md:size-64' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Screen UI */}
            <div className='md:hidden lg:hidden block py-10 px-5 bg-white'>
                <div className=''>
                    <div className=''>
                        <div className='mx-auto'>
                            <h3 className='py-2 font-bold text-center text-2xl uppercase'>Home & Business Networking Solutions</h3>
                            <div className='mx-auto pt-2'>
                                <img src={Network} alt='internet' className='rounded-lg drop-shadow-lg mx-auto size-40' />
                            </div>
                            <p className='pt-2 pb-8 text-center text-base tracking-wide'>Our networking experts will build a solution that works around your needs.</p>
                            <Link to='/home-office-networking'>
                                <button className='bg-black w-full p-2 font-semibold text-base text-white tracking-wide rounded'>Explore More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
  )
}

export default Hero3CE