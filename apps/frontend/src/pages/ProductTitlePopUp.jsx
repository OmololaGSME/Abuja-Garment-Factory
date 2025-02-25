import React from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io';

const ProductTitlePopUp = () => {
  return (
      <div className=" flex flex-col  items-center justify-center border border-black mx-96 py-20 rounded  ">
    
              <div className="mt-10 flex flex-col gap-5 float-right">
                  <button className='place-self-end'>
                      <IoIosCloseCircleOutline
                          fontSize={24}
                          
                      />
                  </button>
                  <div>
                      <input
                          type="text"
                          placeholder="Graphic Tees "
                          className="border border-black rounded px-10 py-2"
                      />
                  </div>
              </div>
              <div className="flex gap-10 mt-10 ">
                  <button className="rounded px-5 border border-black">
                      Cancle Update
                  </button>
                  <button className="rounded bg-secondaryNine px-5">
                      Update Title
                  </button>
              </div>
          </div>
      
  );
}

export default ProductTitlePopUp
