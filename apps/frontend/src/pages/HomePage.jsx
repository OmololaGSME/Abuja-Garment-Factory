import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import HomeSlider from '../components/HomeSlider/HomeSlider';
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials';
import FaqPage from '../components/FaqPage/FaqPage';
import Footer from '../components/Footer/Footer'




const HomePage = () => {
  return (
    <div>
        <Navbar />
        <HomeSlider />
        <Services />
        <Testimonials />
        <FaqPage />
        <Footer /> 
       
    </div>
  )
}

export default HomePage
