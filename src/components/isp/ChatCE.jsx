import React from 'react'

function ChatCE() {
  return (
    <>
    
    {/* Large Screen UI */}
    <div className='lg:block md:hidden hidden lg:bg-white'>
      <div className='lg:mx-auto'>
        <h5 className='lg:font-semibold lg:text-3xl lg:text-center lg:py-4'>Reach out to us</h5>
        <div className='lg:flex lg:justify-around lg:py-4'>
          <div className='lg:text-xl'>
            <p>Office</p>
            <p>Mobile</p>
            <p>WhatsApp</p>
            <p>Email</p>
          </div>
          <div className='lg:text-xl'>
            <p>0657-2300301</p>
            <p>+91-6206878303 / +91-8987745403 / 07903490796</p>
            <p>+91-6206878303 / +91-8987745403</p>
            <p>support@chowdhuryenterprises.in</p>
          </div>
        </div>
      </div>
    </div>

    {/* Tablet Screen UI */}
    <div className='md:block lg:hidden hidden md:bg-white'>
      <div className='md:mx-auto'>
        <h5 className='md:font-semibold md:text-3xl md:text-center md:py-4'>Reach out to us</h5>
        <div className='md:flex md:justify-around md:py-4'>
          <div className='md:text-xl'>
            <p>Office</p>
            <p>Mobile</p>
            <p>WhatsApp</p>
            <p>Email</p>
          </div>
          <div className='md:text-xl md:text-right'>
            <p>0657-2300301</p>
            <p>+91-6206878303 / +91-8987745403 / 07903490796</p>
            <p>+91-6206878303 / +91-8987745403</p>
            <p>support@chowdhuryenterprises.in</p>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Screen UI */}
      <div className='block lg:hidden md:hidden bg-white'>
        <div className='mx-auto'>
          <h5 className='font-semibold text-2xl text-center py-4'>Reach out to us</h5>

          <div className='block justify-around py-4'>
            <div className='flex'>
              <div className='text-base basis-1/2'>
                <p>Office</p>
              </div>
              <div className='text-base basis-1/2'>
                <p>0657-2300301</p>
              </div>
            </div>
            <div className='flex'>
              <div className='text-base basis-1/2'>
                <p>Mobile</p>
              </div>
              <div className='text-base basis-1/2'>
                <p>+91-6206878303 / +91-8987745403 / 07903490796</p>
              </div>
            </div>
            <div className='flex'>
              <div className='text-base basis-1/2'>
                <p>WhatsApp</p>
              </div>
              <div className='text-base basis-1/2'>
                <p>+91-6206878303 / +91-8987745403</p>
              </div>
            </div>
            <div className='flex'>
              <div className='text-base basis-1/2'>
                <p>Email</p>
              </div>
              <div className='text-base basis-1/2'>
                <p>support@chowdhuryenterprises.in</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default ChatCE