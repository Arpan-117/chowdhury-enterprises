import { useState, useEffect } from 'react'
// import Banner1 from '../../images/Banner.png'
// import Banner2 from '../../images/Banner-1.png'
// import Banner3 from '../../images/Banner-2.png'
// import Banner4 from '../../images/Banner-3.png'
import Banner1 from '../../assets/Home/Banner-1.JPG'
import Banner2 from '../../assets/Home/Banner-2.JPG'
import Banner3 from '../../assets/Home/Banner-3.JPG'


function BannerCE() {

    // const [currentSlide, setCurrentSlide] = useState(0);
    const [index, setIndex] = useState(0);
    // const [images] = useState([Banner1]);
    const [isHovered, setIsHovered] = useState(false);

    const images = [Banner1, Banner2, Banner3];
    // console.log(images.length);

    const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);


    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    //     }, 3500);

    //     return () => clearInterval(intervalId);
    // }, [images.length]);

    // const handleDotClick = (index) => {
    //     setCurrentSlide(index);
    // };

  return (
    //   <>

    //       {/* Large Screen UI */}
    //       <div className='lg:block md:hidden hidden'>
    //           <div className='lg:bg-white lg:text-center'>
    //               <div className='lg:relative lg:h-[80vh] lg:mx-auto lg:w-[100%] lg:overflow-hidden lg:bg-white'>
    //                   <div className='lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-full lg:h-full'>
    //                       {images.map((image, index) => (
    //                           <div
    //                               key={image}
    //                               className={`lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:opacity-0 lg:transition-opacity lg:duration-1000 lg:ease-in-out ${currentSlide === index ? 'lg:opacity-100 z-10' : ''
    //                                   }`}
    //                           >
    //                               <img src={image} alt='Banner images' className="lg:w-full lg:h-full lg:object-fill" />
    //                               {/* <img src={Banner1} alt='BSNL Banner' className='w-full h-full object-fill' /> */}
    //                           </div>
    //                       ))}
    //                   </div>

    //                   <div className='lg:absolute lg:mx-auto lg:px-[50%] lg:bottom-5 lg:flex lg:justify-center lg:items-center lg:space-x-3'>
    //                       {images.map((_, index) => (

    //                           <button
    //                               key={index}
    //                               className={`lg:w-2 lg:h-2 lg:mx-auto lg:rounded-full lg:bg-white lg:flex lg:opacity-50 lg:hover:opacity-100 ${currentSlide === index ? 'lg:bg-gray-700' : ''
    //                                   }`}
    //                               onClick={() => handleDotClick(index)}
    //                           />
    //                       ))}
    //                   </div>
    //               </div>
    //           </div>
    //       </div>

    //       {/* Tablet Screen UI */}
    //       <div className='md:block lg:hidden hidden'>
    //           <div className='md:bg-slate-200 md:text-center'>

    //               <div className='md:relative md:mx-auto md:h-[40vh] md:w-[100%] md:overflow-hidden md:bg-white'>
    //                   <div className='md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:h-full'>
    //                       {images.map((image, index) => (
    //                           <div
    //                               key={image}
    //                               className={`md:absolute md:top-0 md:left-0 md:w-full md:h-full md:opacity-0 md:transition-opacity md:duration-1000 md:ease-in-out ${currentSlide === index ? 'md:opacity-100 md:z-10' : ''
    //                                   }`}
    //                           >
    //                               <img src={image} alt='Banner images' className='md:w-full md:h-full md:object-fill' />
    //                               {/* <img src={Banner1} alt='BSNL Banner' className='w-full h-full object-fill' /> */}
    //                           </div>
    //                       ))}
    //                   </div>

    //                   <div className='md:absolute md:mx-auto md:px-[50%] md:bottom-5 md:flex md:justify-center md:items-center md:space-x-3'>
    //                       {images.map((_, index) => (

    //                           <button
    //                               key={index}
    //                               className={`md:w-2 md:h-2 md:mx-auto md:rounded-full md:bg-white md:flex md:opacity-50 md:hover:opacity-100 ${currentSlide === index ? 'md:bg-gray-700' : ''
    //                                   }`}
    //                               onClick={() => handleDotClick(index)}
    //                           />
    //                       ))}
    //                   </div>

    //               </div>

    //           </div>
    //       </div>

    //       {/* Mobile Screen UI */}
    //       <div className='md:hidden lg:hidden block'>
    //           <div className="bg-slate-200 text-center">

    //               <div className='relative mx-auto h-[25vh] w-[100%] overflow-hidden bg-white'>
    //                   <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'>
    //                       {images.map((image, index) => (
    //                           <div
    //                               key={image}
    //                               className={`absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 z-10' : ''
    //                                   }`}
    //                           >
    //                               <img src={image} alt='Banner images' className="w-full h-full object-fill" />
    //                               {/* <img src={Banner1} alt='BSNL Banner' className='w-full h-full object-fill' /> */}
    //                           </div>
    //                       ))}
    //                   </div>
    //               </div>
    //           </div>
    //       </div>

    //   </>
    <>
        <div className='flex flex-row items-center lg:mx-auto lg:px-40 lg:pt-14 lg:w-full'>
            <div className='basis-1/2'>
                <h1 className='lg:p-4 lg:font-bold lg:text-center lg:text-4xl'>Welcome to Chowdhury Enterprises</h1>
                <h2 className='lg:py-2 lg:font-semibold lg:text-center lg:text-2xl'>Lightning-Fast Internet & Reliable CCTV Security — Now in Kadma & Dobo.</h2>
                <p className='lg:py-8 lg:mx-auto lg:text-lg lg:tracking-wide'>Enjoy hassle-free installation, friendly service, and technology that keeps your home and business protected.</p>
            </div>

              <div className='basis-1/2'>
                  <div
                      className='relative w-full h-full overflow-hidden flex items-center justify-center p-6 rounded-xl'
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                  >
                      {/* Slider Wrapper */}
                      {/* <div className='flex'>
                          {images.map((image, i) => (
                            <div key={i}>
                                <img src={image} alt='Slider' />
                            </div>
                              
                          ))}
                      </div> */}

                      <div className='flex'>
                          <img src={images[index]} alt="Slider" className='' />
                      </div>

                      {/* Arrows */}
                      <button
                          onClick={prevSlide}
                          className='absolute top-1/2 left-3 -translate-y-1/2 bg-blue-900/50 text-white text-2xl px-3 py-1 rounded hover:bg-blue-900/70'
                      >
                          ❮
                      </button>

                      <button
                          onClick={nextSlide}
                          className='absolute top-1/2 right-3 -translate-y-1/2 bg-blue-900/50 text-white text-2xl px-3 py-1 rounded hover:bg-blue-900/70'
                      >
                          ❯
                      </button>
                  </div>
              </div>
        </div>
    </>
  )
}

export default BannerCE