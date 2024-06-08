import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import AboutPage from './pages/AboutPage'
import FaqsTest from './pages/FaqsTest'
import HomePage from './pages/HomePage'
import Products from './pages/Products/products'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Test />}></Route>
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