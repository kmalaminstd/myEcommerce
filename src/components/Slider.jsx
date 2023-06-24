import React from 'react'
import Slider from "react-slick";
import { sliderOne, sliderTwo, sliderThree} from '../assets/index'

function Sliders() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return (
    <>
        <div className="max-w-screen-xl mx-auto bg-gray">
            <Slider {...settings}>
                <div className="w-full h-[650px] object-cover">
                    <img className="object-cover w-[100%] h-[100%]" src={sliderOne} alt="" />
                </div>
                <div className="w-full h-[650px] object-cover">
                    <img className="object-cover w-[100%] h-[100%]"  src={sliderThree} alt="" />
 
                </div>
                <div className="w-full h-[650px] object-cover">
                    <img className="object-cover w-[100%] h-[100%]" src={sliderTwo} alt="" />

                </div>
            </Slider>
        </div>
    </>
  )
}

export default Sliders