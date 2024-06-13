import React from 'react'
import logo from '../assets/auth/logo.png'
import banner from '../assets/auth/auth-banner.png'
import AuthForm from '../Components/Auth-Form'
const ForgotPassword = () => {
    return (
        <div>
            <img
                src={logo}
                alt="website logo"
                className="absolute sm-land:hidden  left-14 w-20 sm:w-28 top-5"
            />
            <div className="flex w-full h-screen">
                <AuthForm />
                <img
                    src={banner}
                    className="w-1/2 hidden sm:block object-cover"
                    alt=""
                />
            </div>
        </div>
    )
}

export default ForgotPassword
