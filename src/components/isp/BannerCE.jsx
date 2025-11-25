import { useState, useEffect } from 'react'
import Banner1 from '../../images/Banner.png'
import Banner2 from '../../images/Banner-1.png'
import Banner3 from '../../images/Banner-2.png'
import Banner4 from '../../images/Banner-3.png'
// import Banner2 from '../images/Banner-1.png'
// import Banner3 from '../images/Banner-2.png'
// import Banner4 from '../images/Banner-3.png'

function BannerCE() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [images] = useState([Banner1, Banner2, Banner3, Banner4]);

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
                <div className='lg:bg-white lg:text-center'>
                    <div className='lg:relative lg:h-[80vh] lg:mx-auto lg:w-[100%] lg:overflow-hidden lg:bg-white'>
                        <div className='lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-full lg:h-full'>
                            {images.map((image, index) => (
                                <div
                                    key={image}
                                    className={`lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:opacity-0 lg:transition-opacity lg:duration-1000 lg:ease-in-out ${currentSlide === index ? 'lg:opacity-100 z-10' : ''
                                        }`}
                                >
                                    <img src={image} alt='Banner images' className="lg:w-full lg:h-full lg:object-fill" />
                                    {/* <img src={Banner1} alt='BSNL Banner' className='w-full h-full object-fill' /> */}
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
                </div>
            </div>

            {/* Tablet Screen UI */}
            <div className='md:block lg:hidden hidden'>
                <div className='md:bg-slate-200 md:text-center'>
                    
                    <div className='md:relative md:mx-auto md:h-[40vh] md:w-[100%] md:overflow-hidden md:bg-white'>
                        <div className='md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:h-full'>
                            {images.map((image, index) => (
                                <div
                                    key={image}
                                    className={`md:absolute md:top-0 md:left-0 md:w-full md:h-full md:opacity-0 md:transition-opacity md:duration-1000 md:ease-in-out ${currentSlide === index ? 'md:opacity-100 md:z-10' : ''
                                        }`}
                                >
                                    <img src={image} alt='Banner images' className='md:w-full md:h-full md:object-fill' />
                                    {/* <img src={Banner1} alt='BSNL Banner' className='w-full h-full object-fill' /> */}
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

                </div>
            </div>

            {/* Mobile Screen UI */}
            <div className='md:hidden lg:hidden block'>
                <div className="bg-slate-200 text-center">
                    
                    <div className='relative mx-auto h-[25vh] w-[100%] overflow-hidden bg-white'>
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'>
                            {images.map((image, index) => (
                                <div
                                    key={image}
                                    className={`absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 z-10' : ''
                                        }`}
                                >
                                    <img src={image} alt='Banner images' className="w-full h-full object-fill" />
                                    {/* <img src={Banner1} alt='BSNL Banner' className='w-full h-full object-fill' /> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
  )
}

export default BannerCE