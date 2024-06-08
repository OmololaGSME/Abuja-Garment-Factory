import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import Services from './pages/Services'
import AdminServices from './pages/Admin-Services'
import AdminLogin from './pages/Admin-Login'
import ForgotPassword from './pages/Forgot-Password'

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
        </BrowserRouter>
    )
}

export default Routing
