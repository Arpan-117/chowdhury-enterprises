// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router"
import './App.css'
import Layout from "./components/isp/Layout/Layout"
import LandingCE from "./pages/isp/LandingCE"
import AboutCE from "./pages/isp/AboutCE"
import InternetCE from "./pages/isp/InternetCE"
import SecurityCE from "./pages/isp/SecurityCE"
import NetworkingCE from "./pages/isp/NetworkingCE"
import BsnlCE from "./pages/isp/BsnlCE"
import RailwireCE from "./pages/isp/RailwireCE"
import PolicyCE from "./pages/isp/PolicyCE"
import CareerCE from "./pages/isp/CareerCE"
import ContactCE from "./pages/isp/ContactCE"
import ServiceCE from "./pages/isp/ServiceCE"
import PageNotFoundCE from "./pages/isp/PageNotFoundCE"
import ScrollToTopCE from "./components/isp/ScrollToTopCE"

function App() {

  return (
    <BrowserRouter>
      <ScrollToTopCE />
      <Routes>
      <Route element={<Layout />}>
        <Route index element={<LandingCE />} />
        <Route path="about" element={<AboutCE />} />
        <Route path="internet" element={<InternetCE />} />
        <Route path="cctv" element={<SecurityCE /> } />
        <Route path="networking" element={<NetworkingCE /> } />
        <Route path="bsnl" element={<BsnlCE /> } />
        <Route path="railwire" element={<RailwireCE /> } />
        <Route path="privacy-policy" element={<PolicyCE /> } />
        <Route path="career" element={<CareerCE /> } />
        <Route path="contact" element={<ContactCE /> } />
        <Route path="services" element={<ServiceCE /> } />
        <Route path="*" element={<PageNotFoundCE />} />
      </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
