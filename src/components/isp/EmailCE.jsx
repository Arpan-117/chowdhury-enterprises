import { useRef, useState } from 'react'

function EmailCE() {

    const formRef = useRef(null)
    const scriptUrl = 'https://script.google.com/macros/s/AKfycby7faU-0tEUym3wmBkuCREDb2AcnFXAtQIS4OObkdP_-s_wGdM-LVimqKjk-H0xy9Gx/exec'
    const [loading, setLoading] = useState(false);

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
        <div className='lg:block md:hidden hidden lg:bg-white'>

            <div className='lg:container lg:mx-auto lg:p-8'>
                <h2 className='lg:text-3xl lg:font-semibold lg:mb-4 lg:pb-4'>Any queries? Simply write to us.</h2>

                <form method='post' ref={formRef} onSubmit={handleSubmit} name='google-sheet' className='lg:mx-auto'>
                    <div className='lg:mb-8'>
                        <label htmlFor='name' className='lg:block lg:font-semibold lg:text-xl lg:mb-2'>Full Name:</label>
                        <input type='' name='name' placeholder='Your Name *' className='lg:w-2/3 lg:px-3 lg:py-2 lg:border-2 lg:border-black lg:shadow-xl lg:hover:border-blue-400 lg:hover:border-2 lg:focus:outline-none lg:focus:border-blue-400' required />
                    </div>
                    <div className='lg:mb-8'>
                        <label htmlFor='email' className='lg:block lg:font-semibold lg:text-xl lg:mb-2'>Email ID:</label>
                        <input type='email' name='email' placeholder='Your Email *' className='lg:w-2/3 lg:px-3 lg:py-2 lg:border-2 lg:border-black lg:shadow-xl lg:hover:border-blue-400 lg:hover:border-2 lg:focus:outline-none lg:focus:border-blue-400' required />
                    </div>
                    <div className='lg:mb-8'>
                        <label htmlFor='phone' className='lg:block lg:font-semibold lg:text-xl lg:mb-2'>Registered Phone Number:</label>
                        <input type='tel' name='phone' placeholder='Your Phone(10 digit) *' className='lg:w-2/3 lg:px-3 lg:py-2 lg:border-2 lg:border-black lg:shadow-xl lg:hover:border-blue-400 lg:hover:border-2 lg:focus:outline-none lg:focus:border-blue-400' required />
                    </div>
                    <div className='lg:mb-8'>
                        <label htmlFor='subject' className='lg:block lg:font-semibold lg:text-xl lg:mb-2'>Subject:</label>
                        <input type='text' name='subject' placeholder='Subject *' className='lg:w-2/3 lg:px-3 lg:py-2 lg:border-2 lg:border-black lg:shadow-xl lg:hover:border-blue-400 lg:hover:border-2 lg:focus:outline-none lg:focus:border-blue-400' required />
                    </div>
                    <div className='lg:mb-8'>
                        <label htmlFor='description' className='lg:block lg:font-semibold lg:text-xl lg:mb-2'>Description:</label>
                        <textarea type='text' name='description' placeholder='Description *' rows='5' className='lg:w-2/3 lg:px-3 lg:py-2 lg:border-2 lg:border-black lg:shadow-xl lg:hover:border-blue-400 lg:hover:border-2 lg:focus:outline-none lg:focus:border-blue-400' required />
                    </div>
                    <div className='lg:mb-8'>
                        <input type='submit' className='lg:bg-black lg:py-2 lg:px-4 lg:w-2/3 lg:text-white lg:text-2xl lg:tracking-wide lg:rounded' value={loading ? 'Loading...' : 'SEND MESSAGE'} />
                    </div>
                </form>
            </div>
        </div>

        {/* <div className='lg:block md:hidden hidden lg:bg-white'>

            <div className='lg:container lg:mx-auto lg:p-8'>
                <h2 className='lg:text-3xl lg:font-semibold lg:mb-4 lg:pb-4'>Any queries? Simply write to us.</h2>

                <form method='post' ref={formRef} onSubmit={handleSubmit} name='google-sheet' className='lg:mx-auto'>
                    <div className='lg:mb-8'>
                        <label htmlFor='name' className='lg:block lg:font-semibold lg:text-xl lg:mb-2'>Full Name:</label>
                        <input type='' name='name' placeholder='Your Name *' className='lg:w-2/3 lg:px-3 lg:py-2 lg:border-2 lg:border-white lg:shadow-xl lg:hover:border-blue-400 lg:hover:border-2 lg:focus:outline-none lg:focus:border-blue-400' required />
                    </div>
                    <div className='lg:mb-8'>
                        <label htmlFor='email' className='lg:block lg:font-semibold lg:text-xl lg:mb-2'>Email ID:</label>
                        <input type='email' name='email' placeholder='Your Email *' className='lg:w-2/3 lg:px-3 lg:py-2 lg:border-2 lg:border-white lg:shadow-xl lg:hover:border-blue-400 lg:hover:border-2 lg:focus:outline-none lg:focus:border-blue-400' required />
                    </div>
                    <div className='lg:mb-8'>
                        <label htmlFor='phone' className='lg:block lg:font-semibold lg:text-xl lg:mb-2'>Registered Phone Number:</label>
                        <input type='tel' name='phone' placeholder='Your Phone(10 digit) *' className='lg:w-2/3 lg:px-3 lg:py-2 lg:border-2 lg:border-white lg:shadow-xl lg:hover:border-blue-400 lg:hover:border-2 lg:focus:outline-none lg:focus:border-blue-400' required />
                    </div>
                    <div className='lg:mb-8'>
                        <label htmlFor='subject' className='lg:block lg:font-semibold lg:text-xl lg:mb-2'>Subject:</label>
                        <input type='text' name='subject' placeholder='Your Address *' className='lg:w-2/3 lg:px-3 lg:py-2 lg:border-2 lg:border-white lg:shadow-xl lg:hover:border-blue-400 lg:hover:border-2 lg:focus:outline-none lg:focus:border-blue-400' required />
                    </div>
                    <div className='lg:mb-8'>
                        <label htmlFor='description' className='lg:block lg:font-semibold lg:text-xl lg:mb-2'>Description:</label>
                        <textarea type='text' name='description' placeholder='Your Address *' rows='5' className='lg:w-2/3 lg:px-3 lg:py-2 lg:border-2 lg:border-white lg:shadow-xl lg:hover:border-blue-400 lg:hover:border-2 lg:focus:outline-none lg:focus:border-blue-400' required />
                    </div>
                    <div className='lg:mb-8'>
                        <input type='submit' className='lg:bg-black lg:py-2 lg:px-4 lg:w-2/3 lg:text-white lg:text-2xl lg:tracking-wide lg:rounded' value={loading ? 'Loading...' : 'SEND MESSAGE'} />
                    </div>
                </form>
            </div>
        </div> */}

        {/* Tablet Screen UI */}
        <div className='md:block lg:hidden hidden md:bg-white'>

            <div className='md:container md:mx-auto md:p-8'>
                <h2 className='md:text-3xl md:font-semibold md:mb-4 md:pb-4'>Any queries? Simply write to us.</h2>

                <form method='post' ref={formRef} onSubmit={handleSubmit} name='google-sheet' className='md:mx-auto'>
                    <div className='md:mb-8'>
                        <label htmlFor='name' className='md:block md:font-semibold md:text-xl md:mb-2'>Full Name:</label>
                        <input type='' name='name' placeholder='Your Name *' className='md:w-full md:px-3 md:py-2 md:border-2 md:border-white md:shadow-xl md:hover:border-blue-400 md:hover:border-2 md:focus:outline-none md:focus:border-blue-400' required />
                    </div>
                    <div className='md:mb-8'>
                        <label htmlFor='email' className='md:block md:font-semibold md:text-xl md:mb-2'>Email ID:</label>
                        <input type='email' name='email' placeholder='Your Email *' className='md:w-full md:px-3 md:py-2 md:border-2 md:border-white md:shadow-xl md:hover:border-blue-400 md:hover:border-2 md:focus:outline-none md:focus:border-blue-400' required />
                    </div>
                    <div className='md:mb-8'>
                        <label htmlFor='phone' className='md:block md:font-semibold md:text-xl md:mb-2'>Registered Phone Number:</label>
                        <input type='tel' name='phone' placeholder='Your Phone(10 digit) *' className='md:w-full md:px-3 md:py-2 md:border-2 md:border-white md:shadow-xl md:hover:border-blue-400 md:hover:border-2 md:focus:outline-none md:focus:border-blue-400' required />
                    </div>
                    <div className='md:mb-8'>
                        <label htmlFor='subject' className='md:block md:font-semibold md:text-xl md:mb-2'>Subject:</label>
                        <input type='text' name='subject' placeholder='Your Address *' className='md:w-full md:px-3 md:py-2 md:border-2 md:border-white md:shadow-xl md:hover:border-blue-400 md:hover:border-2 md:focus:outline-none md:focus:border-blue-400' required />
                    </div>
                    <div className='md:mb-8'>
                        <label htmlFor='description' className='md:block md:font-semibold md:text-xl md:mb-2'>Description:</label>
                        <textarea type='text' name='description' placeholder='Your Address *' rows='5' className='md:w-full md:px-3 md:py-2 md:border-2 md:border-white md:shadow-xl md:hover:border-blue-400 md:hover:border-2 md:focus:outline-none md:focus:border-blue-400' required />
                    </div>
                    <div className='md:mb-8'>
                        <input type='submit' className='md:bg-black md:py-2 md:px-4 md:w-2/3 md:text-white md:text-2xl md:tracking-wide md:rounded' value={loading ? 'Loading...' : 'SEND MESSAGE'} />
                    </div>
                </form>
            </div>
        </div>

        {/* Mobile Screen UI */}
        <div className='lg:hidden md:hidden block lg:bg-white'>

            <div className='container mx-auto p-8'>
                <h2 className='text-3xl font-semibold mb-4 pb-4'>Any queries? Simply write to us.</h2>

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
                        <label htmlFor='phone' className='block font-semibold text-xl mb-2'>Registered Phone Number:</label>
                        <input type='tel' name='phone' placeholder='Your Phone(10 digit) *' className='w-full px-3 py-2 border-2 border-white shadow-xl hover:border-blue-400 hover:border-2 focus:outline-none focus:border-blue-400' required />
                    </div>
                    <div className='mb-8'>
                        <label htmlFor='subject' className='block font-semibold text-xl mb-2'>Subject:</label>
                        <input type='text' name='subject' placeholder='Your Address *' className='w-full px-3 py-2 border-2 border-white shadow-xl hover:border-blue-400 hover:border-2 focus:outline-none focus:border-blue-400' required />
                    </div>
                    <div className='mb-8'>
                        <label htmlFor='description' className='block font-semibold text-xl mb-2'>Description:</label>
                        <textarea type='text' name='description' placeholder='Your Address *' rows='5' className='w-full px-3 py-2 border-2 border-white shadow-xl hover:border-blue-400 hover:border-2 focus:outline-none focus:border-blue-400' required />
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

export default EmailCE