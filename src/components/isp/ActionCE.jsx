// import React from 'react'
import { Link } from 'react-router'

function ActionCE() {
  return (
    <>
            {/* Large Screen UI */}
            <div className='lg:block md:hidden hidden lg:px-40 lg:py-20'>
                <div className='lg:py-14 lg:font-extrabold lg:text-6xl lg:text-center'>
                    <h1>Start your journey with us today!</h1>
                </div>

                <div className='flex flex-row lg:py-10'>
                    <div className='basis-1/2 lg:text-center'>
                    <Link to='/internet'>
                        <button className='lg:bg-black lg:p-4 lg:text-white lg:text-2xl lg:tracking-wide lg:rounded' type="submit">Browse our internet plans</button>
                    </Link>
                    </div>

                    <div className='basis-1/2 lg:text-center'>
                    <Link to='/cctv'>
                        <button className='lg:bg-black lg:p-4 lg:text-white lg:text-2xl lg:tracking-wide lg:rounded' type="submit">Check out our CCTVs</button>
                    </Link>
                    </div>
                </div>

                
            </div>

            {/* Tablet Screen UI */}
            <div className='md:block lg:hidden hidden md:px-24 md:py-10'>
                <div className='md:py-14 md:font-extrabold md:text-4xl md:text-center'>
                    <h1>Start your journey with us today!</h1>
                </div>

                <div className='flex flex-row md:pb-4'>
                    <div className='basis-1/2 lg:text-center'>
                    <Link to='/internet'>
                        <button className='lg:bg-black lg:p-4 lg:text-white lg:text-2xl lg:tracking-wide lg:rounded' type="submit">Browse our internet plans</button>
                    </Link>
                    </div>

                    <div className='basis-1/2 lg:text-center'>
                    <Link to='/cctv'>
                        <button className='lg:bg-black lg:p-4 lg:text-white lg:text-2xl lg:tracking-wide lg:rounded' type="submit">Check out our CCTVs</button>
                    </Link>
                    </div>
                </div>

                {/* <div className='md:pb-4 md:text-center'>
                    <Link to='/service'>
                        <button className='md:bg-black md:p-4 md:font-semibold md:text-white md:text-xl md:tracking-wide md:rounded' type="submit">Book a Service</button>
                    </Link>
                </div> */}
            </div>

            {/* Mobile Screen UI */}
            <div className='md:hidden lg:hidden block px-5 py-10'>
                <div className='py-8 font-bold text-3xl text-center'>
                    <h1>Start your journey with us today!</h1>
                </div>

                <div className='pb-4 text-center'>

                    <div className='my-2'>
                        <Link to='/internet'>
                            <button className='bg-black p-2 w-full font-semibold text-white text-lg tracking-wide rounded' type="submit">Browse our internet plans</button>
                        </Link>
                    </div>
                    
                    <div className='my-2'>
                        <Link to='/cctv'>
                            <button className='bg-black p-2 w-full font-semibold text-white text-lg tracking-wide rounded' type="submit">Check out our CCTVs</button>
                        </Link>
                    </div>
                    
                </div>
            </div>

        </>
  )
}

export default ActionCE