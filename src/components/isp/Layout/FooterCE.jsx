import React from 'react'
import { Link } from 'react-router'
import logo from '../../../images/logo.jpg'
import { FaLocationDot } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

function FooterCE() {
  return (
    // <>
    //     <h1>FooterCE</h1>
    // </>
    <>

    {/* New Footer Design */}

    {/* Large Screen UI */}
    <div className='lg:block md:hidden hidden lg:bg-black'>
    <div>
      <div className='lg:flex lg:flex-row lg:px-16 lg:py-8 lg:gap-8'>

        <div className='lg:basis-4/12 lg:pr-4'>
          <img src={logo} alt='Logo' className='lg:size-16 lg:rounded-lg lg:border-black lg:border-2' />
          <h3 className='lg:font-bold lg:text-white lg:text-3xl'>Chowdhury Enterprises</h3>
          <br/>
          <p className='lg:text-white lg:text-base'>Welcome to Chowdhury Enterprises, where we specialize in providing integrated solutions for Internet, Networking, and CCTV services. Our commitment to technological excellence, reliability, and customer satisfaction empowers businesses and individuals with seamless connectivity, robust networking infrastructure, and advanced security solutions.</p>
          <br/><br/>
        </div>

          <div className='lg:basis-2/12 lg:px-2 lg:text-white'>
            <h3 className='lg:text-2xl lg:pb-4 lg:font-semibold'>Quick Links</h3>
            <ol className='lg:list-disc lg:text-lg'>
              <Link to='/about'>
                <li>About Us</li>
              </Link>
              <Link to='/contact'>
                <li>Contact Us</li>
              </Link>
              <Link to='/internet'>
                <li>Internet</li>
              </Link>
              <Link to='/cctv'>
                <li>Security Tech</li>
              </Link>
              <Link to='/networking'>
                <li>Networking</li>
              </Link>
            </ol>
          </div>

          <div className='lg:basis-3/12 lg:px-2 lg:mx-auto lg:text-white'>
            <h3 className='lg:text-2xl lg:text-center lg:pb-4 lg:font-semibold'>Contact Us</h3>
            <div className='lg:px-8'>
            <FaLocationDot />
            <p>5 Vidya Sagar Path, Uliyan,</p>
            <p>Kadma, Jamshedpur - 831005</p>
            <br/>
            <FaPhoneAlt />
            <p>+91-6206878303</p>
            <p>+91-8987745403</p>
            <br/>
            <MdEmail />
            <p>support@chowdhuryenterprises.in</p>
            </div>
          </div>

          <div className='lg:basis-3/12 lg:px-2 lg:text-white'>
          <h3 className='lg:text-2xl lg:text-center lg:pb-4 lg:font-semibold'>Follow Us</h3>
          <div className='lg:flex lg:flex-row'>
            <div className='lg:basis-1/3 lg:text-right lg:text-3xl'>
            <Link to='https://www.facebook.com/profile.php?id=100063506993150' target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className='lg:mx-auto' />
            </Link>
            </div>
            <div className='lg:basis-1/3 lg:text-3xl'>
            <Link to='https://www.instagram.com/chowdhury.enterprises/' target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare className='lg:mx-auto' />
            </Link>
            </div>
            <div className='lg:basis-1/3 lg:text-left lg:text-3xl'>
            <Link to='https://wa.me/+916206878303' target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare className='lg:mx-auto' />
            </Link>
            </div>
          </div>
          </div>
      </div>
      </div>

        <div className='lg:px-16 lg:py-8'>
          <div className='lg:flex lg:flex-row'>
            <div className='lg:basis-1/2 lg:px-2 lg:text-white'>
              <p className='lg:text-white lg:text-sm'> ©️ 2025, Chowdhury Enterprises</p>
              <p className='lg:text-white lg:text-sm'>All Rights Reserved</p>
            </div>

            <div className='lg:basis-1/2 lg:px-2 lg:text-white'>
              <p className='lg:inline lg:px-4 lg:text-sm'>|</p>
              <Link to='/privacy-policy'>
                <p className='lg:inline lg:text-sm'>Privacy Policy</p>
              </Link>
              <p className='lg:inline lg:px-4 lg:text-sm'>|</p>
            </div>
          </div>
        </div>
    </div>

    {/* Tablet Screen UI */}
    <div className='md:block lg:hidden hidden md:bg-black'>
    <div>
      <div className='md:flex md:flex-row md:px-8 md:py-8 md:gap-16'>

        <div className='md:basis-1/2'>
          <img src={logo} alt='Logo' className='md:mx-auto md:size-16 md:rounded-lg md:border-black md:border-2' />
          <h3 className='md:font-bold md:text-white md:text-2xl md:text-center'>Chowdhury Enterprises</h3>
          <br/>
          <p className='md:text-white md:text-justify md:text-base'>Welcome to Chowdhury Enterprises, where we specialize in providing integrated solutions for Internet, Networking, and CCTV services. Our commitment to technological excellence, reliability, and customer satisfaction empowers businesses and individuals with seamless connectivity, robust networking infrastructure, and advanced security solutions.</p>
          <br/><br/>
        </div>

          <div className='md:basis-1/2 md:px-2 md:text-white'>
            <h3 className='md:text-2xl md:pb-4 md:font-bold md:text-center'>Quick Links</h3>
            <ol className='md:list-disc md:text-base md:text-center'>
              <Link to='/about'>
                <li>About Us</li>
              </Link>
              <Link to='/contact'>
                <li>Contact Us</li>
              </Link>
              <Link to='/internet'>
                <li>Internet</li>
              </Link>
              <Link to='/cctv'>
                <li>Security Tech</li>
              </Link>
              <Link to='/home-office-networking'>
                <li>Networking</li>
              </Link>
            </ol>
          </div>

          </div>

          <div className='md:flex md:flex-row md:px-8 md:py-8 md:gap-8'>

          <div className='md:basis-1/2 md:px-2 md:mx-auto md:text-white'>
            <h3 className='md:text-2xl md:text-center md:pb-4 md:font-semibold'>Contact Us</h3>
            <div className='md:px-8'>
            <FaLocationDot />
            <p>5 Vidya Sagar Path, Uliyan,</p>
            <p>Kadma, Jamshedpur - 831005</p>
            <br/>
            <FaPhoneAlt />
            <p>+91-6206878303</p>
            <p>+91-8987745403</p>
            <br/>
            <MdEmail />
            <p>support@chowdhuryenterprises.in</p>
            </div>
          </div>

          <div className='md:basis-1/2 md:px-2 md:text-white'>
          <h3 className='md:text-2xl md:text-center md:pb-4 md:font-semibold'>Follow Us</h3>
          <div className='md:flex md:flex-row'>
            <div className='md:basis-1/3 md:text-right md:text-3xl'>
            <Link to='https://www.facebook.com/profile.php?id=100063506993150' target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className='md:mx-auto' />
            </Link>
            </div>
            <div className='md:basis-1/3 md:text-3xl'>
            <Link to='https://www.instagram.com/chowdhury.enterprises/' target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare className='md:mx-auto' />
            </Link>
            </div>
            <div className='md:basis-1/3 md:text-left md:text-3xl'>
            <Link to='https://wa.me/+916206878303' target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare className='md:mx-auto' />
            </Link>
            </div>
          </div>
          </div>
      </div>
      </div>

        <div className='md:px-16 md:py-8'>
          <div className='md:flex md:flex-row'>
            <div className='md:basis-1/2 md:px-2 md:text-white'>
              <p className='md:text-white md:text-sm'> ©️ 2025, Chowdhury Enterprises</p>
              <p className='md:text-white md:text-sm'>All Rights Reserved</p>
            </div>

            <div className='md:basis-1/2 md:px-2 md:text-white'>
              <p className='md:inline md:px-4 md:text-sm'>|</p>
              <Link to='/privacy-policy'>
                <p className='md:inline md:text-sm'>Privacy Policy</p>
              </Link>
              <p className='md:inline md:px-4 md:text-sm'>|</p>
            </div>
          </div>
        </div>
    </div>

    {/* Mobile Screen UI */}
    <div className='block lg:hidden md:hidden bg-black'>
    <div>
      <div className='block px-8 py-8 gap-16'>

        <div className=''>
          <img src={logo} alt='Logo' className='mx-auto size-16 rounded-lg border-black border-2' />
          <h3 className='font-bold text-white text-2xl text-center'>Chowdhury Enterprises</h3>
          <br/>
          <p className='text-white text-justify text-base'>Welcome to Chowdhury Enterprises, where we specialize in providing integrated solutions for Internet, Networking, and CCTV services. Our commitment to technological excellence, reliability, and customer satisfaction empowers businesses and individuals with seamless connectivity, robust networking infrastructure, and advanced security solutions.</p>
          <br/><br/>
        </div>

          <div className='px-2 text-white'>
            <h3 className='text-2xl pb-4 font-bold text-center'>Quick Links</h3>
            <ol className='list-disc text-base text-center'>
              <Link to='/about'>
                <li>About Us</li>
              </Link>
              <Link to='/contact'>
                <li>Contact Us</li>
              </Link>
              <Link to='/internet'>
                <li>Internet</li>
              </Link>
              <Link to='/cctv'>
                <li>Security Tech</li>
              </Link>
              <Link to='/home-office-networking'>
                <li>Networking</li>
              </Link>
            </ol>
            <br/><br/>
          </div>

          <div className='px-2 mx-auto text-white'>
            <h3 className='text-2xl text-center pb-4 font-semibold'>Contact Us</h3>
            <div className='px-8'>
            <FaLocationDot />
            <p>5 Vidya Sagar Path, Uliyan,</p>
            <p>Kadma, Jamshedpur - 831005</p>
            <br/>
            <FaPhoneAlt />
            <p>+91-6206878303</p>
            <p>+91-8987745403</p>
            <br/>
            <MdEmail />
            <p>support@chowdhuryenterprises.in</p>
            </div>
            <br/><br/>
          </div>

          <div className='px-2 text-white'>
          <h3 className='text-2xl text-center pb-4 font-semibold'>Follow Us</h3>
          <div className='flex flex-row'>
            <div className='basis-1/3 text-right text-3xl'>
            <Link to='https://www.facebook.com/profile.php?id=100063506993150' target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className='mx-auto' />
            </Link>
            </div>
            <div className='basis-1/3 text-3xl'>
            <Link to='https://www.instagram.com/chowdhury.enterprises/' target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare className='mx-auto' />
            </Link>
            </div>
            <div className='basis-1/3 text-left text-3xl'>
            <Link to='https://wa.me/+916206878303' target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare className='mx-auto' />
            </Link>
            </div>
          </div>
          <br/><br/>
          </div>
      </div>
      </div>

        <div className='px-4 py-8'>
          <div className='flex flex-row'>
            <div className='basis-1/2 px-2 text-white'>
              <p className='text-white text-sm'> ©️ 2025, Chowdhury Enterprises</p>
              <p className='text-white text-sm'>All Rights Reserved</p>
            </div>

            <div className='basis-1/2 px-2 text-white'>
              <p className='inline px-4 text-sm'>|</p>
              <Link to='/privacy-policy'>
                <p className='inline text-sm'>Privacy Policy</p>
              </Link>
              <p className='inline px-4 text-sm'>|</p>
            </div>
          </div>
        </div>
    </div>

    </>
  )
}

export default FooterCE