import React from 'react';
import './Services.css';
import ServiceCard from '../Service-Card';
import { homeServicesData } from '../../lib/servicesData';

const Services = () => {
    return (
        <div className="services m-0 lg:ml-14 lg:mr-14 md:ml-5">
            <h3 className=" text-2xl lg:text-3xl text-center font-bold mb-5 text-black mt-5">
                Our Services
            </h3>
            <div className="mt-6 w-[90%] flex flex-col gap-y-10 mx-auto">
                {homeServicesData.map((product) => (
                    <ServiceCard
                        img={product.img}
                        title={product.title}
                        desc={product.desc}
                        key={product.id}
                        id={product.id}
                    />
                ))}
            </div>{' '}
        </div>
    );
};

export default Services;
