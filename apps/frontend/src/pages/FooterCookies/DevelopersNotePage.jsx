import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import FooterData from '../../components/Data/FooterData'

const DevelopersNotePage = () => {
  return (
      <div>
          <Navbar />
          <div className="mt-5">
              <div className="flex justify-center gap-10 text-center font-bold  m-5">
                  <h1 className='lg:hidden '>
                      <a href="/home">Back</a>
                  </h1>
                  <h1 className="lg:text-AgH3 text-center">Developer's Note</h1>
              </div>
              <section className="m-5">
                  <FooterData />
              </section>
          </div>
          <Footer />
      </div>
  );
}

export default DevelopersNotePage
