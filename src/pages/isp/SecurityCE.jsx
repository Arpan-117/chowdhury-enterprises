import { useState, useEffect } from 'react'
import Banner1 from '/Security/sec-1.webp'
import Banner2 from '/Security/sec-2.webp'
import Banner3 from '/Security/sec-3.webp'
import Banner4 from '/Security/sec-4.webp'
import HomeSec from '/Security/home.webp'
import OfficeSec from '/Security/office.webp'
import RetailSec from '/Security/retail.webp'
import SocietySec from '/Security/society.webp'
import SecDev from '/Security/security-device.webp'
import Detection from '/Security/detection1.webp'
import Sensors from '/Security/sensors.webp'
import Status from '/Security/alert.webp'

function SecurityCE() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [images] = useState([Banner1, Banner2, Banner3, Banner4]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>

      {/* Large Screen UI */}
      <div className='lg:block md:hidden hidden lg:bg-white lg:text-center'>
        <h2 className='lg:pb-8 lg:font-extrabold lg:text-6xl'>Secure your world</h2>
        <h2 className='lg:pb-8 lg:font-extrabold lg:text-6xl'>with our connected Security Services</h2>

        <div className='lg:py-16 lg:px-40'>

          <div className='lg:flex lg:flex-row lg:py-4'>

            <div className='lg:basis-1/2'>
              {/* Image */}
              <img src={HomeSec} alt='home CCTV' className='lg:h-96 lg:w-auto lg:rounded-lg lg:drop-shadow-lg lg:mx-auto lg:pr-5' />
              <div className='lg:p-2'>
                <h3 className='lg:font-bold lg:text-xl'>For Homes</h3>
                <p className='lg:w-1/2 lg:mx-auto lg:text-center'>Security for your loved ones with the power of our cameras to protect your home and family.</p>
              </div>
            </div>

            <div className='lg:basis-1/2'>
              {/* Image */}
              <img src={RetailSec} alt='shop CCTV' className='lg:h-96 lg:w-auto lg:rounded-lg lg:drop-shadow-lg lg:mx-auto lg:pl-5' />
              <div className='lg:p-2'>
                <h3 className='lg:font-bold lg:text-xl'>For Stores</h3>
                <p className='lg:w-1/2 lg:mx-auto lg:text-center'>Secure your stores with AI cameras, access control, motion detection and human detection features.</p>
              </div>
            </div>

          </div>

          <div className='lg:flex lg:flex-row lg:py-4'>

            <div className='lg:basis-1/2'>
              {/* Image */}
              <img src={SocietySec} alt='apartment CCTV' className='lg:h-96 lg:w-auto lg:rounded-lg lg:drop-shadow-lg lg:mx-auto lg:pr-5' />
              <div className='lg:p-2'>
                <h3 className='lg:font-bold lg:text-xl'>For Gated Society</h3>
                <p className='lg:w-1/2 lg:mx-auto lg:text-center'>Security for your entire apartment with AI cameras, human detection and motion detection features.</p>
              </div>
            </div>

            <div className='lg:basis-1/2'>
              {/* Image */}
              <img src={OfficeSec} alt='office CCTV' className='lg:h-96 lg:w-auto lg:rounded-lg lg:drop-shadow-lg lg:mx-auto ' />
              <div className='lg:p-2'>
                <h3 className='lg:font-bold lg:text-xl'>For Enterprises</h3>
                <p className='lg:w-1/2 lg:mx-auto lg:text-center'>Secure your office and multi-storey premises with our AI cameras to monitor your employees and safeguard your business.</p>
              </div>
            </div>

          </div>

        </div>

        {/* Section 2 */}
        <div className='lg:bg-black lg:py-20 lg:px-40'>
          <h2 className='lg:pb-8 lg:font-extrabold lg:text-white lg:text-5xl lg:uppercase'>Your security all at one place</h2>

          <div className='lg:relative lg:h-[70vh] lg:mx-auto lg:w-full lg:rounded-lg lg:overflow-hidden lg:bg-black'>
            <div className='lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-full lg:h-full'>
              {images.map((image, index) => (
                <div
                  key={image}
                  className={`lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:opacity-0 lg:transition-opacity lg:duration-1000 lg:ease-in-out ${currentSlide === index ? 'lg:opacity-100 lg:z-10' : ''
                    }`}
                >
                  <img src={image} alt={`Slide ${index + 1}`} className='lg:w-full lg:h-full lg:object-fill' />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Section 3 */}
        <div className='lg:py-20 lg:px-40'>
          <h2 className='lg:pb-8 lg:font-extrabold lg:text-5xl lg:uppercase'>Make your Security more Robust</h2>
          <div className='lg:flex lg:flex-row'>

            <div className='lg:basis-1/2'>
              {/* Image */}
              <div className='lg:p-2'>
                <img src={SecDev} alt='security device' className='lg:h-80 lg:w-auto lg:rounded-lg lg:drop-shadow-lg lg:mx-auto' />
                <h3 className='lg:pt-4 lg:font-bold lg:text-xl'>Security Devices</h3>
                <p className='lg:w-1/2 lg:mx-auto lg:text-center'>A range of best security devices that you can add to your setup.</p>
              </div>
            </div>

            <div className='lg:basis-1/2'>
              {/* Image */}
              <div className='lg:p-2'>
                <img src={Sensors} alt='security device' className='lg:h-80 lg:w-auto lg:rounded-lg lg:drop-shadow-lg lg:mx-auto' />
                <h3 className='lg:pt-4 lg:font-bold lg:text-xl'>Customised Integrations & Services</h3>
                <p className='lg:w-1/2 lg:mx-auto lg:text-center'>Custom services including motion detection, person detection and storage as per your requirements.</p>
              </div>
            </div>

          </div>

          <div className='lg:flex lg:flex-row'>

            <div className='lg:basis-1/2'>
              {/* Image */}
              <div className='lg:p-2'>
                <img src={Detection} alt='security device' className='lg:h-80 lg:w-auto lg:rounded-lg lg:drop-shadow-lg lg:mx-auto' />
                <h3 className='lg:pt-4 lg:font-bold lg:text-xl'>Intelligent Eyes on your Home</h3>
                <p className='lg:w-1/2lg: mx-auto lg:text-center'>With cutting edge sensors, from person detection to suspicious activity detection, it keeps vigilat eye on your premises.</p>
              </div>
            </div>

            <div className='lg:basis-1/2'>
              {/* Image */}
              <div className='lg:p-2'>
                <img src={Status} alt='security device' className='lg:h-80 lg:w-auto lg:rounded-lg lg:drop-shadow-lg lg:mx-auto' />
                <h3 className='lg:pt-4 lg:font-bold lg:text-xl'>Stay on top of Everything that Matters</h3>
                <p className='lg:w-1/2 lg:mx-auto lg:text-center'>Stay informed and alert with real time updates on your security status on your phone.</p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Tablet Screen UI */}
      <div className='md:block lg:hidden hidden md:bg-white md:text-center'>
        <h2 className='md:pt-8 md:font-extrabold md:text-4xl'>Secure your world</h2>
        <h2 className='md:pb-4 md:font-extrabold md:text-4xl'>with our connected Security Services</h2>

        <div className='md:py-16 md:px-24'>

          <div className='md:flex md:flex-row md:py-4'>

            <div className='md:basis-1/2'>
              {/* Image */}
              <img src={HomeSec} alt='home CCTV' className='md:size-64 md:rounded-lg md:drop-shadow-lg md:mx-auto md:pr-5' />
              <div className='md:p-2'>
                <h3 className='md:font-bold md:text-xl'>For Homes</h3>
                <p className='md:mx-auto md:text-center'>Security for your loved ones with the power of our cameras to protect your home and family.</p>
              </div>
            </div>

            <div className='md:basis-1/2'>
              {/* Image */}
              <img src={RetailSec} alt='shop CCTV' className='md:size-64 md:rounded-lg md:drop-shadow-lg md:mx-auto md:pl-5' />
              <div className='md:p-2'>
                <h3 className='md:font-bold md:text-xl'>For Stores</h3>
                <p className='md:mx-auto md:text-center'>Secure your stores with AI cameras, access control, motion detection and human detection features.</p>
              </div>
            </div>

          </div>

          <div className='md:flex md:flex-row md:py-4'>

            <div className='md:basis-1/2'>
              {/* Image */}
              <img src={SocietySec} alt='apartment CCTV' className='md:size-64 md:w-auto md:rounded-l-lg md:drop-shadow-lg md:mx-auto md:pr-5' />
              <div className='md:p-2'>
                <h3 className='md:font-bold md:text-xl'>For Gated Society</h3>
                <p className='md:mx-auto md:text-center'>Security for your entire apartment with AI cameras, human detection and motion detection features.</p>
              </div>
            </div>

            <div className='md:basis-1/2'>
              {/* Image */}
              <img src={OfficeSec} alt='office CCTV' className='md:size-64 md:rounded-r-lg md:drop-shadow-lg md:mx-auto ' />
              <div className='md:p-2'>
                <h3 className='md:font-bold md:text-xl'>For Enterprises</h3>
                <p className='md:mx-auto md:text-center'>Secure your office and multi-storey premises with our AI cameras to monitor your employees and safeguard your business.</p>
              </div>
            </div>

          </div>

        </div>

        {/* Section 2 */}
        <div className='bg-black py-20 px-24'>
          <h2 className='pb-8 font-extrabold text-white text-3xl uppercase'>Your security all at one place</h2>

          <div className='md:relative md:h-[30vh] md:mx-auto md:w-full md:rounded-lg md:overflow-hidden md:bg-grey'>
            <div className='md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:h-full'>
              {images.map((image, index) => (
                <div
                  key={image}
                  className={`md:absolute md:top-0 md:left-0 md:w-full md:h-full md:opacity-0 md:transition-opacity md:duration-1000 md:ease-in-out ${currentSlide === index ? 'md:opacity-100 md:z-10' : ''
                    }`}
                >
                  <img src={image} alt={`Slide ${index + 1}`} className='md:w-full md:h-full md:object-fill' />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Section 3 */}
        <div className='md:py-20 md:px-24'>
          <h2 className='md:pb-8 md:font-extrabold md:text-3xl md:uppercase'>Make your Security more Robust</h2>
          <div className='md:flex md:flex-row'>

            <div className='md:basis-1/2'>
              {/* Image */}
              <div className='md:p-2'>
                <img src={SecDev} alt='security device' className='md:size-64 md:rounded-lg md:drop-shadow-lg md:mx-auto' />
                <h3 className='md:pt-4 md:font-bold md:text-xl'>Security Devices</h3>
                <p className='md:mx-auto md:text-center'>A range of best security devices that you can add to your setup.</p>
              </div>
            </div>

            <div className='md:basis-1/2'>
              {/* Image */}
              <div className='md:p-2'>
                <img src={Sensors} alt='security device' className='md:size-64 md:rounded-lg md:drop-shadow-lg md:mx-auto' />
                <h3 className='md:pt-4 md:font-bold md:text-xl'>Customised Integrations & Services</h3>
                <p className='md:mx-auto md:text-center'>Custom services including motion detection, person detection and storage as per your requirements.</p>
              </div>
            </div>

          </div>

          <br/>

          <div className='md:flex md:flex-row'>

            <div className='md:basis-1/2'>
              {/* Image */}
              <div className='md:p-2'>
                <img src={Detection} alt='security device' className='md:size-64 md:rounded-lg md:drop-shadow-lg md:mx-auto' />
                <h3 className='md:pt-4 md:font-bold md:text-xl'>Intelligent Eyes on your Home</h3>
                <p className='md:mx-auto md:text-center'>With cutting edge sensors, from person detection to suspicious activity detection, it keeps vigilat eye on your premises.</p>
              </div>
            </div>

            <div className='md:basis-1/2'>
              {/* Image */}
              <div className='md:p-2'>
                <img src={Status} alt='security device' className='md:size-64 md:rounded-lg md:drop-shadow-lg md:mx-auto' />
                <h3 className='md:pt-4 md:font-bold md:text-xl'>Stay on top of Everything that Matters</h3>
                <p className='md:mx-auto md:text-center'>Stay informed and alert with real time updates on your security status on your phone.</p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Mobile Screen UI */}
      <div className='md:hidden lg:hidden block bg-white text-center px-5'>
        <h2 className='pt-8 font-bold text-3xl'>Secure your world</h2>
        <h2 className='pb-4 font-bold text-3xl'>with our connected Security Services</h2>

        <div className='py-4'>

          <div className='block py-4'>

            <div className=''>
              {/* Image */}
              <img src={HomeSec} alt='home CCTV' className='size-44 rounded-lg drop-shadow-lg mx-auto' />
              <div className='p-2'>
                <h3 className='font-bold text-lg'>For Homes</h3>
                <p className='mx-auto text-center'>Security for your loved ones with the power of our cameras to protect your home and family.</p>
              </div>
            </div>
            <br/>
            <div className=''>
              {/* Image */}
              <img src={RetailSec} alt='shop CCTV' className='size-44 rounded-lg drop-shadow-lg mx-auto' />
              <div className='p-2'>
                <h3 className='font-bold text-lg'>For Stores</h3>
                <p className='mx-auto text-center'>Secure your stores with AI cameras, access control, motion detection and human detection features.</p>
              </div>
            </div>

          </div>

          <div className='block py-4'>

            <div className=''>
              {/* Image */}
              <img src={SocietySec} alt='apartment CCTV' className='size-44 rounded-lg drop-shadow-lg mx-auto' />
              <div className='p-2'>
                <h3 className='font-bold text-lg'>For Gated Society</h3>
                <p className='mx-auto text-center'>Security for your entire apartment with AI cameras, human detection and motion detection features.</p>
              </div>
            </div>
            <br/>
            <div className=''>
              {/* Image */}
              <img src={OfficeSec} alt='office CCTV' className='size-44 rounded-lg drop-shadow-lg mx-auto ' />
              <div className='p-2'>
                <h3 className='font-bold text-lg'>For Enterprises</h3>
                <p className='mx-auto text-center'>Secure your office and multi-storey premises with our AI cameras to monitor your employees and safeguard your business.</p>
              </div>
            </div>

          </div>

        </div>

        {/* Section 2 */}
        <div className='bg-black py-10 rounded-md'>
          <h2 className='pb-8 font-extrabold text-white text-3xl uppercase'>Your security all at one place</h2>

          <div className='relative h-[25vh] mx-auto w-full rounded-lg overflow-hidden bg-grey'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'>
              {images.map((image, index) => (
                <div
                  key={image}
                  className={`absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 z-10' : ''
                    }`}
                >
                  <img src={image} alt={`Slide ${index + 1}`} className='w-full h-full object-fill' />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Section 3 */}
        <div className='py-10'>
          <h2 className="pb-8 font-bold text-3xl uppercase">Make your Security more Robust</h2>
          <div className='block'>

            <div className=''>
              {/* Image */}
              <div className='p-2'>
                <img src={SecDev} alt='security device' className='size-44 rounded-lg drop-shadow-lg mx-auto' />
                <h3 className='pt-4 font-bold text-lg'>Security Devices</h3>
                <p className='mx-auto text-center'>A range of best security devices that you can add to your setup.</p>
              </div>
            </div>
            <br/>
            <div className=''>
              {/* Image */}
              <div className='p-2'>
                <img src={Sensors} alt='security device' className='size-44 rounded-lg drop-shadow-lg mx-auto' />
                <h3 className='pt-4 font-bold text-lg'>Customised Integrations & Services</h3>
                <p className='mx-auto text-center'>Custom services including motion detection, person detection and storage as per your requirements.</p>
              </div>
            </div>

          </div>

          <br/>

          <div className='block'>

            <div className=''>
              {/* Image */}
              <div className='p-2'>
                <img src={Detection} alt='security device' className='size-44 rounded-lg drop-shadow-lg mx-auto' />
                <h3 className='pt-4 font-bold text-lg'>Intelligent Eyes on your Home</h3>
                <p className='mx-auto text-center'>With cutting edge sensors, from person detection to suspicious activity detection, it keeps vigilat eye on your premises.</p>
              </div>
            </div>
            <br/>
            <div className=''>
              {/* Image */}
              <div className='p-2'>
                <img src={Status} alt='security device' className='size-44 rounded-lg drop-shadow-lg mx-auto' />
                <h3 className='pt-4 font-bold text-lg'>Stay on top of Everything that Matters</h3>
                <p className='mx-auto text-center'>Stay informed and alert with real time updates on your security status on your phone.</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default SecurityCE