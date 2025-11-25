import React from 'react'
import { Link } from 'react-router'
import Integrated from '../../assets/About/integrated.png'
import Customise from '../../assets/About/customise.png'
import Technology from '../../assets/About/technology.png'
import Team from '../../assets/About/team.png'
import Satisfaction from '../../assets/About/satisfaction.png'

function AboutCE() {
  return (
    <>

      {/* Large Screen UI */}
      <div className='lg:block md:hidden hidden'>

        <div className='lg:mx-auto lg:px-40 lg:py-4 lg:w-full lg:flex lg:justify-center lg:items-center lg:min-h-[80vh] lg:bg-white lg:text-black'>
          <div>
            <h2 className='lg:font-bold lg:text-center lg:text-6xl'>About Us</h2>
            <p className='lg:px-8 lg:py-8 lg:w-2/3 lg:mx-auto lg:text-lg lg:text-center lg:tracking-wide'>Welcome to Chowdhury Enterprises, where we specialize in providing integrated solutions for Internet, Networking, and CCTV services. Our commitment to technological excellence, reliability, and customer satisfaction allows us to empower businesses and individuals with seamless connectivity, robust networking infrastructure, and advanced security solutions.
            </p>
          </div>
        </div>

        <div className='lg:mx-auto lg:px-40 lg:py-8 lg:w-full lg:flex lg:justify-center lg:items-center lg:min-[95vh] lg:bg-black lg:text-white'>
          <div>
            <h3 className='lg:py-8 lg:font-bold lg:text-center lg:text-4xl'>Our Vision</h3>
            <p className='lg:px-8 lg:py-8 lg:w-2/3 lg:mx-auto lg:text-lg lg:text-center lg:tracking-wide'>
              At Chowdhury Enterprises, we envision a safer and more connected world achieved through cutting-edge technology and innovative solutions. As a preferred partner for businesses and individuals, we aim to deliver reliable Internet, Networking, and CCTV services that evolve with our clients' needs.
            </p>

            <hr className='lg:text-white lg:w-2/3 lg:mx-auto' />

            <h3 className='lg:py-8 lg:font-bold lg:text-center lg:text-4xl'>Our Mission</h3>
            <p className='lg:px-8 lg:py-8 lg:w-2/3 lg:mx-auto lg:text-lg lg:text-center lg:tracking-wide'>
              Our mission is to deliver exceptional value through comprehensive Internet, Networking, and CCTV solutions. We prioritize providing reliable connectivity, secure networking infrastructure, and advanced surveillance systems to enhance safety, productivity, and peace of mind.
            </p>
          </div>
        </div>

        <div className='lg:mx-auto lg:px-40 lg:py-8 lg:w-full lg:flex lg:justify-center lg:items-center lg:min-h-[85vh] lg:bg-white lg:text-black'>
          <div>
            <h3 className='lg:py-8 lg:font-bold lg:text-center lg:text-4xl'>Why Choose Us?</h3>
            <div className='lg:flex lg:flex-row lg:text-center'>
              <div className='lg:basis-1/5'>
                <img src={Integrated} alt='icon' className='lg:mx-auto lg:size-16' />
                <br />
                <h4 className='lg:font-semibold lg:text-xl lg:tracking-wide'>Integrated Solutions</h4>
                <p className='lg:px-8 lg:pb-8 lg:pt-2 lg:tracking-wide'>
                  Our comprehensive suite of services includes high-speed Internet, robust networking solutions, and advanced CCTV systems, ensuring seamless connectivity and comprehensive security.
                </p>
              </div>
              <div className='lg:basis-1/5'>
                <img src={Customise} alt='icon' className='lg:mx-auto lg:size-16' />
                <br />
                <h4 className='lg:font-semibold lg:text-xl lg:tracking-wide'>Customized Solutions</h4>
                <p className='lg:px-8 lg:pb-8 lg:pt-2 lg:tracking-wide'>
                  Tailoring our services to fit unique client requirements, we offer high-speed Internet for offices, secure networking for businesses, and CCTV cameras for surveillance.
                </p>
              </div>
              <div className='lg:basis-1/5'>
                <img src={Technology} alt='icon' className='lg:mx-auto lg:size-16' />
                <br />
                <h4 className='lg:font-semibold lg:text-xl lg:tracking-wide'>Technological Excellence</h4>
                <p className='lg:px-8 lg:pb-8 lg:pt-2 lg:tracking-wide'>
                  Leveraging the latest advancements, from fiber-optic Internet to cloud-based networking and AI-powered surveillance, we bring cutting-edge solutions to our clients.
                </p>
              </div>
              <div className='lg:basis-1/5'>
                <img src={Team} alt='icon' className='lg:mx-auto lg:size-16' />
                <br />
                <h4 className='lg:font-semibold lg:text-xl lg:tracking-wide'>Expert Team</h4>
                <p className='lg:px-8 lg:pb-8 lg:pt-2 lg:tracking-wide'>
                  Our team of experienced professionals, including network engineers, cybersecurity specialists, and CCTV technicians, delivers top-notch services and support.
                </p>
              </div>
              <div className='lg:basis-1/5'>
                <img src={Satisfaction} alt='icon' className='lg:mx-auto lg:size-16' />
                <br />
                <h4 className='lg:font-semibold lg:text-xl lg:tracking-wide'>Customer Satisfaction</h4>
                <p className='lg:px-8 lg:pb-8 lg:pt-2 lg:tracking-wide'>
                  Prioritizing customer satisfaction, our dedicated support team is available round-the-clock to address inquiries, provide technical assistance, and ensure optimal service usage.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='lg:mx-auto lg:px-40 lg:py-8 lg:w-full lg:flex lg:justify-center lg:items-center lg:min-h-[90vh] lg:bg-black lg:text-white'>
          <div>
            <h3 className='lg:py-8 lg:font-bold lg:text-center lg:text-4xl'>Our Services</h3>
            <p className='lg:px-8 lg:py-4 lg:w-2/3 lg:mx-auto lg:text-lg lg:text-center lg:tracking-wide'>
              Internet Services: High-speed broadband, fiber-optic Internet, wireless connectivity, and customized solutions for businesses and homes.
            </p>
            <p className='lg:px-8 lg:py-4 lg:w-2/3 lg:mx-auto lg:text-lg lg:text-center lg:tracking-wide'>
              Networking Solutions: Network design, hardware/software solutions, cloud-based networking, and managed services.
            </p>
            <p className='lg:px-8 lg:py-8 lg:text-lg lg:text-center lg:tracking-wide'>
              CCTV Solutions: Installation, system design, remote monitoring, video analytics, and integration with existing security systems.
            </p>
          </div>
        </div>

        <div className='lg:mx-auto lg:px-40 lg:py-8 lg:w-full lg:flex lg:justify-center lg:items-center lg:min-h-[75vh] lg:bg-gray-300 lg:text-black'>
          <div className='lg:mx-auto'>
            <h3 className='lg:py-8 lg:font-bold lg:text-center lg:text-4xl'>Get In Touch</h3>
            <p className='lg:px-8 lg:py-4 lg:w-2/3 lg:mx-auto lg:text-lg lg:text-center lg:tracking-wide'>
              Ready for reliable connectivity, robust networking, and advanced surveillance? Contact Chowdhury Enterprises today to explore our services, request a consultation, or receive a customized quote. We're excited to partner with you for your Internet, Networking, and CCTV needs.
            </p>
            <br/>
            <Link to='/new-connection2' className='lg:block lg:mx-auto'>
              <button className='lg:block lg:mx-auto lg:rounded-md lg:bg-black lg:text-white lg:font-semibold lg:px-4 lg:py-2 lg:transition lg:duration-300 lg:ease-in-out lg:border-2 lg:border-r-2 lg:hover:bg-white lg:hover:text-black'>Book a new internet connection</button>
            </Link>
          </div>
        </div>

      </div>

      {/* Tablet Screen UI */}
      <div className='md:block lg:hidden hidden'>

        <div className='md:mx-auto md:px-24 md:py-4 md:w-full md:flex md:justify-center md:items-center md:min-h-[50vh] md:bg-white md:text-black'>
          <div>
            <h2 className='md:font-bold md:text-center md:text-4xl'>About Us</h2>
            <p className='md:px-8 md:py-8 md:w-full md:mx-auto md:text-base md:text-center md:tracking-wide'>Welcome to Chowdhury Enterprises, where we specialize in providing integrated solutions for Internet, Networking, and CCTV services. Our commitment to technological excellence, reliability, and customer satisfaction allows us to empower businesses and individuals with seamless connectivity, robust networking infrastructure, and advanced security solutions.
            </p>
          </div>
        </div>

        <div className='md:mx-auto md:px-24 md:py-8 md:w-full md:flex md:justify-center md:items-center md:min-[65vh] md:bg-black md:text-white'>
          <div>
            <h3 className='md:py-8 md:font-bold md:text-center md:text-4xl'>Our Vision</h3>
            <p className='md:px-8 md:py-8 md:w-full md:mx-auto md:text-base md:text-center md:tracking-wide'>
              At Chowdhury Enterprises, we envision a safer and more connected world achieved through cutting-edge technology and innovative solutions. As a preferred partner for businesses and individuals, we aim to deliver reliable Internet, Networking, and CCTV services that evolve with our clients' needs.
            </p>

            <hr className='md:text-white md:w-full md:mx-auto' />

            <h3 className='md:py-8 md:font-bold md:text-center md:text-4xl'>Our Mission</h3>
            <p className='md:px-8 md:py-8 md:w-full md:mx-auto md:text-base md:text-center md:tracking-wide'>
              Our mission is to deliver exceptional value through comprehensive Internet, Networking, and CCTV solutions. We prioritize providing reliable connectivity, secure networking infrastructure, and advanced surveillance systems to enhance safety, productivity, and peace of mind.
            </p>
          </div>
        </div>

        <div className='md:mx-auto md:px-24 md:py-8 md:w-full md:flex md:justify-center md:items-center md:min-h-[50vh] md:bg-white md:text-black'>
          <div className='md:mx-auto'>
            <h3 className='md:py-8 md:font-bold md:text-center md:text-4xl'>Why Choose Us?</h3>
            <div className='md:flex md:flex-row md:gap-16 md:text-center '>
              <div className='md:basis-1/3'>
                <img src={Integrated} alt='icon' className='md:mx-auto md:size-16' />
                <br />
                <h4 className='md:font-semibold md:text-lg md:tracking-wide'>Integrated</h4>
                <h4 className='md:font-semibold md:text-lg md:tracking-wide'>Solutions</h4>
                {/* <p className='px-8 pb-8 pt-2 tracking-wide'>
                  Our comprehensive suite of services includes high-speed Internet, robust networking solutions, and advanced CCTV systems, ensuring seamless connectivity and comprehensive security.
                </p> */}
              </div>
              <div className='md:basis-1/3'>
                <img src={Customise} alt='icon' className='md:mx-auto md:size-16' />
                <br />
                <h4 className='md:font-semibold md:text-lg md:tracking-wide'>Customized</h4>
                <h4 className='md:font-semibold md:text-lg md:tracking-wide'>Solutions</h4>
                {/* <p className='px-8 pb-8 pt-2 tracking-wide'>
                  Tailoring our services to fit unique client requirements, we offer high-speed Internet for offices, secure networking for businesses, and CCTV cameras for surveillance.
                </p> */}
              </div>
              <div className='md:basis-1/3'>
                <img src={Technology} alt='icon' className='md:mx-auto md:size-16' />
                <br />
                <h4 className='md:font-semibold md:text-lg md:tracking-wide'>Technological</h4>
                <h4 className='md:font-semibold md:text-lg md:tracking-wide'>Excellence</h4>
                {/* <p className='px-8 pb-8 pt-2 tracking-wide'>
                  Leveraging the latest advancements, from fiber-optic Internet to cloud-based networking and AI-powered surveillance, we bring cutting-edge solutions to our clients.
                </p> */}
              </div>
              </div>
              <br/><br/>
              <div className='md:flex md:flex-row md:text-center md:gap-16 md:w-2/3 md:mx-auto'>
                <div className='md:basis-1/2 '>
                  <img src={Team} alt='icon' className='md:mx-auto md:size-16' />
                  <br />
                  <h4 className='md:font-semibold md:text-lg md:tracking-wide'>Expert</h4>
                  <h4 className='md:font-semibold md:text-lg md:tracking-wide'>Team</h4>
                  {/* <p className='px-8 pb-8 pt-2 tracking-wide'>
                    Our team of experienced professionals, including network engineers, cybersecurity specialists, and CCTV technicians, delivers top-notch services and support.
                  </p> */}
                </div>
                <div className='md:basis-1/2 md:w-1/3'>
                  <img src={Satisfaction} alt='icon' className='md:mx-auto md:size-16' />
                  <br />
                  <h4 className='md:font-semibold md:text-lg md:tracking-wide'>Customer</h4>
                  <h4 className='md:font-semibold md:text-lg md:tracking-wide'>Satisfaction</h4>
                  {/* <p className='px-8 pb-8 pt-2 tracking-wide'>
                    Prioritizing customer satisfaction, our dedicated support team is available round-the-clock to address inquiries, provide technical assistance, and ensure optimal service usage.
                  </p> */}
                </div>
              
            </div>
          </div>
        </div>

        <div className='md:mx-auto md:px-24 md:py-8 md:w-full md:flex md:justify-center md:items-center md:min-h-[50vh] md:bg-black md:text-white'>
          <div>
            <h3 className='md:py-8 md:font-bold md:text-center md:text-4xl'>Our Services</h3>
            <p className='md:px-8 md:py-4 md:w-full md:mx-auto md:text-base md:text-center md:tracking-wide'>
              Internet Services: High-speed broadband, fiber-optic Internet, wireless connectivity, and customized solutions for businesses and homes.
            </p>
            <p className='md:px-8 md:py-4 md:w-full md:mx-auto md:text-base md:text-center md:tracking-wide'>
              Networking Solutions: Network design, hardware/software solutions, cloud-based networking, and managed services.
            </p>
            <p className='md:px-8 md:py-8 md:w-full md:text-base md:text-center md:tracking-wide'>
              CCTV Solutions: Installation, system design, remote monitoring, video analytics, and integration with existing security systems.
            </p>
          </div>
        </div>

        <div className='md:mx-auto md:px-24 md:py-8 md:w-full md:flex md:justify-center md:items-center md:min-h-[50vh] md:bg-gray-300 md:text-black'>
          <div>
            <h3 className='md:py-8 md:font-bold md:text-center md:text-4xl'>Get In Touch</h3>
            <p className='md:px-8 md:py-4 md:w-full md:mx-auto md:text-base md:text-center md:tracking-wide'>
              Ready for reliable connectivity, robust networking, and advanced surveillance? Contact Chowdhury Enterprises today to explore our services, request a consultation, or receive a customized quote. We're excited to partner with you for your Internet, Networking, and CCTV needs.
            </p>
            <br/>
            <div className='md:mx-auto'>
            <Link to='/new-connection2' className='md:mx-auto'>
              <button className='md:flex-1 md:mx-auto md:rounded-md md:bg-black md:text-white md:font-semibold md:px-4 md:py-2 md:transition md:duration-300 md:ease-in-out md:border-2 md:border-r-2 md:hover:bg-white md:hover:text-black'>Book a new internet connection</button>
            </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Screen UI */}
      <div className='md:hidden lg:hidden block'>

        <div className='mx-auto px-4 py-4 w-full flex justify-center items-center min-h-[90vh] bg-white text-black'>
          <div>
            <h2 className='font-bold text-center text-5xl'>About Us</h2>
            <p className='px-4 py-8 w-full mx-auto text-base text-center tracking-wide'>Welcome to Chowdhury Enterprises, where we specialize in providing integrated solutions for Internet, Networking, and CCTV services. Our commitment to technological excellence, reliability, and customer satisfaction allows us to empower businesses and individuals with seamless connectivity, robust networking infrastructure, and advanced security solutions.
            </p>
          </div>
        </div>

        <div className='mx-auto px-4 py-8 w-full flex justify-center items-center min-h-[90vh] rounded-md bg-black text-white'>
          <div>
            <h3 className='py-8 font-bold text-center text-4xl'>Our Vision</h3>
            <p className='px-8 pt-4 pb-8 w-full mx-auto text-base text-center tracking-wide'>
              At Chowdhury Enterprises, we envision a safer and more connected world achieved through cutting-edge technology and innovative solutions. As a preferred partner for businesses and individuals, we aim to deliver reliable Internet, Networking, and CCTV services that evolve with our clients' needs.
            </p>

            <hr className='text-white w-full mx-auto' />

            <h3 className='pb-4 pt-10 font-bold text-center text-4xl'>Our Mission</h3>
            <p className='px-8 py-8 w-full mx-auto text-base text-center tracking-wide'>
              Our mission is to deliver exceptional value through comprehensive Internet, Networking, and CCTV solutions. We prioritize providing reliable connectivity, secure networking infrastructure, and advanced surveillance systems to enhance safety, productivity, and peace of mind.
            </p>
          </div>
        </div>

        <div className='mx-auto px-4 py-8 w-full flex justify-center items-center min-h-[50vh] bg-white text-black'>
          <div className='mx-auto'>
            <h3 className='py-8 font-bold text-center text-4xl'>Why Choose Us?</h3>
            <div className='flex flex-row gap-4 text-center pt-4'>
              <div className='basis-1/3'>
                <img src={Integrated} alt='icon' className='mx-auto size-16' />
                <br />
                <h4 className='font-semibold text-sm tracking-wide'>Integrated</h4>
                <h4 className='font-semibold text-sm tracking-wide'>Solutions</h4>
                {/* <p className='px-8 pb-8 pt-2 tracking-wide'>
                  Our comprehensive suite of services includes high-speed Internet, robust networking solutions, and advanced CCTV systems, ensuring seamless connectivity and comprehensive security.
                </p> */}
              </div>
              <div className='basis-1/3'>
                <img src={Customise} alt='icon' className='mx-auto size-16' />
                <br />
                <h4 className='font-semibold text-sm tracking-wide'>Customized</h4>
                <h4 className='font-semibold text-sm tracking-wide'>Solutions</h4>
                {/* <p className='px-8 pb-8 pt-2 tracking-wide'>
                  Tailoring our services to fit unique client requirements, we offer high-speed Internet for offices, secure networking for businesses, and CCTV cameras for surveillance.
                </p> */}
              </div>
              <div className='basis-1/3'>
                <img src={Technology} alt='icon' className='mx-auto size-16' />
                <br />
                <h4 className='font-semibold text-sm tracking-wide'>Technological</h4>
                <h4 className='font-semibold text-sm tracking-wide'>Excellence</h4>
                {/* <p className='px-8 pb-8 pt-2 tracking-wide'>
                  Leveraging the latest advancements, from fiber-optic Internet to cloud-based networking and AI-powered surveillance, we bring cutting-edge solutions to our clients.
                </p> */}
              </div>
              </div>
              <br/><br/>
              <div className='flex flex-row text-center gap-4 w-2/3 mx-auto'>
                <div className='basis-1/2 '>
                  <img src={Team} alt='icon' className='mx-auto size-16' />
                  <br />
                  <h4 className='font-semibold text-sm tracking-wide'>Expert</h4>
                  <h4 className='font-semibold text-sm tracking-wide'>Team</h4>
                  {/* <p className='px-8 pb-8 pt-2 tracking-wide'>
                    Our team of experienced professionals, including network engineers, cybersecurity specialists, and CCTV technicians, delivers top-notch services and support.
                  </p> */}
                </div>
                <div className='basis-1/2 w-1/3'>
                  <img src={Satisfaction} alt='icon' className='mx-auto size-16' />
                  <br />
                  <h4 className='font-semibold text-sm tracking-wide'>Customer</h4>
                  <h4 className='font-semibold text-sm tracking-wide'>Satisfaction</h4>
                  {/* <p className='px-8 pb-8 pt-2 tracking-wide'>
                    Prioritizing customer satisfaction, our dedicated support team is available round-the-clock to address inquiries, provide technical assistance, and ensure optimal service usage.
                  </p> */}
                </div>
              
            </div>
          </div>
        </div>

        <div className='mx-auto px-4 py-8 w-full flex justify-center items-center min-h-[70vh] rounded-md bg-black text-white'>
          <div>
            <h3 className='py-8 font-bold text-center text-4xl'>Our Services</h3>
            <p className='px-8 py-4 w-full mx-auto text-base text-center tracking-wide'>
              Internet Services: High-speed broadband, fiber-optic Internet, wireless connectivity, and customized solutions for businesses and homes.
            </p>
            <p className='px-8 py-4 w-full mx-auto text-base text-center tracking-wide'>
              Networking Solutions: Network design, hardware/software solutions, cloud-based networking, and managed services.
            </p>
            <p className='px-8 py-8 w-full text-base text-center tracking-wide'>
              CCTV Solutions: Installation, system design, remote monitoring, video analytics, and integration with existing security systems.
            </p>
          </div>
        </div>

        <div className='mx-auto px-4 py-8 w-full flex justify-center items-center min-h-[60vh] bg-gray-300 text-black'>
          <div>
            <h3 className='py-8 font-bold text-center text-4xl'>Get In Touch</h3>
            <p className='px-4 py-4 w-full mx-auto text-base text-center tracking-wide'>
              Ready for reliable connectivity, robust networking, and advanced surveillance? Contact Chowdhury Enterprises today to explore our services, request a consultation, or receive a customized quote. We're excited to partner with you for your Internet, Networking, and CCTV needs.
            </p>
            <br/>
            <div className='mx-auto'>
            <Link to='/service' className='mx-auto'>
              <button className='w-full mx-auto rounded-md bg-black text-white font-semibold px-4 py-2 transition duration-300 ease-in-out border-2 border-r-2 hover:bg-white hover:text-black'>Book a service</button>
            </Link>
            </div>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default AboutCE