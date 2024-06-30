import React from 'react'
import { useLocation } from 'react-router-dom'

const AuthForm = () => {
    const location = useLocation()
    const currentPath = location.pathname
    const isLoginPage = currentPath === '/admin/login'
    return (
        <form
            action=""
            className="w-[90%] sm:w-1/2 flex mx-auto justify-center gap-y-3 flex-col h-full"
        >
            <h1 className="mb-4 text-2xl md:text-4xl font-semibold w-3/4 mx-auto">
                {isLoginPage ? 'Login' : 'Forgot Password'}
            </h1>
            <input
                type="email"
                name="email"
                placeholder="Enter email address"
                className="border border-gray-500 bg-[#FAFBFB] rounded-md p-2 w-3/4 mx-auto"
            />
            <input
                type="password"
                name="password"
                id="password"
                placeholder={isLoginPage ? 'Enter password' : 'New password'}
                className="border border-gray-500 bg-[#FAFBFB] rounded-md p-2 w-3/4 mx-auto"
            />
            {!isLoginPage && (
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    className="border border-gray-500 bg-[#FAFBFB] rounded-md p-2 w-3/4 mx-auto"
                />
            )}
            {isLoginPage && (
                <a
                    href="/forgot-password"
                    className="w-max mr-[14%] ml-auto  text-sm"
                >
                    Forgot Password?
                </a>
            )}
            <button className="text-center my-3 w-3/4 p-2 bg-[#746858] active:bg-[#4D453B] hover:shadow-lg focus:bg-[#9B8A75] disabled:text-gray-500 disabled:bg-[#D3D2D2] hover:bg-[#C1AC93] mx-auto rounded-2xl text-white font-semibold">
                {isLoginPage ? 'Login' : 'Update Password'}
            </button>
            <p className="w-3/4 mx-auto text-[#032D23]">
                Don&apos;t have an account?{' '}
                <a
                    href="#"
                    className="text-[#746758] hover:text-[#C1AC93]  font-semibold"
                >
                    Contact Admin.
                </a>{' '}
            </p>
        </form>
    )
}

export default AuthForm
