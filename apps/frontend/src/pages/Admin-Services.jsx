import React, { useState } from 'react'
import servicesData from '../lib/servicesData'
import ServiceCard from '../components/Service-Card'
import AdminServicePopUp from '../Components/Admin-Service-PopUp'
const AdminServices = () => {
    const [popUp, setPopUp] = useState({
        show: false,
        data: {},
    })

    return (
        // header
        <div className="my-6">
            <h1 className="font-bold sm:font-medium text-2xl leading-8 text-center">
                Our Services
            </h1>

            <section className="mt-6 w-[90%] flex flex-col  gap-y-10 mx-auto">
                {servicesData.map((product) => (
                    <ServiceCard
                        img={product.img}
                        popUp={popUp}
                        setPopUp={setPopUp}
                        title={product.title}
                        size={'500 X 280 Pixels'}
                        desc={product.desc}
                        key={product.id}
                        id={product.id}
                    />
                ))}
            </section>
            {popUp.show && (
                <AdminServicePopUp
                    popUp={popUp}
                    setPopUp={setPopUp}
                    data={popUp.data}
                />
            )}
        </div>
        // testimonails
        // footer
    )
}

export default AdminServices
