// import React from 'react'
import Baldwin from '../../assets/Clients/baldwin.png'
import Bharatgas from '../../assets/Clients/bharatgas.png'
import Concept from '../../assets/Clients/concept.png'
import Danfit from '../../assets/Clients/danfit.png'
import Idbi from '../../assets/Clients/idbi.png'
import Indiapost from '../../assets/Clients/post.png'
import Kennel from '../../assets/Clients/kennel.png'
import Lic from '../../assets/Clients/lic.png'
import Boi from '../../assets/Clients/boi.png'
import Lenskart from '../../assets/Clients/lenskart.png'

function ClientCE() {
  return (
    <>

    {/* Large Screen UI */}
    <div className='lg:block md:hidden hidden lg:px-40 lg:py-10 lg:bg-slate-200'>

        <div className='lg:py-10'>
            <h3 className='lg:py-8 lg:font-bold lg:text-4xl lg:text-center lg:uppercase'>Our Clients</h3>
            <p className='lg:text-2xl lg:text-center lg:w-[90%] lg:mx-auto'>We take pride in providing exceptional customer services and ensuring that every client's need is met. We have worked with renound names from schools, insurance companies, banks and dance studios. We have worked with clients from all backgrounds. </p>
        </div>

        <div className=''>
            <div className='lg:flex lg:flex-row lg:mx-auto lg:p-4'>
                <div className='lg:basis-1/5 lg:px-auto'>
                    <img src={Baldwin} className='lg:w-28 lg:h-auto lg:mx-auto lg:rounded-lg lg:drop-shadow-lg' />
                    <p className='lg:font-semibold lg:text-center'>Baldwin FAH School</p>
                </div>
                <div className='lg:basis-1/5'>
                    <img src={Bharatgas} className='lg:w-28 lg:h-auto lg:mx-auto lg:rounded-lg lg:drop-shadow-lg' />
                    <p className='lg:font-semibold lg:text-center'>Bharat Gas</p>
                </div>
                <div className='lg:basis-1/5'>
                    <img src={Concept} className='lg:w-28 lg:h-auto lg:mx-auto lg:rounded-lg lg:drop-shadow-lg' />
                    <p className='lg:font-semibold lg:text-center'>Concept Designer</p>
                </div>
                <div className='lg:basis-1/5'>
                    <img src={Danfit} className='lg:w-28 lg:h-auto lg:mx-auto lg:rounded-lg lg:drop-shadow-lg' />
                    <p className='lg:font-semibold lg:text-center'>Danfit Dance Studio</p>
                </div>
                <div className='lg:basis-1/5'>
                    <img src={Idbi} className='lg:w-28 lg:h-auto lg:mx-auto lg:rounded-lg lg:drop-shadow-lg' />
                    <p className='lg:font-semibold lg:text-center'>IDBI Bank</p>
                </div>
            </div>

            <div className='lg:flex lg:flex-row lg:p-4'>
                <div className='lg:basis-1/5'>
                    <img src={Indiapost} className='lg:w-28 lg:h-auto lg:mx-auto lg:rounded-lg lg:drop-shadow-lg' />
                    <p className='lg:font-semibold lg:text-center'>India Post</p>
                </div>
                <div className='lg:basis-1/5'>
                    <img src={Kennel} className='lg:w-28 lg:h-auto lg:mx-auto lg:rounded-lg lg:drop-shadow-lg' />
                    <p className='lg:font-semibold lg:text-center'>Kennel Club of India</p>
                </div>
                <div className='lg:basis-1/5'>
                    <img src={Lic} className='lg:w-28 lg:h-auto lg:mx-auto lg:rounded-lg lg:drop-shadow-lg' />
                    <p className='lg:font-semibold lg:text-center'>LIC of India</p>
                </div>
                <div className='lg:basis-1/5'>
                    <img src={Boi} className='lg:w-28 lg:h-auto lg:mx-auto lg:rounded-lg lg:drop-shadow-lg' />
                    <p className='lg:font-semibold lg:text-center'>Bank of India</p>
                </div>
                <div className='lg:basis-1/5'>
                    <img src={Lenskart} className='lg:w-28 lg:h-auto lg:mx-auto lg:rounded-lg lg:drop-shadow-lg' />
                    <p className='lg:font-semibold lg:text-center'>Lenskart</p>
                </div>
            </div>
        </div>

    </div>

    {/* Tablet Screen UI */}
    <div className='md:block lg:hidden hidden md:px-24 md:py-10 md:bg-slate-200'>

        <div className='md:py-10'>
            <h3 className='md:pb-8 md:font-bold md:text-2xl md:text-center md:uppercase'>Our Clients</h3>
            <p className='md:text-base md:text-center md:w-[90%] md:mx-auto'>We take pride in providing exceptional customer services and ensuring that every client's need is met. We have worked with renound names from schools, insurance companies, banks and dance studios. We have worked with clients from all backgrounds. </p>
        </div>

        <div className=''>
            <div className='md:flex md:flex-row md:mx-auto md:p-4'>
                <div className='md:basis-1/5 md:px-auto'>
                    <img src={Baldwin} className='md:w-20 md:h-auto md:mx-auto md:rounded-lg md:drop-shadow-lg' />
                    <p className='md:font-semibold md:text-center md:text-sm'>Baldwin FAH School</p>
                </div>
                <div className='md:basis-1/5'>
                    <img src={Bharatgas} className='md:w-20 md:h-auto md:mx-auto md:rounded-lg md:drop-shadow-lg' />
                    <p className='md:font-semibold md:text-center md:text-sm'>Bharat Gas</p>
                </div>
                <div className='md:basis-1/5'>
                    <img src={Concept} className='md:w-20 md:h-auto md:mx-auto md:rounded-lg md:drop-shadow-lg' />
                    <p className='md:font-semibold md:text-center md:text-sm'>Concept Designer</p>
                </div>
                <div className='md:basis-1/5'>
                    <img src={Danfit} className='md:w-20 md:h-auto md:mx-auto md:rounded-lg md:drop-shadow-lg' />
                    <p className='md:font-semibold md:text-center md:text-sm'>Danfit Dance Studio</p>
                </div>
                <div className='md:basis-1/5'>
                    <img src={Idbi} className='md:w-20 md:h-auto md:mx-auto md:rounded-lg md:drop-shadow-lg' />
                    <p className='md:font-semibold md:text-center md:text-sm'>IDBI Bank</p>
                </div>
            </div>

            <div className='md:flex md:flex-row md:p-4'>
                <div className='md:basis-1/5'>
                    <img src={Indiapost} className='md:w-20 md:h-auto md:mx-auto md:rounded-lg md:drop-shadow-lg' />
                    <p className='md:font-semibold md:text-center md:text-sm'>India Post</p>
                </div>
                <div className='md:basis-1/5'>
                    <img src={Kennel} className='md:w-20 md:h-auto md:mx-auto md:rounded-lg md:drop-shadow-lg' />
                    <p className='md:font-semibold md:text-center md:text-sm'>Kennel Club of India</p>
                </div>
                <div className='md:basis-1/5'>
                    <img src={Lic} className='md:w-20 md:h-auto md:mx-auto md:rounded-lg md:drop-shadow-lg' />
                    <p className='md:font-semibold md:text-center md:text-sm'>LIC of India</p>
                </div>
                <div className='md:basis-1/5'>
                    <img src={Boi} className='md:w-20 md:h-auto md:mx-auto md:rounded-lg md:drop-shadow-lg' />
                    <p className='md:font-semibold md:text-center md:text-sm'>Bank of India</p>
                </div>
                <div className='md:basis-1/5'>
                    <img src={Lenskart} className='md:w-20 md:h-auto md:mx-auto md:rounded-lg md:drop-shadow-lg' />
                    <p className='md:font-semibold md:text-center md:text-sm'>Lenskart</p>
                </div>
            </div>
        </div>

    </div>

    {/* Mobile Screen UI */}
    <div className='md:hidden lg:hidden sm:hidden px-5 py-10 bg-slate-200'>

        <div className='pb-10'>
            <h3 className='pb-4 font-bold text-2xl text-center uppercase'>Our Clients</h3>
            <p className='text-base text-center tracking-wide mx-auto'>We take pride in providing exceptional customer services and ensuring that every client's need is met. We have worked with renound names from schools, insurance companies, banks and dance studios. We have worked with clients from all backgrounds. </p>
        </div>

        <div className=''>
            <div className='flex flex-row mx-auto p-2'>
                <div className='basis-1/5 px-auto'>
                    <img src={Baldwin} className='size-12 mx-auto rounded-lg drop-shadow-lg' />
                    <p className='font-semibold text-center text-xs'>Baldwin FAH School</p>
                </div>
                <div className='basis-1/5'>
                    <img src={Bharatgas} className='size-12 mx-auto rounded-lg drop-shadow-lg' />
                    <p className='font-semibold text-center text-xs'>Bharat Gas</p>
                </div>
                <div className='basis-1/5'>
                    <img src={Concept} className='size-12 mx-auto rounded-lg drop-shadow-lg' />
                    <p className='font-semibold text-center text-xs'>Concept Designer</p>
                </div>
                <div className='basis-1/5'>
                    <img src={Danfit} className='size-12 mx-auto rounded-lg drop-shadow-lg' />
                    <p className='font-semibold text-center text-xs'>Danfit Dance Studio</p>
                </div>
                <div className='basis-1/5'>
                    <img src={Idbi} className='size-12 mx-auto rounded-lg drop-shadow-lg' />
                    <p className='font-semibold text-center text-xs'>IDBI Bank</p>
                </div>
            </div>

            <div className='flex flex-row p-2'>
                <div className='basis-1/5'>
                    <img src={Indiapost} className='size-12 mx-auto rounded-lg drop-shadow-lg' />
                    <p className='font-semibold text-center text-xs'>India Post</p>
                </div>
                <div className='basis-1/5'>
                    <img src={Kennel} className='size-12 mx-auto rounded-lg drop-shadow-lg' />
                    <p className='font-semibold text-center text-xs'>Kennel Club of India</p>
                </div>
                <div className='basis-1/5'>
                    <img src={Lic} className='size-12 h-auto mx-auto rounded-lg drop-shadow-lg' />
                    <p className='font-semibold text-center text-xs'>LIC of India</p>
                </div>
                <div className='basis-1/5'>
                    <img src={Boi} className='size-12 mx-auto rounded-lg drop-shadow-lg' />
                    <p className='font-semibold text-center text-xs'>Bank of India</p>
                </div>
                <div className='basis-1/5'>
                    <img src={Lenskart} className='size-12 mx-auto rounded-lg drop-shadow-lg' />
                    <p className='font-semibold text-center text-xs'>Lenskart</p>
                </div>
            </div>
        </div>

    </div>

    </>
  )
}

export default ClientCE