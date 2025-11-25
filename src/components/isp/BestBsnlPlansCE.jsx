// import React from 'react'
import { Link } from 'react-router'

function BestBsnlPlansCE() {
  return (
    <>

            {/* Large Screen UI */}
            <div className='lg:block md:hidden hidden lg:bg-black'>
                <div className='lg:py-8 lg:px-36'>
                    <h3 className='lg:font-bold lg:text-3xl lg:text-white lg:text-center py-4'>Popular BSNL Plans</h3>
                    <div className='lg:flex lg:flex-row lg:p-8 lg:gap-4'>

                        <div className='lg:basis-1/2 lg:rounded-lg lg:border-2 lg:border-white'>
                            <div className='lg:bg-white lg:p-4'>
                                <h4 className='lg:font-bold lg:text-2xl lg:text-gray-900 lg:text-center'>Fibre Value Plus</h4>
                                <p className='lg:font-semibold lg:text-gray-900 lg:text-center'>₹849.00 per month</p>
                            </div>
                            <div className='lg:p-4 lg:text-white'>
                                <div className='lg:p-2'>
                                    <p className=''><span className='lg:font-bold'>Speed:</span> Upto 100 Mbps till 2000 GB</p>
                                </div>
                                <div className='lg:p-2'>
                                    <p><span className='lg:font-bold'>Speed:</span> Upto 10 Mbps beyond 3300 GB</p>
                                </div>
                                <div className='lg:p-2'>
                                    <p>Unlimited data download</p>
                                </div>
                                <div className='lg:p-2'>
                                    <p><span className='lg:font-bold'>Local + STD:</span> Unlimited calls to any network</p>
                                </div>
                                <div className='lg:p-2 lg:pb-4'>
                                    <p>Unlimited 24 hours</p>
                                </div>
                            </div>
                        </div>

                        <div className='lg:basis-1/2 lg:rounded-lg lg:border-2 lg:border-white'>
                            <div className='lg:bg-white lg:p-4'>
                                <h4 className='lg:font-bold lg:text-2xl lg:text-gray-900 lg:text-center'>SuperStar Premium Plus</h4>
                                <p className='lg:font-semibold lg:text-gray-900 lg:text-center'>₹999.00 per month</p>
                            </div>
                            <div className='lg:p-4 lg:text-white'>
                                <div className='lg:p-2'>
                                    <p className=''><span className='lg:font-bold'>Speed:</span> Upto 150 Mbps till 2000 GB</p>
                                </div>
                                <div className='lg:p-2'>
                                    <p><span className='lg:font-bold'>Speed:</span> 10 Mbps beyond 2000 GB</p>
                                </div>
                                <div className='lg:p-2'>
                                    <p>Unlimited data download</p>
                                </div>
                                <div className='lg:p-2'>
                                    <p><span className='lg:font-bold'>Local + STD:</span> Unlimited calls to any network</p>
                                </div>
                                <div className='lg:p-2 lg:pb-4'>
                                    <p className='lg:font-bold'>Free OTT: Hotstar, Lions Gate, Shemaroo, Hungama, SonyLIV, Zee5, YuppTV</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Link to='/bsnl'>
                        <button className='lg:bg-black lg:text-white lg:font-bold lg:py-2 lg:px-4 lg:rounded lg:border-2 lg:border-white lg:hover:bg-gray-300 lg:hover:border-white lg:hover:border-2 lg:hover:text-black'>
                            Show all Plans
                        </button>
                    </Link>
                </div>
            </div>

            {/* Tablet Screen UI */}
            <div className='md:block lg:hidden hidden md:bg-black'>
                <div className='md:py-8 md:px-24'>
                    <h3 className='md:font-bold md:text-3xl md:text-white md:text-center md:py-4'>Popular BSNL Plans</h3>
                    <div className='md:flex md:flex-row md:p-4 md:gap-4'>

                        <div className='md:basis-1/2 md:rounded-lg md:border-2 md:border-white'>
                            <div className='md:bg-white md:p-4'>
                                <h4 className='md:font-bold md:text-lg md:text-gray-900 md:text-center'>Fibre Value Plus</h4>
                                <p className='md:font-semibold md:text-gray-900 md:text-center'>₹849.00 per month</p>
                            </div>
                            <div className='md:p-4 md:text-white'>
                                <div className='md:p-2'>
                                    <p className=''><span className='md:font-bold'>Speed:</span> Upto 100 Mbps till 2000 GB</p>
                                </div>
                                <div className='md:p-2'>
                                    <p><span className='md:font-bold'>Speed:</span> Upto 10 Mbps beyond 3300 GB</p>
                                </div>
                                <div className='md:p-2'>
                                    <p>Unlimited data download</p>
                                </div>
                                <div className='md:p-2'>
                                    <p><span className='md:font-bold'>Local + STD:</span> Unlimited calls to any network</p>
                                </div>
                                <div className='md:p-2 md:pb-4'>
                                    <p>Unlimited 24 hours</p>
                                </div>
                            </div>
                        </div>

                        <div className='md:basis-1/2 md:rounded-lg md:border-2 md:border-white'>
                            <div className='md:bg-white md:p-4'>
                                <h4 className='md:font-bold md:text-lg md:text-gray-900 md:text-center'>SuperStar Premium Plus</h4>
                                <p className='md:font-semibold md:text-gray-900 md:text-center'>₹999.00 per month</p>
                            </div>
                            <div className='md:p-4 md:text-white'>
                                <div className='md:p-2'>
                                    <p className=''><span className='md:font-bold'>Speed:</span> Upto 150 Mbps till 2000 GB</p>
                                </div>
                                <div className='md:p-2'>
                                    <p><span className='md:font-bold'>Speed:</span> 10 Mbps beyond 2000 GB</p>
                                </div>
                                <div className='md:p-2'>
                                    <p>Unlimited data download</p>
                                </div>
                                <div className='md:p-2'>
                                    <p><span className='md:font-bold'>Local + STD:</span> Unlimited calls to any network</p>
                                </div>
                                <div className='md:p-2 md:pb-4'>
                                    <p className='md:font-bold'>Free OTT: Hotstar, Lions Gate, Shemaroo, Hungama, SonyLIV, Zee5, YuppTV</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Link to='/bsnl'>
                        <button className='md:bg-black md:text-white md:font-bold md:py-2 md:px-4 md:rounded md:border-2 md:border-white md:hover:bg-gray-300 md:hover:border-white md:hover:border-2 md:hover:text-black'>
                            Show all Plans
                        </button>
                    </Link>
                </div>
            </div>

            {/* Mobile Screen UI */}
            <div className='block lg:hidden md:hidden bg-black'>
                <div className='py-4 px-4'>
                    <h3 className='font-bold text-2xl text-white text-center py-4'>Popular BSNL Plans</h3>
                    <div className='p-4'>

                        <div className='basis-1/2 rounded-lg border-2 border-white'>
                            <div className='bg-white p-4'>
                                <h4 className='font-bold text-lg text-gray-900 text-center'>Fibre Value Plus</h4>
                                <p className='font-semibold text-gray-900 text-center'>₹849.00 per month</p>
                            </div>
                            <div className='p-4 text-white'>
                                <div className='p-2'>
                                    <p className=''><span className='font-bold'>Speed:</span> Upto 100 Mbps till 2000 GB</p>
                                </div>
                                <div className='p-2'>
                                    <p><span className='font-bold'>Speed:</span> Upto 10 Mbps beyond 3300 GB</p>
                                </div>
                                <div className='p-2'>
                                    <p>Unlimited data download</p>
                                </div>
                                <div className='p-2'>
                                    <p><span className='font-bold'>Local + STD:</span> Unlimited calls to any network</p>
                                </div>
                                <div className='p-2 pb-4'>
                                    <p>Unlimited 24 hours</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className='basis-1/2 rounded-lg border-2 border-white'>
                            <div className='bg-white p-4'>
                                <h4 className='font-bold text-lg text-gray-900 text-center'>SuperStar Premium Plus</h4>
                                <p className='font-semibold text-gray-900 text-center'>₹999.00 per month</p>
                            </div>
                            <div className='p-4 text-white'>
                                <div className='p-2'>
                                    <p className=''><span className='font-bold'>Speed:</span> Upto 150 Mbps till 2000 GB</p>
                                </div>
                                <div className='p-2'>
                                    <p><span className='font-bold'>Speed:</span> 10 Mbps beyond 2000 GB</p>
                                </div>
                                <div className='p-2'>
                                    <p>Unlimited data download</p>
                                </div>
                                <div className='p-2'>
                                    <p><span className='font-bold'>Local + STD:</span> Unlimited calls to any network</p>
                                </div>
                                <div className='p-2 pb-4'>
                                    <p className='font-bold'>Free OTT: Hotstar, Lions Gate, Shemaroo, Hungama, SonyLIV, Zee5, YuppTV</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='px-2'>
                        <Link to='/bsnl'>
                            <button className='bg-black w-full text-white font-bold py-2 px-4 rounded border-2 border-white hover:bg-gray-300 hover:border-white hover:border-2 hover:text-black'>
                                Show all Plans
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
  )
}

export default BestBsnlPlansCE