import React from 'react'
import logo from '../../assets/AGF LOGO 1.png'
import { MdOutlineMail } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'

const AdminNavbar = () => {
  return (
      <div>
          <div className="flex justify-between items-center mb-5 mt-5">
              <div className="flex pr-5">
                  <BiLogOut className="mt-2 text-2xl ml-96 " />
                  <p className="text-black ">Log Out</p>
              </div>

              <p className="   email flex text-black justify-end mr-8">
                  <MdOutlineMail className="mt-1" />
                  abujafashionstore@gmail.com
              </p>
          </div>
          <nav className=" m-4">
              <div className="flex justify-between">
                  <div className="nav-logo  ">
                      <img
                          src={logo}
                          alt="nav-logo"
                          className="relative top-2 left-2"
                      />
                  </div>

                  <div className="">
                      <ul className=" flex text-2xl p-5 m-8 ">
                          <li >
                              <a href="#images">Image Directory</a>
                          </li>

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
          </nav>
      </div>
  )
}

export default AdminNavbar
