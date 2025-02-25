import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'


const PrivacyPage = () => {
  return (
      <div>
          <Navbar />
          <div className="m-10">
              <h1 className="text-center font-bold">Privacy</h1>
              <section>
                  <h4 className="text-secondaryNine font-bold mb-5">
                      Please note some of our privacy policies
                  </h4>
                  <p className="text-start content-start mr-24 lg:mr-[600px] mb-10">
                      All our services are exclusive to each client We do not
                      sell products created for our clients to other interested
                      clients All clients personal information including designs
                      and specifications are kept private
                  </p>
              </section>
              <Footer />
          </div>
      </div>
  );
}

export default PrivacyPage
