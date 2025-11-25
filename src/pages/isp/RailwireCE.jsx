import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Banner1 from '../../assets/RailWire/railwire-1.jpg'
import Banner2 from '../../assets/RailWire/railwire-2.jpg'
import Banner3 from '../../assets/RailWire/railwire-3.jpg'
import RailwirePopularPlansCE from '../../components/isp/RailwirePopularPlansCE'
import RailwireUnlimitedPlansCE from '../../components/isp/RailwireUnlimitedPlansCE'
import RailwireAllPlansCE from '../../components/isp/RailwireAllPlansCE'


function RailwireCE() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [images] = useState([Banner1, Banner2, Banner3]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>

    {/* Large Screen UI */}
      <div className='lg:block md:hidden hidden'>
        <div className='lg:bg-slate-200 lg:pt-16 lg:text-center'>
          {/* <div className='lg:pb-10 lg:pt-6'>
            <Link to='/new-connection' >
              <buttton className='lg:bg-black lg:p-4 lg:text-white lg:text-2xl lg:tracking-wide lg:rounded lg:hover:bg-slate-800'>Book a connection</buttton>
            </Link>
          </div> */}

          <div className='lg:relative lg:h-[70vh] lg:mx-auto lg:w-[85%] lg:rounded-lg lg:overflow-hidden lg:bg-black'>
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

            <div className='lg:absolute lg:mx-auto lg:px-[50%] lg:bottom-5 lg:flex lg:justify-center lg:items-center lg:space-x-3'>
              {images.map((_, index) => (

                <button
                  key={index}
                  className={`lg:w-2 lg:h-2 lg:mx-auto lg:rounded-full lg:bg-white lg:flex lg:opacity-50 lg:hover:opacity-100 ${currentSlide === index ? 'lg:bg-gray-700' : ''
                    }`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>

          <h2 className='lg:pb-8 lg:pt-20 lg:font-bold lg:text-black lg:text-3xl'>RAILWIRE INTERNET PLANS</h2>

        </div>

        <RailwirePopularPlansCE />
        <RailwireUnlimitedPlansCE />
        <RailwireAllPlansCE />
      </div>

      {/* Tablet Screen UI */}
      <div className='md:block lg:hidden hidden'>
        <div className='md:bg-slate-200 md:pt-16 md:text-center'>
          <div className='md:pb-10 md:pt-6'>
            <Link to='/new-connection' >
              <buttton className='md:bg-black md:p-4 md:text-white md:text-xl md:tracking-wide md:rounded md:hover:bg-slate-800'>Book a connection</buttton>
            </Link>
          </div>

          <div className='md:relative md:h-[35vh] md:mx-auto md:w-[85%] md:rounded-lg md:overflow-hidden md:bg-black'>
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

            <div className='md:absolute md:mx-auto md:px-[50%] md:bottom-5 md:flex md:justify-center md:items-center md:space-x-3'>
              {images.map((_, index) => (

                <button
                  key={index}
                  className={`md:w-2 md:h-2 md:mx-auto md:rounded-full md:bg-white md:flex md:opacity-50 md:hover:opacity-100 ${currentSlide === index ? 'md:bg-gray-700' : ''
                    }`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>

          <h2 className='md:pb-8 md:pt-20 md:font-bold md:text-black md:text-3xl'>RAILWIRE INTERNET PLANS</h2>

        </div>

        <RailwirePopularPlansCE />
        <RailwireUnlimitedPlansCE />
        <RailwireAllPlansCE />
      </div>

      {/* Mobile Screen UI */}
      <div className='block lg:hidden md:hidden'>
        <div className='bg-slate-200 pt-16 text-center'>
          <div className='pb-10 pt-6'>
            <Link to='/new-connection' >
              <buttton className='bg-black p-2 text-white text-lg tracking-wide rounded hover:bg-slate-800'>Book a connection</buttton>
            </Link>
          </div>

          <div className='relative h-[25vh] mx-auto w-[85%] rounded-lg overflow-hidden bg-black'>
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

            <div className='absolute mx-auto px-[50%] bottom-5 flex justify-center items-center space-x-3'>
              {images.map((_, index) => (

                <button
                  key={index}
                  className={`w-2 h-2 mx-auto rounded-full bg-white flex opacity-50 hover:opacity-100 ${currentSlide === index ? 'bg-gray-700' : ''
                    }`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>

          <h2 className='pb-4 pt-20 font-bold text-black text-2xl'>RAILWIRE INTERNET PLANS</h2>

        </div>

        <RailwirePopularPlansCE />
        <RailwireUnlimitedPlansCE />
        <RailwireAllPlansCE />
      </div>

    </>
  )
}

export default RailwireCE