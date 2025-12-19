import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import BestBsnlPlansCE from '../../components/isp/BestBsnlPlansCE'
import RailwirePopularPlansCE from '../../components/isp/RailwirePopularPlansCE'
import Banner2 from '/BSNL/SSPP.webp'
import Banner1 from '/RailWire/railwire-3.webp'


function InternetCE() {

  const [currentSlide, setCurrentSlide] = useState(0);
    const [images] = useState([Banner1, Banner2]);

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
                <div className='lg:bg-slate-200 lg:py-16 lg:text-center'>
                    {/* <h2 className="pb-8 font-bold text-3xl">BSNL FTTH PLANS</h2> */}
                    {/* <h3 className='py-8 font-bold text-4xl text-white'>Explore our Popular Internet Plans from Railwire & BSNL</h3> */}
                    <div className='lg:relative lg:h-[70vh] lg:mx-auto lg:w-[85%] lg:rounded-lg lg:overflow-hidden lg:bg-white'>
                        <div className='lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-full lg:h-full'>
                            {images.map((image, index) => (
                                <div
                                    key={image}
                                    className={`lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:opacity-0 lg:transition-opacity lg:duration-1000 lg:ease-in-out ${currentSlide === index ? 'lg:opacity-100 z-10' : ''
                                        }`}
                                >
                                    <img src={image} alt={`Slide ${index + 1}`} className="lg:w-full lg:h-full lg:object-fill" />
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
                <RailwirePopularPlansCE />
                <div className='lg:bg-slate-200 lg:pb-8 lg:px-36'>
                    <Link to='/railwire'>
                        <button className="lg:bg-black lg:text-white lg:font-bold lg:py-2 lg:px-4 lg:rounded lg:border-2 lg:border-white lg:hover:bg-white lg:hover:border-white lg:hover:border-2 lg:hover:text-black">
                            Show all Plans
                        </button>
                    </Link>
                </div>
                <BestBsnlPlansCE />
            </div>

            {/* Tablet Screen UI */}
            <div className='md:block lg:hidden hidden'>
                <div className='md:bg-slate-200 md:py-16 md:text-center'>
                    
                    <div className='md:relative md:mx-auto md:h-[30vh] md:w-[85%] md:rounded-lg md:overflow-hidden md:bg-white'>
                        <div className='md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:h-full'>
                            {images.map((image, index) => (
                                <div
                                    key={image}
                                    className={`md:absolute md:top-0 md:left-0 md:w-full md:h-full md:opacity-0 md:transition-opacity md:duration-1000 md:ease-in-out ${currentSlide === index ? 'md:opacity-100 md:z-10' : ''
                                        }`}
                                >
                                    <img src={image} alt={`Slide ${index + 1}`} className='md:w-full md:h-full md:object-fill' />
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

                <RailwirePopularPlansCE />
                <div className='md:bg-slate-200 md:pb-8 md:px-24'>
                    <Link to='/railwire'>
                        <button className="md:bg-black md:text-white md:font-bold md:py-2 md:px-4 md:rounded md:border-2 md:border-white md:hover:bg-white md:hover:border-white md:hover:border-2 md:hover:text-black">
                            Show all Plans
                        </button>
                    </Link>
                </div>
                <BestBsnlPlansCE />
            </div>

            {/* Mobile Screen UI */}
            <div className='md:hidden lg:hidden block'>
                <div className="bg-slate-200 py-10 text-center">
                    
                    <div className='relative mx-auto h-[25vh] w-[85%] rounded-lg overflow-hidden bg-white'>
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'>
                            {images.map((image, index) => (
                                <div
                                    key={image}
                                    className={`absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 z-10' : ''
                                        }`}
                                >
                                    <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-fill" />
                                    {/* <img src={Banner1} alt='BSNL Banner' className='w-full h-full object-fill' /> */}
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

                </div>

                <RailwirePopularPlansCE />
                <div className='bg-slate-200 pb-8 px-5'>
                    <Link to='/railwire'>
                        <button className='w-full bg-black text-white font-semibold py-2 px-2 rounded border-2 border-white hover:bg-white hover:border-white hover:border-2 hover:text-black'>
                            Show all Plans
                        </button>
                    </Link>
                </div>
                <BestBsnlPlansCE />
            </div>

        </>
  )
}

export default InternetCE