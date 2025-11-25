// import React from 'react'
import Bsnl from '../../assets/Logos/bsnl1.png'
import Railwire from '../../assets/Logos/rail_wire.png'
import CPplus from '../../assets/Logos/cp_plus.png'
import Dlink from '../../assets/Logos/D-Link.png'
import Digisol from '../../assets/Logos/DIGISOL.png'

function PartnersCE() {
  return (
    <>

    {/* Large Screen UI */}
    <div className='lg:block lg:p-2 lg:bg-black md:hidden hidden'>
          <h1 className='lg:text-white lg:text-center lg:text-3xl lg:font-bold" id="recognisitions'>Our Partnerships:</h1>
          <marquee className='lg:gap-12 lg:pt-6'>
              <div className='lg:flex lg:flex-row lg:gap-8 lg:gap-x-20 lg:bg-black'>
                  <img src={Bsnl} alt="First Cry Logo" className='lg:h-[140px]' />
                  <img src={Railwire} alt="First Cry Logo" className='lg:h-[90px]' />
                  <img src={CPplus} alt="First Cry Logo" className='lg:h-[90px]' />
                  <img src={Dlink} alt="First Cry Logo" className='lg:h-[90px]' />
                  <img src={Digisol} alt="First Cry Logo" className='lg:h-[90px]' />
              </div>
          </marquee>
      </div>

      {/* Tablet Screen UI */}
      <div className='md:block p-2 bg-black lg:hidden hidden'>
          <h1 className="md:text-white md:text-center md:text-lg md:font-bold" id="recognisitions">Our Partnerships:</h1>
          <marquee className="md:gap-12 md:pt-6">
              <div className="md:flex md:flex-row md:gap-8 md:gap-x-20 md:bg-black">
                  <img src={Bsnl} alt="First Cry Logo" className='md:h-24' />
                  <img src={Railwire} alt="First Cry Logo" className='md:h-24' />
                  <img src={CPplus} alt="First Cry Logo" className='md:h-24' />
                  <img src={Dlink} alt="First Cry Logo" className='md:h-24' />
                  <img src={Digisol} alt="First Cry Logo" className='md:h-24' />
              </div>
          </marquee>
      </div>

      {/* Mobile Screen UI */}
      <div className='block p-2 bg-black lg:hidden md:hidden'>
          <h1 className="text-white text-center text-lg font-bold" id="recognisitions">Our Partnerships:</h1>
          <marquee className="gap-12 pt-6">
              <div className="flex flex-row gap-8 gap-x-20 bg-black">
                  <img src={Bsnl} alt="First Cry Logo" className='h-24' />
                  <img src={Railwire} alt="First Cry Logo" className='h-24' />
                  <img src={CPplus} alt="First Cry Logo" className='h-24' />
                  <img src={Dlink} alt="First Cry Logo" className='h-24' />
                  <img src={Digisol} alt="First Cry Logo" className='h-24' />
              </div>
          </marquee>
      </div>

      </>
  )
}

export default PartnersCE