import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import HomePage from './pages/HomePage'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Test />}></Route>
            </Routes>
            <Routes>
                <Route path='/home' element={<HomePage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing