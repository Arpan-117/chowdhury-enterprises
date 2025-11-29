import { useState, useRef } from 'react'

function CareerCE() {

  const formRef = useRef(null)
    const scriptUrl = 'https://script.google.com/macros/s/AKfycby26rdT-v6mqPkq0kiWYb-jKT_ioeBvhd_uI9HS9n4SEIbiJe68H-xOBZFgQP7oHH2n7A/exec'
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, {
            method: 'POST',
            body: new FormData(formRef.current),

        }).then(res => {
            console.log('SUCCESSFULLY SUBMITTED')
            setLoading(false)
        })
            .catch(err => console.log(err))
    }

  return (
    <>

            {/* Large Screen UI */}
            <div className='lg:block md:hidden hidden lg:bg-white lg:px-40 lg:pb-10'>
                <div className='lg:container lg:mx-auto lg:p-8 '>
                    <h2 className='lg:text-3xl lg:font-semibold lg:text-center lg:py-8'>Interested in joining us?</h2>
                </div>
                <div>
                    <form method='post' ref={formRef} onSubmit={handleSubmit} name='google-sheet' className='lg:mx-auto'>
                        <div className='lg:mb-8'>
                            <label htmlFor='name' className='lg:block lg:font-semibold lg:text-xl lg:mb-2'>Full Name:</label>
                            <input type='' name='name' placeholder='Your Name *' className='lg:w-full lg:px-3 lg:py-2 lg:border-2 lg:border-black lg:shadow-xl lg:hover:border-blue-400 lg:hover:border-2 lg:focus:outline-none lg:focus:border-blue-400' required />
                        </div>
                        <div className='lg:mb-8'>
                            <label htmlFor='email' className='lg:block lg:font-semibold lg:text-xl lg:mb-2'>Email ID:</label>
                            <input type='email' name='email' placeholder='Your Email *' className='lg:w-full lg:px-3 lg:py-2 lg:border-2 lg:border-black lg:shadow-xl lg:hover:border-blue-400 lg:hover:border-2 lg:focus:outline-none lg:focus:border-blue-400' required />
                        </div>
                        <div className='lg:mb-8'>
                            <label htmlFor='position' className='lg:block lg:font-semibold lg:text-xl lg:mb-2'>Position:</label>
                            <input type='' name='position' placeholder='Position you want to apply for *' className='lg:w-full lg:px-3 lg:py-2 lg:border-2 lg:border-black lg:shadow-xl lg:hover:border-blue-400 lg:hover:border-2 lg:focus:outline-none lg:focus:border-blue-400' required />
                        </div>
                        <div className='lg:mb-8'>
                            <label htmlFor='message' className='lg:block lg:font-semibold lg:text-xl lg:mb-2'>Message:</label>
                            <textarea type='textarea' name='message' placeholder='Tell us why should we hire you *' rows='4' className='lg:w-full lg:px-3 lg:py-2 lg:border-2 lg:border-black lg:shadow-xl lg:hover:border-blue-400 lg:hover:border-2 lg:focus:outline-none lg:focus:border-blue-400' required />
                        </div>
                        <div className='lg:mb-8'>
                            <input type='submit' className='lg:bg-black lg:py-2 lg:px-4 lg:w-full lg:font-semibold lg:text-white lg:text-xl lg:tracking-wide lg:rounded' value={loading ? 'Loading...' : 'SEND MESSAGE'} />
                        </div>
                    </form>
                </div>
            </div>

            {/* Tablet Screen UI */}
            <div className='md:block lg:hidden hidden md:bg-white md:px-20 md:pb-10'>
                <div className='md:container md:mx-auto md:p-8 '>
                    <h2 className='md:text-3xl md:font-semibold md:text-center md:py-8'>Interested in joining us?</h2>
                </div>
                <div>
                    <form method='post' ref={formRef} onSubmit={handleSubmit} name='google-sheet' className='md:mx-auto'>
                        <div className='md:mb-8'>
                            <label htmlFor='name' className='md:block md:font-semibold md:text-xl md:mb-2'>Full Name:</label>
                            <input type='' name='name' placeholder='Your Name *' className='md:w-full md:px-3 md:py-2 md:border-2 md:border-black md:shadow-xl md:hover:border-blue-400 md:hover:border-2 md:focus:outline-none md:focus:border-blue-400' required />
                        </div>
                        <div className='md:mb-8'>
                            <label htmlFor='email' className='md:block md:font-semibold md:text-xl md:mb-2'>Email ID:</label>
                            <input type='email' name='email' placeholder='Your Email *' className='md:w-full md:px-3 md:py-2 md:border-2 md:border-black md:shadow-xl md:hover:border-blue-400 md:hover:border-2 md:focus:outline-none md:focus:border-blue-400' required />
                        </div>
                        <div className='md:mb-8'>
                            <label htmlFor='position' className='md:block md:font-semibold md:text-xl md:mb-2'>Position:</label>
                            <input type='' name='position' placeholder='Position you want to apply for *' className='md:w-full md:px-3 md:py-2 md:border-2 md:border-black md:shadow-xl md:hover:border-blue-400 md:hover:border-2 md:focus:outline-none md:focus:border-blue-400' required />
                        </div>
                        <div className='md:mb-8'>
                            <label htmlFor='message' className='md:block md:font-semibold md:text-xl md:mb-2'>Message:</label>
                            <textarea type='textarea' name='message' placeholder='Tell us why should we hire you *' rows='4' className='md:w-full md:px-3 md:py-2 md:border-2 md:border-black md:shadow-xl md:hover:border-blue-400 md:hover:border-2 md:focus:outline-none md:focus:border-blue-400' required />
                        </div>
                        <div className='md:mb-8'>
                            <input type='submit' className='md:bg-black md:py-2 md:px-4 md:w-full md:font-semibold md:text-white md:text-xl md:tracking-wide md:rounded' value={loading ? 'Loading...' : 'SEND MESSAGE'} />
                        </div>
                    </form>
                </div>
            </div>

            {/* Mobile Screen UI */}
            <div className='block lg:hidden md:hidden bg-white px-8 pb-10'>
                <div className='container mx-auto p-8'>
                    <h2 className='text-2xl font-semibold text-center'>Interested in joining us?</h2>
                </div>
                <div>
                    <form method='post' ref={formRef} onSubmit={handleSubmit} name='google-sheet' className='mx-auto'>
                        <div className='mb-8'>
                            <label htmlFor='name' className='block font-semibold text-xl mb-2'>Full Name:</label>
                            <input type='' name='name' placeholder='Your Name *' className='w-full px-3 py-2 border-2 border-white shadow-xl hover:border-blue-400 hover:border-2 focus:outline-none focus:border-blue-400' required />
                        </div>
                        <div className='mb-8'>
                            <label htmlFor='email' className='block font-semibold text-xl mb-2'>Email ID:</label>
                            <input type='email' name='email' placeholder='Your Email *' className='w-full px-3 py-2 border-2 border-white shadow-xl hover:border-blue-400 hover:border-2 focus:outline-none focus:border-blue-400' required />
                        </div>
                        <div className='mb-8'>
                            <label htmlFor='position' className='block font-semibold text-xl mb-2'>Position:</label>
                            <input type='' name='position' placeholder='Position you want to apply for *' className='w-full px-3 py-2 border-2 border-white shadow-xl hover:border-blue-400 hover:border-2 focus:outline-none focus:border-blue-400' required />
                        </div>
                        <div className='mb-8'>
                            <label htmlFor='message' className='block font-semibold text-xl mb-2'>Message:</label>
                            <textarea type='textarea' name='message' placeholder='Tell us why should we hire you *' rows='4' className='w-full px-3 py-2 border-2 border-white shadow-xl hover:border-blue-400 hover:border-2 focus:outline-none focus:border-blue-400' required />
                        </div>
                        <div className='mb-8'>
                            <input type='submit' className='bg-black py-2 px-4 w-full font-semibold text-white text-xl tracking-wide rounded' value={loading ? 'Loading...' : 'SEND MESSAGE'} />
                        </div>
                    </form>
                </div>
            </div>

        </>
  )
}

export default CareerCE