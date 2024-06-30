import React from 'react'
import logo from '../../assets/AGF LOGO 1 (1).png'
import insta from '../../assets/Clip path group.png'
import call from '../../assets/Group.png'
import mail from '../../assets/Vector.png'
import { IoLocationOutline } from 'react-icons/io5'
import './Footer.css'

const Footer = () => {
    return (
        <div className="wraper ">
            <div className=" contact flex  justify-center">
                <div className="flex mb-0 p-0 ">
                    <div className="logo">
                        <img src={logo} alt="Agf-logo" />
                    </div>
                    <div className="contact-details p-0  ">
                        <ul className=" lg:mt-20">
                            <li>
                                <img src={call} alt="call-logo" />
                                +2347037422636
                            </li>
                            <li>
                                <img
                                    src={insta}
                                    alt="insta-logo"
                                    className="text-xs"
                                />
                                abujagarmentfactory
                            </li>
                            <li>
                                <img
                                    src={mail}
                                    alt="mail-logo"
                                    className="text-xs"
                                />
                                abujafashionstore@gmail.com
                            </li>
                            <li className='lg:hidden'>
                                 <IoLocationOutline className='text-4xl mr-1' />{' '}
                                    G14:B2 Say Plaza, opposite Utako market,
                                    Utako

                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className=" hidden lg:font-bold lg:flex  ">
                         G14:B2 Say
                        Plaza, opposite Utako market, Utako
                    </div>
                    <div className="g-map">
                        <iframe

                        className='w-full '
                            width="520"
                            height="280"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            src="https://maps.google.com/maps?width=520&amp;height=600&amp;hl=en&amp;q=G14:B2%20Say%20Plaza,%20opposite%20Utako%20market,%20Utako+(Abuja%20Garment%20Factory)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        >
                            <a href="https://www.gps.ie/">
                                gps vehicle tracker
                            </a>
                        </iframe>
                    </div>
                </div>
            </div>

            <div className="footer lg:p-4 ">
                <ul className='flex justify-between text-center '>
                    <li>
                        <a href="#">Manage Cookies</a>
                    </li>
                    <li>
                        <a href="#">Developer's Note</a>
                    </li>
                    <li>
                        <a href="#">Accessibility</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
