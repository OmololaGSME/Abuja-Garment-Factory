import React from 'react'
import {
    MdOutlineArrowCircleLeft,
    MdOutlineArrowCircleRight
} from 'react-icons/md'



import slide1 from '../../assets/slide 1.png'
import slide2 from '../../assets/slide 2.png'
import slide3 from '../../assets/slide 3.png'
import slide4 from '../../assets/slide 4.png'
import slide5 from '../../assets/slide 5.png'
import slide6 from '../../assets/slide 6.png'
import slide7 from '../../assets/slide 7.png'



import { useState, useEffect } from 'react'
import './HomeSlider.css'
import {BsDot} from "react-icons/bs"

const HomeSlider = () => {
    const slider = [
          slide1, slide2, slide3, slide4, slide5, slide6, slide7
    ]
    const [currentSlide, setCurrentSlide] = useState(0)

    const autoScroll=true
    let slideInterval;
    let intervalTime = 5000

    useEffect(() => {
        setCurrentSlide(0)
    }, [])

     useEffect(() => {
         if(autoScroll){
            auto();
         }
         return () => clearInterval(slideInterval);
     }, [currentSlide])


     const nextSlide =() =>{
        setCurrentSlide(currentSlide=== slider.length -1 ? 0 : currentSlide + 1)
     }

     const prevSlide = () => {
         setCurrentSlide(
             currentSlide === 0? slider.length -1 : currentSlide - 1
         )
     }

    const goToSlide = (index) => {
        setCurrentSlide(index);
    }

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    return (
        <div className="slider lg:p-0 h-full">
            <MdOutlineArrowCircleLeft
                onClick={prevSlide}
                className=" arrow arrow-prev"
            />
            <MdOutlineArrowCircleRight
                onClick={nextSlide}
                className=" arrow arrow-next"
            />
            {slider.map((slide, index) => (
                <div
                    className={
                        index === currentSlide ? 'slide currrent' : 'slide'
                    }
                    key={index}
                >
                    {index === currentSlide && (
                        <div>
                            <img src={slide} alt="image" />
                            <div className="slider-dots">
                                {slider.map((slide, index) => (
                                    <div key={index}>
                                        {' '}
                                        <span className="dots text-center mt-3  h-full">
                                            <BsDot
                                                className={
                                                    currentSlide === index
                                                        ? 'indicator'
                                                        : 'indicator indicator-inactive'
                                                }
                                                onClick={() => goToSlide(index)}
                                            />{' '}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default HomeSlider
