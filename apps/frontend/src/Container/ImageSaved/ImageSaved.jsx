import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import check from '../../assets/check-solid 1.png'

const ImageSaved = () => {
  return (
      <div>
          <div>
              <AdminNavbar />
          </div>
          <div className=" ">
              <img
                  src={check}
                  alt="check image"
                  className="block m-auto bg-emerald-600 border rounded-full p-8"
              />
          </div>
          <div className=" mt-5 mb-56 text-center ">
              <p className="text-black">Your changes have been saved</p>
          </div>
          <div className="mb-96 text-center">
              <p className='text-black hover:underline'>
                  <a href="/admin">Back To Home</a>
              </p>
          </div>
      </div>
  )
}

export default ImageSaved
