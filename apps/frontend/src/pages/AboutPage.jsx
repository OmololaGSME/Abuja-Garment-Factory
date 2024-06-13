import React from 'react';
import Image1 from '../assets/workplace-seamstress-office-with-sewing-machine-table 1.png';
import Image2 from '../assets/pexels-kseniachernaya-3965543 1.png';
import Image3 from '../assets/IMG-20240508-WA0007 1.png'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const AboutPage = () => {
    return (
        <>
            <div>
                <Navbar />
                <div className='text-center mx-8'>
                    <div className='m-4 font-bold'>
                        <h4 className='text-AgH3'>About Us</h4>
                    </div>
                    <div className='mb-10'>
                        <div className='font-bold text-secondaryNine mb-4'>
                            <h4 className='text-AgH3'>History</h4>
                        </div>
                        <div className='text-2xl mb-4'>
                            <p>The Abuja Garment Factory was established in 2023 in response to a growing demand within the market. Recognizing the absence of a garment manufacturing facility in the heart of Abuja that could accommodate both retail consumers and bulk buyers, we embarked on a mission to fill this gap. Our dedication lies in assisting individuals in realizing their fashion aspirations.</p>
                        </div>
                        <div className='flex justify-center'>
                            <img src={Image1} className='w-3/5' alt='Image' />
                        </div>
                    </div>
                    <div className='mb-10'>
                        <div className='font-bold text-secondaryNine mb-4'>
                            <h4 className='text-AgH3'>Mission</h4>
                        </div>
                        <div className='text-2xl mb-4'>
                            <p>To be the preferred destination for African garment production needs and commit to excellence and customer satisfaction.</p>
                        </div>
                        <div className='flex justify-center'>
                            <img src={Image2} className='w-3/5' alt='Image' />
                        </div>
                    </div>
                    <div className='mb-10'>
                        <div className='font-bold text-secondaryNine mb-4'>
                            <h4 className='text-AgH3'>Team</h4>
                        </div>
                        <div className='text-2xl mb-4'>
                            <p>Bola Eyinade, is one of our Directors. She ensures things are going well. She has over 10 years work experience that spans across entrepreneurship, audit, and banking. She's also a Director with one of the biggest retail stores in Nigeria.</p>
                            <p>
                                Aderonke Aladejuyigbe, is our in-house fashion designer and Director. She has over 12 years of experience in fashion design. She specializes in pattern drafting, fabric cutting, garment construction, and training. She has trained over 100 students and is still counting.
                            </p>
                            <p>
                                We also have machinist available at our factory.</p>
                        </div>
                        <div className='flex justify-center'>
                            <img src={Image3} className='w-3/5' alt='Image' />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default AboutPage
