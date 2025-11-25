import React from 'react'
import HeaderCE from './HeaderCE'
import FooterCE from './FooterCE'
import { Outlet, Link } from 'react-router'
import MyFooterCE from './MyFooterCE'
import { FaWhatsapp } from 'react-icons/fa'

function Layout() {
  return (
    <>
      <HeaderCE />
      <main>
        <Outlet />
      </main>
      <div className='fixed text-white text-5xl bottom-10 right-10 bg-lime-600 p-2 rounded-full '>
        <Link to='https://wa.me/+916206878303' target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </Link>
      </div>
      <FooterCE />
      <MyFooterCE />
    </>
  )
}

export default Layout