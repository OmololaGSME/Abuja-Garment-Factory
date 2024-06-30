import React from 'react'
import pattern from '../../assets/pattern.png'
import bulk from '../../assets/bulk.png'
import label from '../../assets/private-label.png'


const Services = () => {
    return (
        <div className="services m-0 lg:ml-14 lg:mr-14 md:ml-5">
            <h3 className=" text-2xl lg:text-3xl text-center font-bold mb-5 text-black mt-5">
                Our Services
            </h3>
            <div className="container flex lg:ml-2 ">
                <img src={pattern} alt="pattern" className="m-0 w-1/2 p-0" />

                <div className="text-left lg:mt-20 ml-2">
                    <h3 className=" heading md:text-2xl lg:text-3xl ">
                        Pattern Making
                    </h3>
                    <p className="text-black m-0   md:text-2xl flex">
                        We carry out the process of creating a blueprint of your
                        garment using the pattern as a template to cut out
                        fabric that matches the required specifications to sew a
                        garment.
                    </p>
                </div>
            </div>
            <div className="flex justify-between m-5 text-pink-900 font-bold">
                <a href="">500 x 280 pixels</a>
                <a href="/image-directory" className="mr-56">
                    Change Image
                </a>
                <a href="/image-directory">Edit Content</a>
            </div>
            <div className="container flex lg:ml-2">
                <div className="text-right lg:mt-20 mr-2">
                    <h3 className=" heading md:text-2xl lg:text-3xl">
                        Private label
                    </h3>
                    <p className="  md:text-2xl text-black">
                        We understand the needs of retailers that works with us
                        to design and produce their line of clothing. This
                        allows you to control the quality of the products, the
                        design process, and the branding.
                    </p>
                </div>

                <img src={label} alt="pattern" className="w-1/2" />
            </div>
            <div className="flex  m-5 text-pink-900 font-bold justify-between ">
                <a href="/image-directory"  className='ml-96'>Edit Content</a>
                <a href="" className='mr-32'>500 x 280 pixels</a>
                <a href="/image-directory">Change Image</a>
            </div>
            <div className="container flex lg:ml-2">
                <img src={bulk} alt="pattern" className="m-0 w-1/2" />
                <div className="text-left lg:mt-20 ml-2">
                    <h3 className=" heading text-base md:text-2xl lg:text-3xl">
                        Bulk Production
                    </h3>
                    <p className="  md:text-2xl  text-black ">
                        We are involved in the production of a large number of
                        garments of the same design and style to meet the demand
                        of our client. Our MOQ is usually 3, however we are
                        willing to try out a test design before proceeding to
                        mass design
                    </p>
                </div>
            </div>
            <div className="flex justify-between m-5 text-pink-900 font-bold">
                <a href="">500 x 280 pixels</a>
                <a href="/image-directory" className="mr-56">
                    Change Image
                </a>
                <a href="/image-directory">Edit Content</a>
            </div>
        </div>
    )
}

export default Services
