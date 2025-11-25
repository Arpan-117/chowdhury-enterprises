// import React from 'react'

function EquipmentsCE() {
  return (
    <>

            {/* Large Screen UI */}
            <div className='lg:block md:hidden hidden px-40 py-10'>
                <h3 className='lg:py-8 lg:font-bold lg:text-4xl lg:text-center lg:uppercase'>Networking Services & the Equipments We Provide</h3>

                <div>
                    <div className='lg:flex lg:flex-row'>

                        {/* <div className='basis-1/4'></div> */}

                        <div className='lg:basis-1/2 lg:p-2'>
                            <ul className='lg:list-disc lg:text-2xl lg:tracking-wide'>
                                <li className='lg:py-2'>Joining users to servers</li>
                                <li className='lg:py-2'>Managed network services</li>
                                <li className='lg:py-2'>Network administration</li>
                                <li className='lg:py-2'>Network configuration</li>
                                <li className='lg:py-2'>Wired networking</li>
                                <li className='lg:py-2'>Wireless device setup</li>
                            </ul>
                        </div>

                        <div className='lg:basis-1/2 lg:p-2'>
                            <ul className='lg:list-disc lg:text-2xl lg:tracking-wide'>
                                <li className='lg:py-2'>Networked printers</li>
                                <li className='lg:py-2'>Router configurations</li>
                                <li className='lg:py-2'>Server configuration</li>
                                <li className='lg:py-2'>Server maintenance</li>
                                <li className='lg:py-2'>Wireless access point</li>
                                <li className='lg:py-2'>Wireless Network</li>
                            </ul>
                        </div>

                        {/* <div className='basis-1/4'></div> */}

                    </div>
                </div>
            </div>

            {/* Tablet Screen UI */}
            <div className='md:block lg:hidden hidden md:px-40 md:py-10'>
                <h3 className='md:py-8 md:font-bold md:text-4xl md:text-center md:uppercase'>Networking Services & the Equipments We Provide</h3>

                <div>
                    <div className='md:flex md:flex-row'>

                        {/* <div className='basis-1/4'></div> */}

                        <div className='md:basis-1/2 md:p-2'>
                            <ul className='md:list-disc md:text-lg md:tracking-wide'>
                                <li className='md:py-2'>Joining users to servers</li>
                                <li className='md:py-2'>Managed network services</li>
                                <li className='md:py-2'>Network administration</li>
                                <li className='md:py-2'>Network configuration</li>
                                <li className='md:py-2'>Wired networking</li>
                                <li className='md:py-2'>Wireless device setup</li>
                            </ul>
                        </div>
                        <br />
                        <div className='md:basis-1/2 md:p-2'>
                            <ul className='md:list-disc md:text-lg md:tracking-wide'>
                                <li className='md:py-2'>Networked printers</li>
                                <li className='md:py-2'>Router configurations</li>
                                <li className='md:py-2'>Server configuration</li>
                                <li className='md:py-2'>Server maintenance</li>
                                <li className='md:py-2'>Wireless access point</li>
                                <li className='md:py-2'>Wireless Network</li>
                            </ul>
                        </div>

                        {/* <div className='basis-1/4'></div> */}

                    </div>
                </div>
            </div>

            {/* Mobile Screen UI */}
            <div className='md:hidden lg:hidden sm:hidden px-5 py-10'>
                <h3 className='py-2 pb-4 font-bold text-3xl text-center uppercase'>Networking Services & the Equipments We Provide</h3>

                <div>
                    <div className='block'>

                        <div className='p-2 mx-auto'>
                            <ul className='block px-24 list-disc text-base tracking-wide'>
                                <li className='py-2'>Joining users to servers</li>
                                <li className='py-2'>Managed network services</li>
                                <li className='py-2'>Network administration</li>
                                <li className='py-2'>Network configuration</li>
                                <li className='py-2'>Wired networking</li>
                                <li className='py-2'>Wireless device setup</li>
                                <li className='py-2'>Networked printers</li>
                                <li className='py-2'>Router configurations</li>
                                <li className='py-2'>Server configuration</li>
                                <li className='py-2'>Server maintenance</li>
                                <li className='py-2'>Wireless access point</li>
                                <li className='py-2'>Wireless Network</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </>
  )
}

export default EquipmentsCE