import React from 'react'
import ServiceCard from '../components/Service-Card'
import Navbar from '../components/Navbar/Navbar'
import { ServicesPageData } from '../lib/servicesData'
const Services = () => {
    return (
      <>  <Navbar/>
        
        <div className="my-6">
            
            <h3 className=" text-2xl lg:text-3xl text-center font-bold mb-5 text-black mt-5">
                Our Services
            </h3>
            <div className="mt-6 w-[90%] flex flex-col gap-y-10 mx-auto">
                {ServicesPageData.map((product) => (
                    <ServiceCard
                        img={product.img}
                        title={product.title}
                        desc={product.desc}
                        key={product.id}
                        id={product.id}
                    />
                ))}
            </div>
        </div></>

    )
}

export default Services
