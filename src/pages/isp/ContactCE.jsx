import { useState } from 'react'
import ChatCE from '../../components/isp/ChatCE'
import EmailCE from '../../components/isp/EmailCE'
import Support from '../../images/support.jpg'

function ContactCE() {

  // const [select, setSelect] = useState('chat');

  // const handleChat = () => {
  //   setSelect('chat')
  // }

  // const handleEmail = () => {
  //   setSelect('email')
  // }

  return (
    <>

      {/* Large Screen UI */}
      <div className='lg:block md:hidden hidden bg-white mx-auto px-24 py-8 min-h-[50vh]'>
        <h2 className='lg:py-8 lg:font-bold lg:text-center lg:text-6xl'>Welcome to Contact & Support</h2>

        {/* <div className='lg:py-8 lg:my-4 lg:w-1/2 lg:mx-auto lg:text-2xl lg:text-center'>
          <div className='lg:flex'>
            <button className='lg:flex-1 lg:rounded-l-md lg:bg-blue-500 lg:text-white lg:font-semibold lg:px-4 lg:py-2 lg:transition lg:duration-300 lg:ease-in-out lg:border-2 lg:border-r-2 lg:hover:bg-blue-600' onClick={handleChat}>
              <TbMessage className='inline-block' />Chat
            </button>
            <button className='lg:flex-1 lg:rounded-r-md lg:bg-blue-500 lg:text-white lg:font-semibold lg:px-4 lg:py-2 lg:transition lg:duration-300 lg:ease-in-out lg:border-2 lg:border-l-2 lg:hover:bg-blue-600' onClick={handleEmail}>
              <TbMail className='inline-block' />Email
            </button>
            
          </div>
        </div> */}

        <div className='lg:flex lg:flex-row'>
          <div className='lg:basis-1/2'>
            <img src={Support} alt='contact us photo' className='lg:p-4' />
          </div>
          <div className='lg:basis-1/2 lg:p-4 lg:my-auto'>
            <ChatCE />
          </div>
        </div>

        <div className='lg:py-8 lg:my-4 lg:w-1/2 lg:mx-auto lg:text-2xl lg:text-center'>
          <EmailCE />
        </div>

      </div>

      {/* Tablet Screen UI */}
      <div className='md:block lg:hidden hidden md:bg-white md:mx-auto md:px-40 md:py-8 md:min-h-[80vh]'>
        <h2 className='md:py-4 md:font-bold md:text-center md:text-4xl'>Welcome to Contact & Support</h2>

        <div className='md:mx-auto'>
          <div className='md:mx-auto'>
            <img src={Support} alt='contact us photo' className='md:p-4' />
          </div>

          {/* <div className='md:py-4 md:my-4 md:mx-auto md:text-2xl md:text-center'>
            <div className='md:flex'>
              <button className='md:flex-1 md:rounded-l-md md:bg-blue-500 md:text-white md:font-semibold md:px-4 md:py-2 md:transition md:duration-300 emd:ase-in-out md:border-2 md:border-r-2 md:hover:bg-blue-600' onClick={handleChat}>
                <TbMessage className='inline-block' />Chat
              </button>
              <button className='md:flex-1 md:rounded-r-md md:bg-blue-500 md:text-white md:font-semibold md:px-4 py-2 md:transition md:duration-300 md:ease-in-out md:border-2 md:border-l-2 md:hover:bg-blue-600' onClick={handleEmail}>
                <TbMail className='md:inline-block' />Email
              </button>
            </div>
          </div> */}

          <div className='md:p-4 md:my-auto'>
            <ChatCE />
          </div>
        </div>

        <div className='md:py-4 md:my-4 md:mx-auto md:text-2xl md:text-center'>
          <EmailCE />
        </div>

      </div>

      {/* Mobile Screen UI */}
      <div className='md:hidden lg:hidden block bg-white mx-auto px-5 py-8 min-h-[80vh]'>
        <h2 className='py-4 font-bold text-center text-3xl'>Welcome to Contact & Support</h2>

        <div className='mx-auto'>
          <div className='mx-auto'>
            <img src={Support} alt='contact us photo' className='p-4' />
          </div>

          {/* <div className='py-4 my-4 mx-auto text-2xl text-center'>
          <div className='flex'>
            <button className='flex-1 rounded-l-md bg-blue-500 text-white font-semibold px-4 py-2 transition duration-300 ease-in-out border-2 border-r-2 hover:bg-blue-600' onClick={handleChat}>
              <TbMessage className='inline-block' />Chat
            </button>
            <button className='flex-1 rounded-r-md bg-blue-500 text-white font-semibold px-4 py-2 transition duration-300 ease-in-out border-2 border-l-2 hover:bg-blue-600' onClick={handleEmail}>
              <TbMail className='inline-block' />Email
            </button>
          </div>
        </div> */}

          <div className='p-4 my-auto'>
            <ChatCE />
          </div>
        </div>

        <div className='py-4 my-4 mx-auto text-2xl text-center'>
          <EmailCE />
        </div>

      </div>

    </>
  )
}

export default ContactCE