// import React from 'react'
import Conn from '../../assets/Networking/conn.png'

function Equipments2CE() {
  return (
    <>

    {/* Large Screen UI */}
    <div className='lg:block md:hidden hidden lg:px-40 lg:py-10 lg:bg-black lg:text-white'>
        <img src={Conn} alt='networking image' className='lg:float-right lg:h-96 lg:pt-10' />
        <h3 className='lg:py-8 lg:font-bold lg:text-4xl lg:uppercase'>COMPUTER NETWORK HARDWARE AND SOFTWARE</h3>
        <p className='lg:text-2xl lg:tracking-wide'>Communication devices, such as network routers, access points, and network cables, physically connect and hold a network together. Network systems and various software applications generate network traffic and enable users to perform useful tasks.</p>
        <br/>
        <h3 className='lg:py-8 lg:font-bold lg:text-4xl lg:uppercase'>NETWORK DESIGN</h3>
        <p className='lg:text-2xl lg:tracking-wide'>Computer network administrators differ in their design approaches, primarily using either client/server or peer-to-peer (P2P) models. Client-server networks employ centralized server computers to store email, web pages, files, and software applications, which are accessed by client computers and other devices. In contrast, P2P networks have devices that typically support the same functions. Client-server networks are more prevalent in businesses, while peer-to-peer networks are more commonly found in homes.</p>
        <br />
        <h3 className='lg:py-8 lg:font-bold lg:text-4xl lg:uppercase'>BUSINESS COMPUTER NETWORKS</h3>
        <p className='lg:text-2xl lg:tracking-wide'>Small and home office (SOHO) environments use technology similar to that found in home networks. However, businesses often have additional communication, data storage, and security needs that require expanding their networks as they grow. Most ISPs provide versatile solutions that often eliminate the need for third-party equipment. Nevertheless, for industries requiring higher levels of encryption, a business-oriented router from third-party hardware providers is recommended.</p>
        <br />
        <p className='lg:text-2xl lg:tracking-wide'>While most home networks function as a single LAN, business networks typically comprise multiple LANs. Companies with buildings in various locations use wide-area networking to connect these branch offices, creating a cohesive network environment. Though some home networks also use voice over IP communication and network storage and backup technologies, these are more prevalent in business settings. Additionally, larger companies often maintain internal websites, known as intranets, to facilitate employee communication.</p>
    </div>

    {/* Tablet Screen UI */}
    <div className='md:block lg:hidden hidden md:px-24 md:py-10 md:bg-black md:text-white'>
        <h3 className='md:py-8 md:font-bold md:text-4xl md:text-center md:uppercase'>COMPUTER NETWORK HARDWARE AND SOFTWARE</h3>
        <img src={Conn} alt='networking image' className='md:size-64 md:mx-auto md:pt-10' />
        <br/>
        <p className='md:text-lg md:text-justify md:tracking-wide'>Communication devices, such as network routers, access points, and network cables, physically connect and hold a network together. Network systems and various software applications generate network traffic and enable users to perform useful tasks.</p>
        <br/>
        <h3 className='md:py-4 md:font-bold md:text-2xl md:uppercase'>NETWORK DESIGN</h3>
        <p className='md:text-lg md:text-justify md:tracking-wide'>Computer network administrators differ in their design approaches, primarily using either client/server or peer-to-peer (P2P) models. Client-server networks employ centralized server computers to store email, web pages, files, and software applications, which are accessed by client computers and other devices. In contrast, P2P networks have devices that typically support the same functions. Client-server networks are more prevalent in businesses, while peer-to-peer networks are more commonly found in homes.</p>
        <br />
        <h3 className='md:py-4 md:font-bold md:text-2xl md:uppercase'>BUSINESS COMPUTER NETWORKS</h3>
        <p className='md:text-lg md:text-justify md:tracking-wide'>Small and home office (SOHO) environments use technology similar to that found in home networks. However, businesses often have additional communication, data storage, and security needs that require expanding their networks as they grow. Most ISPs provide versatile solutions that often eliminate the need for third-party equipment. Nevertheless, for industries requiring higher levels of encryption, a business-oriented router from third-party hardware providers is recommended.</p>
        <br />
        <p className='md:text-lg md:text-justify md:tracking-wide'>While most home networks function as a single LAN, business networks typically comprise multiple LANs. Companies with buildings in various locations use wide-area networking to connect these branch offices, creating a cohesive network environment. Though some home networks also use voice over IP communication and network storage and backup technologies, these are more prevalent in business settings. Additionally, larger companies often maintain internal websites, known as intranets, to facilitate employee communication.</p>
    </div>

    {/* Mobile Screen UI */}
    <div className='md:hidden lg:hidden block px-5 py-10 rounded-md bg-black text-white'>
        <h3 className='py-4 font-bold text-3xl text-center uppercase'>COMPUTER NETWORK HARDWARE AND SOFTWARE</h3>
        <img src={Conn} alt='networking image' className='size-64 mx-auto pt-10' />
        <br/>
        <p className='text-base text-justify tracking-wide'>Communication devices, such as network routers, access points, and network cables, physically connect and hold a network together. Network systems and various software applications generate network traffic and enable users to perform useful tasks.</p>
        <br/>
        <h3 className='py-4 font-bold text-xl uppercase'>NETWORK DESIGN</h3>
        <p className='text-base text-justify tracking-wide'>Computer network administrators differ in their design approaches, primarily using either client/server or peer-to-peer (P2P) models. Client-server networks employ centralized server computers to store email, web pages, files, and software applications, which are accessed by client computers and other devices. In contrast, P2P networks have devices that typically support the same functions. Client-server networks are more prevalent in businesses, while peer-to-peer networks are more commonly found in homes.</p>
        <br />
        <h3 className='py-4 font-bold text-xl uppercase'>BUSINESS COMPUTER NETWORKS</h3>
        <p className='text-base text-justify tracking-wide'>Small and home office (SOHO) environments use technology similar to that found in home networks. However, businesses often have additional communication, data storage, and security needs that require expanding their networks as they grow. Most ISPs provide versatile solutions that often eliminate the need for third-party equipment. Nevertheless, for industries requiring higher levels of encryption, a business-oriented router from third-party hardware providers is recommended.</p>
        <br />
        <p className='text-base text-justify tracking-wide'>While most home networks function as a single LAN, business networks typically comprise multiple LANs. Companies with buildings in various locations use wide-area networking to connect these branch offices, creating a cohesive network environment. Though some home networks also use voice over IP communication and network storage and backup technologies, these are more prevalent in business settings. Additionally, larger companies often maintain internal websites, known as intranets, to facilitate employee communication.</p>
    </div>

    </>
  )
}

export default Equipments2CE