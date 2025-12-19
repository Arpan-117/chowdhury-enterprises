// import React from 'react'
import EquipmentsCE from '../../components/isp/EquipmentsCE'
import Equipments2CE from '../../components/isp/Equipments2CE'
import ConnectivityCE from '../../components/isp/ConnectivityCE'
import Vs from '/Networking/vs.webp'

function NetworkingCE() {
  return (
    <>

      {/* Large Screen UI */}
      <div className='lg:block md:hidden hidden lg:px-40 lg:py-10 lg:bg-black lg:text-white'>
        <h3 className='lg:pt-8 lg:font-bold lg:text-4xl lg:text-center lg:uppercase'>Wired and Wireless</h3>
        <h3 className='lg:pb-8 lg:font-bold lg:text-4xl lg:text-center lg:uppercase'>Networking Services</h3>

        <div>
          <div className='lg:flex lg:flex-row lg:text-justify'>

            <div className='lg:basis-1/2 lg:pr-5'>
              <p className='lg:text-2xl lg:tracking-wide'>Many of the same Internet protocols function in both wired and wireless networks. Ethernet cables have been the backbone of business, school, and home networks for decades. However, wireless technologies like Wi-Fi have recently become the preferred option for new computer networks, driven by the proliferation of smartphones and other wireless devices, leading to the growth of wireless and mobile networking.</p>
              <br />
              <p className='lg:text-2xl lg:tracking-wide'>Seamless online and offline operation is crucial for your business. That's why we offer tailored solutions that make the most sense for you and your company. Whether you need a wired network setup or prefer a wireless system, we can provide expert advice and installation based on your specific needs. Our experienced staff is ready to create and maintain the ideal network that best suits your business requirements</p>
            </div>
            <div className='lg:basis-1/2 lg:pl-5'>
              <br />
              <img src={Vs} alt='wired vs wireless' className='lg:rounded-lg lg:drop-shadow-lg' />
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Screen UI */}
      <div className='md:block lg:hidden hidden md:px-24 md:py-10 md:bg-black md:text-white'>
        <h3 className='md:pt-8 md:font-bold md:text-4xl md:text-center md:uppercase'>Wired and Wireless</h3>
        <h3 className='md:pb-8 md:font-bold md:text-4xl md:text-center md:uppercase'>Networking Services</h3>

        <div>
          <div className='md:text-justify'>

          <div className='md:px-5'>
              <br />
              <img src={Vs} alt='wired vs wireless' className='md:rounded-lg md:drop-shadow-lg' />
            </div>

            <div className='md:px-5'>
              <p className='md:text-lg md:tracking-wide'>Many of the same Internet protocols function in both wired and wireless networks. Ethernet cables have been the backbone of business, school, and home networks for decades. However, wireless technologies like Wi-Fi have recently become the preferred option for new computer networks, driven by the proliferation of smartphones and other wireless devices, leading to the growth of wireless and mobile networking.</p>
              <br />
              <p className='md:text-lg md:tracking-wide'>Seamless online and offline operation is crucial for your business. That's why we offer tailored solutions that make the most sense for you and your company. Whether you need a wired network setup or prefer a wireless system, we can provide expert advice and installation based on your specific needs. Our experienced staff is ready to create and maintain the ideal network that best suits your business requirements</p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Mobile Screen UI */}
      <div className='md:hidden lg:hidden block px-5 rounded-md py-10 bg-black text-white'>
        <h3 className='pt-8 font-bold text-3xl text-center uppercase'>Wired and Wireless</h3>
        <h3 className='pb-8 font-bold text-3xl text-center uppercase'>Networking Services</h3>

        <div>
          <div className='text-justify'>

          <div className='px-5'>
              <br />
              <img src={Vs} alt='wired vs wireless' className='rounded-lg drop-shadow-lg' />
            </div>

            <div className='px-5'>
              <p className='text-base tracking-wide'>Many of the same Internet protocols function in both wired and wireless networks. Ethernet cables have been the backbone of business, school, and home networks for decades. However, wireless technologies like Wi-Fi have recently become the preferred option for new computer networks, driven by the proliferation of smartphones and other wireless devices, leading to the growth of wireless and mobile networking.</p>
              <br />
              <p className='text-base tracking-wide'>Seamless online and offline operation is crucial for your business. That's why we offer tailored solutions that make the most sense for you and your company. Whether you need a wired network setup or prefer a wireless system, we can provide expert advice and installation based on your specific needs. Our experienced staff is ready to create and maintain the ideal network that best suits your business requirements</p>
            </div>
            
          </div>
        </div>
      </div>

      <EquipmentsCE />
      <Equipments2CE />
      <ConnectivityCE />

    </>
  )
}

export default NetworkingCE