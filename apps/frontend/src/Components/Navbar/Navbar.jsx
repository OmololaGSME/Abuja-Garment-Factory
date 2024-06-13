import React from 'react'
import logo from '../../assets/AGF LOGO 1.png'
import { MdOutlineMail } from 'react-icons/md'

import './Navbar.css'

const Navbar = () => {
  return (
      <div>
          <nav className="flex  ">
              <img src={logo} alt="nav-logo" className="mr-52" />

              <div className="flex justify-end p-1">
                  <div>
                      <p className=" flex  email text-end">
                          <MdOutlineMail className="mt-2" />
                          <a href="mailto:abujafashionstore@gmail.com">
                              abujafashionstore@gmail.com
                          </a>
                      </p>
                      <br />

                      <ul className=" nav-links flex justify-end p-2.5 ml-2 ">
                          <li><a href='/services'>Services</a></li>
                          <li><a href='/about'>About Us</a></li>
                          <li><a href='/products'>Products</a></li>
                      </ul>
                      <button>
                         Contact Us
                      </button>
                  </div>
              </div>
          </nav>
      </div>
  )
}

export default Navbar
