import React from 'react'
import servicesData from '../lib/servicesData'

import ServiceCard from '../components/Service-Card'
const Services = () => {
    return (
        // header
        // send us a mail
        <div className="my-6">
            <h1 className="font-bold sm:font-medium text-2xl leading-8 text-center">
                Our Services
            </h1>

            <section className="mt-6 w-[90%] flex flex-col gap-y-10 mx-auto">
                {servicesData.map((product) => (
                    <ServiceCard
                        img={product.img}
                        title={product.title}
                        desc={product.desc}
                        key={product.id}
                        id={product.id}
                    />
                ))}
            </section>
        </div>
        // testimonails
        // footer
    )
}

export default Services
