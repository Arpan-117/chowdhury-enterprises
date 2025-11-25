// import React from 'react'
import Wired from '../../assets/Networking/wired.webp'
import Wireless from '../../assets/Networking/wireless.webp'

function ConnectivityCE() {
  return (
    <>

    {/* Large Screen UI */}
    <div className='lg:block md:hidden hidden lg:px-40 lg:py-10'>

        <div className='lg:flex lg:flex-row'>

            <div className='lg:basis-1/2 lg:pr-5'>
                <h3 className='lg:py-8 lg:font-bold lg:text-4xl lg:text-center lg:uppercase'>Wired Networking</h3>
                <img src={Wired} alt='Wired Network' className='lg:rounded-lg lg:drop-shadow-lg lg:border-4 lg:border-black' />
                <br />
                <p className='lg:text-2xl lg:tracking-wide'>On the wired front, the future focuses on enhancing speed and capacity. As data demands surge due to advancements in cloud computing, Big Data, and the Internet of Things (IoT), there is a strong push for even faster and more robust connections.</p>
                <br />
                <p className='lg:text-2xl lg:tracking-wide'>Fiber Optics: The use of fiber optic networks is expected to increase, delivering extremely fast speeds and vast data transfer capacity. This is especially true for data centers and large business operations, where the demand for fiber will likely continue to grow.</p>
                <br />
                <p className='lg:text-2xl lg:tracking-wide'>Higher-Speed Ethernet: The development of higher-speed Ethernet standards is also advancing. Companies are moving towards 100 Gigabit Ethernet and beyond, ensuring that wired networks continue to provide high-speed, reliable, and secure connections.</p>
            </div>

            <div className='lg:basis-1/2 lg:pl-5'>
                <h3 className='lg:py-8 lg:font-bold lg:text-4xl lg:text-center lg:uppercase'>Wireless Networking</h3>
                <img src={Wireless} alt='Wireless Network' className='lg:rounded-lg lg:drop-shadow-lg lg:border-4 lg:border-black' />
                <br />
                <p className='lg:text-2xl lg:tracking-wide'>Wi-Fi 6 and Beyond: Wi-Fi technology is continually evolving. With Wi-Fi 6, users can anticipate faster speeds, enhanced security, and better performance in environments with numerous connected devices. Future iterations of Wi-Fi will continue to build on these improvements.</p>
                <br />
                <p className='lg:text-2xl lg:tracking-wide'>Internet of Things (IoT): As the number of smart, interconnected devices grows, the need for robust wireless networks will increase. From smart homes to smart cities, the IoT revolution will drive ongoing demand for reliable, secure, and high-speed wireless networks.</p>
            </div>
        </div>
    </div>

    {/* Tablet Screen UI */}
    <div className='md:block lg:hidden hidden md:px-24 md:py-10'>

        <div className='md:flex md:flex-row'>

            <div className='md:basis-1/2 md:pr-4'>
                <h3 className='md:py-8 md:font-bold md:text-3xl md:text-center md:uppercase'>Wired Networking</h3>
                <img src={Wired} alt='Wired Network' className='md:rounded-lg md:drop-shadow-lg md:border-4 md:border-black' />
                <br />
                <p className='md:text-lg md:tracking-wide'>On the wired front, the future focuses on enhancing speed and capacity. As data demands surge due to advancements in cloud computing, Big Data, and the Internet of Things (IoT), there is a strong push for even faster and more robust connections.</p>
                <br />
                <p className='md:text-lg md:tracking-wide'>Fiber Optics: The use of fiber optic networks is expected to increase, delivering extremely fast speeds and vast data transfer capacity. This is especially true for data centers and large business operations, where the demand for fiber will likely continue to grow.</p>
                <br />
                <p className='md:text-lg md:tracking-wide'>Higher-Speed Ethernet: The development of higher-speed Ethernet standards is also advancing. Companies are moving towards 100 Gigabit Ethernet and beyond, ensuring that wired networks continue to provide high-speed, reliable, and secure connections.</p>
            </div>

            <div className='md:basis-1/2 md:pl-4'>
                <h3 className='md:py-8 md:font-bold md:text-3xl md:text-center md:uppercase'>Wireless Networking</h3>
                <img src={Wireless} alt='Wireless Network' className='md:rounded-lg md:drop-shadow-lg md:border-4 md:border-black' />
                <br />
                <p className='md:text-lg md:tracking-wide'>Wi-Fi 6 and Beyond: Wi-Fi technology is continually evolving. With Wi-Fi 6, users can anticipate faster speeds, enhanced security, and better performance in environments with numerous connected devices. Future iterations of Wi-Fi will continue to build on these improvements.</p>
                <br />
                <p className='md:text-lg md:tracking-wide'>Internet of Things (IoT): As the number of smart, interconnected devices grows, the need for robust wireless networks will increase. From smart homes to smart cities, the IoT revolution will drive ongoing demand for reliable, secure, and high-speed wireless networks.</p>
            </div>
        </div>
    </div>

    {/* Mobile Screen UI */}
    <div className='md:hidden lg:hidden block px-5 py-10'>

        <div className='block'>

            <div className='mx-auto'>
                <h3 className='py-4 font-bold text-3xl text-center uppercase'>Wired Networking</h3>
                <img src={Wired} alt='Wired Network' className='rounded-lg drop-shadow-lg border-4 border-black' />
                <br />
                <p className='text-base tracking-wide'>On the wired front, the future focuses on enhancing speed and capacity. As data demands surge due to advancements in cloud computing, Big Data, and the Internet of Things (IoT), there is a strong push for even faster and more robust connections.</p>
                <br />
                <p className='text-base tracking-wide'>Fiber Optics: The use of fiber optic networks is expected to increase, delivering extremely fast speeds and vast data transfer capacity. This is especially true for data centers and large business operations, where the demand for fiber will likely continue to grow.</p>
                <br />
                <p className='text-base tracking-wide'>Higher-Speed Ethernet: The development of higher-speed Ethernet standards is also advancing. Companies are moving towards 100 Gigabit Ethernet and beyond, ensuring that wired networks continue to provide high-speed, reliable, and secure connections.</p>
            </div>

            <div className='mx-auto'>
                <h3 className='py-4 font-bold text-3xl text-center uppercase'>Wireless Networking</h3>
                <img src={Wireless} alt='Wireless Network' className='rounded-lg drop-shadow-lg border-4 border-black' />
                <br />
                <p className='text-base tracking-wide'>Wi-Fi 6 and Beyond: Wi-Fi technology is continually evolving. With Wi-Fi 6, users can anticipate faster speeds, enhanced security, and better performance in environments with numerous connected devices. Future iterations of Wi-Fi will continue to build on these improvements.</p>
                <br />
                <p className='text-base tracking-wide'>Internet of Things (IoT): As the number of smart, interconnected devices grows, the need for robust wireless networks will increase. From smart homes to smart cities, the IoT revolution will drive ongoing demand for reliable, secure, and high-speed wireless networks.</p>
            </div>
        </div>
    </div>

    </>
  )
}

export default ConnectivityCE