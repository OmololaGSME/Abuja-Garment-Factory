import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const ProductsData = [
  {
    id: 1,
    img: Img1,

  },
  {
    id: 2,
    img: Img2,

  },
  {
    id: 3,
    img: Img3,

  },

];

const products = () => {
  return (
    <div>
      <Navbar />
      <div>
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto ">
          <p className="font- text-xl mb-10">Product Samples</p>
          <div>
            <input
              type="text"
              placeholder="search"
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Body Section */}

        <div className='max-w-[1200px] mx-auto'>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">Graphic Tees</h2>
          <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8'>

            {/* <div className="grid grid-cols-3 sm:grid-cols-1
                    md:grid-cols-3 lg:grid-cols-5 place-items-center gap-5">
                    </div> */}
            {/* card section */}

            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 grid grid-col-3"
              >
                <div className="h-[250px]">
                  <img
                    src={data.img}
                    alt=""
                    className=" object-cover rounded-lg h-full w-full object-center lg:h-full lg:w-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">Traditional/Aso-ebi</h2>
          <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8'>

            {/* <div className="grid grid-cols-3 sm:grid-cols-1
                    md:grid-cols-3 lg:grid-cols-5 place-items-center gap-5">
                    </div> */}
            {/* card section */}

            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 grid grid-col-3"
              >
                <div className="h-[250px]">
                  <img
                    src={data.img}
                    alt=""
                    className=" object-cover rounded-lg h-full w-full object-center lg:h-full lg:w-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">Active wear</h2>
          <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8'>

            {/* <div className="grid grid-cols-3 sm:grid-cols-1
                    md:grid-cols-3 lg:grid-cols-5 place-items-center gap-5">
                    </div> */}
            {/* card section */}

            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 grid grid-col-3"
              >
                <div className="h-[250px]">
                  <img
                    src={data.img}
                    alt=""
                    className=" object-cover rounded-lg h-full w-full object-center lg:h-full lg:w-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">Uniforms</h2>
          <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8'>

            {/* <div className="grid grid-cols-3 sm:grid-cols-1
                    md:grid-cols-3 lg:grid-cols-5 place-items-center gap-5">
                    </div> */}
            {/* card section */}

            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 grid grid-col-3"
              >
                <div className="h-[250px]">
                  <img
                    src={data.img}
                    alt=""
                    className=" object-cover rounded-lg h-full w-full object-center lg:h-full lg:w-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default products
