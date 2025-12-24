// import React from 'react'
import HeroCE from '../../components/isp/HeroCE'
import PartnersCE from '../../components/isp/PartnersCE'
import Hero2CE from '../../components/isp/Hero2CE'
import Hero3CE from '../../components/isp/Hero3CE'
import ClientCE from '../../components/isp/ClientCE'
import ActionCE from '../../components/isp/ActionCE'
import ChatCE from '../../components/isp/ChatCE'
import MapEmbedCE from '../../components/isp/MapEmbedCE'

function LandingCE() {
  return (
    <>
      <HeroCE />
      <PartnersCE />
      <Hero2CE />
      <Hero3CE />
      <ClientCE />
      <ActionCE />
      <div className='px-8'>
        <ChatCE />
      </div>
      <div className='px-2'>
        <MapEmbedCE />
      </div>
    </>
  )
}

export default LandingCE