import React from 'react'
import { CircleX } from 'lucide-react'
const AdminServicePopUp = ({ data, popUp, setPopUp }) => {
    const hidePopUp = () => {
        setPopUp({ ...popUp, show: false, data: {} })
    }
    return (
        <div className="backdrop-brightness-50 flex items-center justify-center fixed top-0 left-0 h-screen w-screen z-10">
            <div className="w-[90%] sm:w-3/4 md:w-1/2 flex h-max flex-col gap-y-3 relative bg-white rounded-xl px-8 sm:px-16 py-8">
                <button onClick={hidePopUp} className="absolute top-2 right-5">
                    <CircleX />
                </button>
                <div className="relative mt-3 sm:mt-0">
                    <input
                        type="text"
                        className="  relative focus:z-0 z-20 text-lg w-full text-[#C19390] pr-24 outline-gray-500 focus:outline focus:outline-[1px] rounded-lg p-1"
                        defaultValue={data?.title}
                    />
                    <button className="absolute top-0 rounded-lg font-semibold text-lg z-10  pr-2 py-1 right-0">
                        click to edit
                    </button>
                </div>
                <div className="relative my-2 sm:my-0">
                    {' '}
                    <textarea
                        name=""
                        id=""
                        className="h-36 w-full p-3 focus:pb-10 rounded-xl focus:z-0 z-20 relative  resize-none outline-gray-500 focus:outline focus:outline-[1px]"
                        defaultValue={data?.desc}
                    ></textarea>
                    <button className="absolute w-full font-medium bottom-[1.5px] rounded-xl px-2 py-1 z-10 bg-white  right-0 text-right">
                        click to edit
                    </button>
                </div>
                <div className="flex sm:justify-evenly justify-between gap-y-3 text-sm items-center">
                    <button className="py-1 px-3 rounded-2xl text-[#4D453B] hover:bg-[#F7EFE5] focus:bg-[#F0DFCA] active:bg-[#FAF5EF] disabled:border-[#B5B4B5] ont-semibold border border-gray-500 ">
                        Cancel Update
                    </button>
                    <button className="py-1 px-3 rounded-2xl font-semibold bg-[#746858] active:bg-[#4D453B] hover:shadow-lg focus:bg-[#9B8A75] disabled:text-gray-500 disabled:bg-[#D3D2D2] hover:bg-[#C1AC93] text-white ">
                        Confirm Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminServicePopUp
