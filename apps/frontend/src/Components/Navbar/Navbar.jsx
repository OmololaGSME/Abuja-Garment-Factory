import React, { useState } from 'react'
import logo from '../../assets/AGF LOGO 1.png'
import { MdOutlineMail } from 'react-icons/md'
import { IoMdMenu } from 'react-icons/io'
import { IoIosCloseCircleOutline } from 'react-icons/io'

import './Navbar.css'

const Navbar = () => {
    const [toogleMenu, setToogleMenu] = useState(false)
    return (
        <nav className=" m-4">
            <div className="flex justify-between">
                <div className="nav-logo ">
                    <img src={logo} alt="nav-logo" className="w-20" />
                </div>

                <div className="">
                    <p className="   email flex text-black justify-end n">
                        <MdOutlineMail className="mt-1" />
                        abujafashionstore@gmail.com
                    </p>

                    <ul className=" hidden md:flex  justify-center text-2xl ">
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#about">About Us</a>
                        </li>
                        <li>
                            <a href="#products">Products</a>
                        </li>
                        <button class=" text-black border text-xl px-2 py rounded-full">
                            <a href="#contact">Contact Us</a>
                        </button>
                    </ul>
                </div>
            </div>
            <section>
                <div>
                    <nav className=" nav-small-screen lg:hidden md:hidden  bg-white  rounded fixed bottom-10 left-0 ">
                        <div>
                            <IoMdMenu
                                onClick={() => {
                                    setToogleMenu(true)
                                }}
                                className="text-2xl opacity-0"
                            />
                            <div className="flex justify-between">
                                Menu
                                <button class=" text-black border text-xl px-2 py rounded-full flex-end">
                                    <a href="#contact">Contact Us</a>
                                </button>
                            </div>
                        </div>
                        {toogleMenu && (
                            <div className="">
                                <div className="small-screen-nav-logo w-12">
                                    <img
                                        src={logo}
                                        alt="nav-logo"
                                        className="mr-52"
                                    />
                                </div>
                                <div>
                                    <ul className=" w-52 h-full  text-xl cursor-pointer p-0 m-0">
                                        <li>
                                            <a href="#services">Services</a>
                                        </li>
                                        <li>
                                            <a href="#about">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#products">Products</a>
                                        </li>
                                    </ul>


                                    <IoIosCloseCircleOutline
                                        className="absolute bottom-0 right-0"
                                        onClick={() => setToogleMenu(false)}
                                    />
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            </section>
        </nav>
    )

}

export default Navbar
