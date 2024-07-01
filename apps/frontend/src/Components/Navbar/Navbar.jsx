import React, { useState } from 'react'
import logo from '../../assets/AGF LOGO 1.png'
import { MdOutlineMail } from 'react-icons/md'
import { IoMdMenu } from 'react-icons/io'
import { IoIosCloseCircleOutline } from 'react-icons/io'

import './Navbar.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const showMenu = () =>{
        setToggleMenu(!toggleMenu);
    };

     const hideMenu = () =>{
        setToggleMenu(false);
    };

    return (
        <nav className=" container navbar fixed lg:relative top-0 z-10  bg-white  ">
            <div className="nav-logo  ">
                <img src={logo} alt="nav-logo" className="w-20" />
            </div>
            <div>
                <p className="mail">
                    {' '}
                    <MdOutlineMail className="mt-1" />
                    <a href="mailto:abujafashionstore@gmail.com">
                        {' '}
                        abujafashionstore@gmail.com
                    </a>
                </p>
                <ul
                    className=" nav-links"
                    id={
                        toggleMenu
                            ? 'mobile-nav-links'
                            : 'hide-mobile-nav-links'
                    }
                >
                    <li className="lg:hidden">
                        <img src={logo} alt="nav-logo" className="w-20" />
                    </li>
                    <li onClick={hideMenu}>
                        <a href="#services">Services</a>
                    </li>
                    <li onClick={hideMenu}>
                        <a href="#about">About Us</a>
                    </li>
                    <li onClick={hideMenu}>
                        <a href="#products">Products</a>
                    </li>
                    <li onClick={hideMenu}>
                        <button className=" text-black border text-xl px-2 py rounded-full hidden lg:block">
                            <a href="#contact">Contact Us</a>
                        </button>
                    </li>
                    <li className="lg:hidden" onClick={hideMenu}>
                        {' '}
                        <IoIosCloseCircleOutline />
                    </li>
                </ul>
                <div className="menu fixed bottom-0 left-0 rounded w-full  bg-white z-10">
                    <div onClick={showMenu}>
                        {toggleMenu ? (
                            <IoIosCloseCircleOutline />
                        ) : (
                            <IoMdMenu size={27} />
                        )}
                        <div className=" md:text-2xl float-left">Menu</div>
                    </div>

                    <div>
                        <button class=" text-black border text-xl px-5 py rounded-full mb-2">
                            <a href="#contact">Contact Us</a>
                        </button>
                    </div>
                </div>
            </div>
           
        </nav>
    )

}

export default Navbar
