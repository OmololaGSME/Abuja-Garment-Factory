import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import Services from './pages/Services'
import AdminServices from './pages/Admin-Services'
import AdminLogin from './pages/Admin-Login'
import ForgotPassword from './pages/Forgot-Password'
import AboutPage from './pages/AboutPage'
import FaqsTest from './pages/FaqsTest'
import HomePage from './pages/HomePage'
import Products from './pages/Products/products'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Test />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route
                    path="/admin/services"
                    element={<AdminServices />}
                ></Route>
                <Route path="/admin/login" element={<AdminLogin />}></Route>
                <Route
                    path="/forgot-password"
                    element={<ForgotPassword />}
                ></Route>
            </Routes>
            <Routes>
                <Route path='/about' element={<AboutPage />}></Route>
            </Routes>
            <Routes>
                <Route path='/test' element={<FaqsTest />}></Route>
            </Routes>
            <Routes>
                <Route path='/home' element={<HomePage />}></Route>
            </Routes>
            <Routes>
                <Route path='/products' element={<Products />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
