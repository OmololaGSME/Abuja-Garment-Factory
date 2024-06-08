import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import HomeSlider from '../Components/HomeSlider/HomeSlider';
import Services from '../Components/Services/Services'
import Testimonials from '../Components/Testimonials/Testimonials';
import FaqPage from '../Components/FaqPage/FaqPage';
import Footer from '../Components/Footer/Footer'




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
