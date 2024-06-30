import React from 'react'
import AdminNavbar from '../Container/AdminNavbar/AdminNavbar'
import AdminServices from '../Container/AdminServices/AdminServices'
import HomeSlider from '../components/HomeSlider/HomeSlider'
import Testimonials from '../components/Testimonials/Testimonials'
import FaqPage from '../components/FaqPage/FaqPage'
import Footer from '../components/Footer/Footer'

const AdminPage = () => {
    return (
        <div>
            <AdminNavbar />
            <HomeSlider />
            <AdminServices />
            <Testimonials />
            <FaqPage />
            <Footer />
        </div>
    )
}

export default AdminPage
