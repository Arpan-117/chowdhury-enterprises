import React from 'react'
import { Link } from 'react-router'
import AllBsnlPlansCE from '../../components/isp/AllBsnlPlansCE'
import Banner from '../../../public/BSNL/SSPP.webp'

function BsnlCE() {
  return (
    <>

            {/* Large Screen UI */}
            <div className='lg:block md:hidden hidden lg:bg-black lg:pt-16 lg:text-center'>
                {/* <div className='lg:pb-10 lg:pt-6'>
                    <Link to='/new-connection' >
                        <buttton className='lg:bg-white lg:p-4 lg:text-black lg:text-2xl lg:tracking-wide lg:rounded lg:hover:bg-slate-200'>Book a connection</buttton>
                    </Link>
                </div> */}

              <div className='lg:px-20 lg:py-4 lg:text-left'>
                  <Link to='/internet' >
                      <button className='lg:bg-white lg:p-2 lg:text-black lg:text-xl lg:tracking-wide lg:rounded lg:hover:bg-slate-300'> ◀️ Back to Popular Plans </button>
                  </Link>
              </div>

                <div className='lg:relative lg:h-[70vh] lg:mx-auto lg:w-[85%] lg:rounded-lg lg:overflow-hidden lg:bg-white'>
                    <div className='lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-full lg:h-full'>
                        <div className='lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:opacity-100 lg:z-10'>
                            <img src={Banner} alt='BSNL Banner' className='lg:w-full lg:h-full lg:object-fill' />
                        </div>
                    </div>
                </div>
                <div className='lg:pt-20'>
                <h2 className='lg:pb-8 lg:font-bold lg:text-white lg:text-center lg:text-5xl'>BSNL FTTH PLANS</h2>
                </div>
                <br />
            </div>

            {/* Tablet Screen UI */}
            <div className='md:block lg:hidden hidden md:bg-black md:pt-16 md:text-center'>
                <div className='md:pb-10 md:pt-6'>
                    <Link to='/new-connection' >
                        <button className='md:bg-white md:p-4 md:text-black md:text-xl md:tracking-wide md:rounded md:hover:bg-slate-200'>Book a connection</button>
                    </Link>
                </div>

                <div className='md:relative md:mx-auto md:h-[30vh] md:w-[85%] md:rounded-lg md:overflow-hidden md:bg-white'>
                    <div className='md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:h-full'>
                        <div className='md:absolute md:top-0 md:left-0 md:w-full md:h-full md:opacity-100 md:z-10'>
                            <img src={Banner} alt='BSNL Banner' className='md:w-full md:h-full md:object-fill' />
                        </div>
                    </div>
                </div>
                <div className='md:pt-20'>
                <h2 className='md:pb-8 md:font-bold md:text-white md:text-center md:text-3xl'>BSNL FTTH PLANS</h2>
                </div>
                <br />
            </div>

            {/* Mobile Screen UI */}
            <div className='block lg:hidden md:hidden bg-black pt-8 text-center'>
                <div className='pb-10 pt-6'>
                    <Link to='/new-connection' >
                        <button className='bg-white p-2 text-black text-lg tracking-wide rounded hover:bg-slate-200'>Book a connection</button>
                    </Link>
                </div>

                <div className='relative mx-auto h-[25vh] w-[85%] rounded-lg overflow-hidden bg-white'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'>
                        <div className='absolute top-0 left-0 w-full h-full opacity-100 z-10'>
                            <img src={Banner} alt='BSNL Banner' className='w-full h-full object-fill' />
                        </div>
                    </div>
                </div>
                <div className='pt-16'>
                    <h2 className='pb-4 font-bold text-white text-center text-3xl'>BSNL FTTH PLANS</h2>
                </div>
                <br />
            </div>

            <AllBsnlPlansCE />

        </>
  )
}

export default BsnlCE