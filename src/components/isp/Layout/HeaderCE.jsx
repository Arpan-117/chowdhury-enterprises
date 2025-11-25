import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import logo from '../../../images/logo.jpg'

function HeaderCE() {

  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showPlansDropdown, setShowPlansDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showServicesDropdown2, setShowServicesDropdown2] = useState(false);
  const [showPlansDropdown2, setShowPlansDropdown2] = useState(false);
  const [showCompanyDropdown2, setShowCompanyDropdown2] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mobDropdown1 = () => {
    setShowServicesDropdown2(!showServicesDropdown2);
    setShowPlansDropdown2(false);
    setShowCompanyDropdown2(false);
  }

  const mobDropdown2 = () => {
    setShowServicesDropdown2(false);
    setShowPlansDropdown2(!showPlansDropdown2);
    setShowCompanyDropdown2(false);
  }

  const mobDropdown3 = () => {
    setShowServicesDropdown2(false);
    setShowPlansDropdown2(false);
    setShowCompanyDropdown2(!showCompanyDropdown2);
  }

  return (
    // <>
    //     <h1>HeaderCE</h1>
    // </>
    <>
      <nav className='lg:w-full bg-white lg:flex lg:justify-between lg:items-center lg:py-4 lg:px-20 lg:sticky lg:top-0 lg:z-40
                      md:w-full md:flex md:justify-between md:items-center md:py-4 md:px-10 md:sticky md:top-0 md:z-40
                      w-full flex justify-between items-center py-2 px-2 top-0 z-40'>
        <div className='lg:text-xl lg:font-bold
                        md:text-base md:font-semibold
                        text-sm font-medium'>
          <Link to="/">
            <img src={logo} alt='Logo' className='lg:size-16 lg:rounded-lg lg:mx-auto
                                                  md:size-10 md:rounded-lg md:mx-auto
                                                  size-10 rounded-md border-black border-2' />
            <h3 className='lg:font-bold
                           md:font-semibold md:uppercase md:block
                           hidden'>Chowdhury Enterprises</h3>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Originally code here */}
        {/* Small Screen UI */}
        <div className={`md:flex lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:items-center md:space-x-4">
            <li>
              <Link to='/service' className='block px-2 py-1 rounded-lg font-semibold text-lg bg-black text-white'>Book a Service</Link>
            </li>
            {/* Service Mobile Dropdown */} 
            {/* onClick={() => setShowServicesDropdown2(!showServicesDropdown2)} */}
            <li className="relative group" onClick={mobDropdown1}>
              <button className="font-semibold hover:bg-black hover:text-white px-3 py-2 rounded-md focus:outline-none">Services</button>
              {showServicesDropdown2 && (<ul className='absolute flex-1 top-full left-0 rounded-md overflow-hidden z-50 bg-white border-black border-2'>
                <li>
                  <Link to='/internet' className='md:whitespace-nowrap block px-4 py-2 hover:bg-black hover:text-white hover:font-semibold'>Internet Services</Link>
                </li>
                <hr />
                <li>
                  <Link to='/cctv' className='md:whitespace-nowrap block px-4 py-2 hover:bg-black hover:text-white hover:font-semibold'>Security Tech Services</Link>
                </li>
                <hr />
                <li>
                  <Link to='/networking' className='md:whitespace-nowrap block px-4 py-2 text-pretty hover:bg-black hover:text-white hover:font-semibold'>Home & Office Networking</Link>
                </li>
              </ul>
              )}
            </li>

            {/* Internet Plans Mobile Dropdown */}
            <li className="relative group" onClick={mobDropdown2}>
              <button className="font-semibold hover:bg-black hover:text-white px-3 py-2 rounded-md focus:outline-none">Internet Plans</button>
              {showPlansDropdown2 && (<ul className='absolute flex-1 top-full left-0 rounded-md overflow-hidden z-50 bg-white border-black border-2'>
                <li>
                  <Link to='/bsnl' className='block px-4 py-2 hover:bg-black hover:text-white hover:font-semibold'>BSNL</Link>
                </li>
                <hr />
                <li>
                  <Link to='/railwire' className='block px-4 py-2 hover:bg-black hover:text-white hover:font-semibold'>Railwire</Link>
                </li>
              </ul>
              )}
            </li>

            {/* Company Mobile Dropdown */}
            <li className="relative group" onClick={mobDropdown3}>
              <button className="font-semibold hover:bg-black hover:text-white px-3 py-2 rounded-md focus:outline-none">Company</button>
              {showCompanyDropdown2 && (<ul className='absolute flex-1 top-full left-0 rounded-md overflow-hidden z-50 bg-white border-black border-2'>
                <li>
                  <Link to='/about' className='md:whitespace-nowrap block px-4 py-2 hover:bg-black hover:text-white hover:font-semibold'>About Us</Link>
                </li>
                <hr />
                <li>
                  <Link to='/contact' className='md:whitespace-nowrap block px-4 py-2 hover:bg-black hover:text-white hover:font-semibold'>Contact Us</Link>
                </li>
                <hr />
                <Link to="/career" className="block px-4 py-2 hover:bg-black hover:text-white hover:font-semibold">
                  Careers
                </Link>
              </ul>
              )}
            </li>

          </ul>
        </div>

        {/* Large Screen UI */}
        <ul className='hidden lg:flex lg:space-x-4'>
          <li>
            <Link to='/service' className='block px-2 py-1 rounded-lg font-bold text-xl bg-black text-white'>Book a Service</Link>
          </li>
          {/* Services Dropdown */}
          <li className='relative group' onMouseEnter={() => setShowServicesDropdown(true)} onMouseLeave={() => setShowServicesDropdown(false)}>
            <NavLink to='' className='block px-2 py-1 rounded-lg font-semibold text-lg hover:bg-black hover:text-white'>Services</NavLink>
            {showServicesDropdown && (<ul className='absolute flex-1 top-full left-0 rounded-md overflow-hidden z-50 bg-white border-black border-2'>
              <li>
                <Link to='/internet' className='whitespace-nowrap block px-4 py-2 hover:bg-black hover:text-white hover:font-semibold'>Internet Services</Link>
              </li>
              <hr />
              <li>
                <Link to='/cctv' className='whitespace-nowrap block px-4 py-2 hover:bg-black hover:text-white hover:font-semibold'>Security Tech Services</Link>
              </li>
              <hr />
              <li>
                <Link to='/networking' className='whitespace-nowrap block px-4 py-2 text-pretty hover:bg-black hover:text-white hover:font-semibold'>Home & Office Networking</Link>
              </li>
            </ul>
            )}
          </li>

          {/* Internet Plans Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setShowPlansDropdown(true)}
            onMouseLeave={() => setShowPlansDropdown(false)}
          >
            <NavLink
              to=''
              className="block px-2 py-1 rounded-lg font-semibold text-lg hover:bg-black hover:text-white"
            >
              Internet Plans
            </NavLink>
            {showPlansDropdown && (
              <ul
                className="absolute flex-1 top-full left-0 rounded-md overflow-hidden z-50 bg-white border-black border-2"
              >
                <li>
                  <Link to="/bsnl" className="block px-4 py-2 hover:bg-black hover:text-white hover:font-semibold">
                    BSNL
                  </Link>
                </li>
                <hr />
                <li>
                  <Link to="/railwire" className="block px-4 py-2 hover:bg-black hover:text-white hover:font-semibold">
                    Railwire
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Company Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setShowCompanyDropdown(true)}
            onMouseLeave={() => setShowCompanyDropdown(false)}
          >
            <NavLink to='' className="block px-2 py-1 rounded-lg font-semibold text-lg hover:bg-black hover:text-white">
              Company
            </NavLink>
            {showCompanyDropdown && (
              <ul
                className="absolute flex-1 top-full left-0 rounded-md overflow-hidden z-50 bg-white border-black border-2"
              >
                <li>
                  <Link to="/about" className="whitespace-nowrap block px-4 py-2 hover:bg-black hover:text-white hover:font-semibold">
                    About Us
                  </Link>
                </li>
                <hr />
                <li>
                  <Link to="/contact" className="whitespace-nowrap block px-4 py-2 hover:bg-black hover:text-white hover:font-semibold">
                    Contact Us
                  </Link>
                </li>
                <hr />
                <li>
                  <Link to="/career" className="block px-4 py-2 hover:bg-black hover:text-white hover:font-semibold">
                    Careers
                  </Link>
                </li>
              </ul>
            )}
          </li>

        </ul>

      </nav>

    </>
  )
}

export default HeaderCE