import React from 'react'
import { useLocation } from 'react-router-dom'

const serviceCard = ({
    img,
    setPopUp,
    popUp,
    title,
    id,
    desc,
    size,
}) => {
    const editContent = () => {
        setPopUp({ ...popUp, show: true, data: { title, desc } })
    }

const location = useLocation()
    const currentPath = location.pathname
    const isAdmin = currentPath === '/admin/services'
    return (
        <div
            key={id}
            className={`flex mx-auto w-full md:w-3/4   gap-x-3  ${id === 2 ? 'flex-row-reverse' : 'flex-row'}`}
        >
            <div className="w-1/2  h-auto ">
                <div
                    className={`w-full h-[80%] sm:h-[90%] rounded-2xl sm:rounded-lg py-3  sm:py-9 ${id === 2 ? 'sm:pr-9 pl-0 pr-3' : 'pr-0 sm:pl-9 pl-3  '}  bg-[#C19390]`}
                >
                    <img
                        src={img}
                        alt={title}
                        className=" w-full h-full object-cover rounded-2xl  sm:rounded-none"
                    />
                </div>
                {isAdmin && (
                    <div className="flex w-full sm:mt-3 flex-col sm:flex-row mt-2 justify-between">
                        <p className="text-sm font-normal">{size}</p>
                        <button className="text-sm w-max font-bold">
                            Change Image
                        </button>
                    </div>
                )}
            </div>
            <div
                className={`h-auto w-1/2 flex flex-col gap-y-5 sm:gap-y-20  ${isAdmin ? 'justify-end' : 'justify-center'} `}
            >
                <div
                    className={`${id === 2 ? 'text-right' : ''} w-full ${isAdmin && 'sm:mt-10'}`}
                >
                    <h3 className="font-semibold text-[#512F2D] text-base sm:text-xl ">
                        {title}
                    </h3>
                    <p className="text-sm sm:text-base">{desc}</p>
                </div>
                {isAdmin && (
                    <button
                        onClick={editContent}
                        className="ml-auto  text-[#740202] font-bold text-sm"
                    >
                        Edit Content
                    </button>
                )}
            </div>
        </div>
    )
}

export default serviceCard
