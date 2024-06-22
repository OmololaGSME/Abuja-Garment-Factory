import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import ImageSavedPage from './pages/ImageSavedPage'
import ProductsUploadPage from './pages/ProductsUploadPage'


const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Test />}></Route>
            </Routes>
            <Routes>
                <Route path="/home" element={<HomePage />}></Route>
            </Routes>
            <Routes>
                <Route path="/admin" element={<AdminPage />}></Route>
            </Routes>
            <Routes>
                <Route path="/image" element={<ImageSavedPage />}></Route>
            </Routes>
            <Routes>
                <Route path="/upload" element={<ProductsUploadPage />}></Route>
            </Routes>
           
            
        </BrowserRouter>
    )
}

export default Routing