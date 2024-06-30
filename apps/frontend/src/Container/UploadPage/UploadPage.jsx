import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import { AiOutlineSearch } from 'react-icons/ai'
import scarf from '../../assets/scarf.png'
import edit from '../../assets/edit.png'

const UploadPage = () => {
  return (
      <div>
          <div>
              <AdminNavbar />
          </div>
          <div>
              <form className="w-[700px] block m-auto ">
                  <div className="flex justify-center mt">
                      <input
                          type="search"
                          placeholder="search "
                          className="border rounded-full w-full p-4 text-center"
                      />
                      <button className="absolute right-[350px] mt-[18px]  text-2xl ">
                          <AiOutlineSearch />
                      </button>
                  </div>
              </form>
          </div>
          <div className="flex justify-center text-center mt-11">
              <img src={scarf} alt="scarf-image" className=" ml-20" />
              <a href="/image-directory">
                  <img src={edit} alt="edit image" className=" h-20 mt-96 " />
              </a>
          </div>
          <div className="flex justify-center gap-8 mb-96">
              <button className="bg-pink-900 rounded-full p-3 text-white">
                  Save Changes
              </button>
              <button className=" rounded-full p-3 border">Cancel edit</button>
          </div>
      </div>
  )
}

export default UploadPage
