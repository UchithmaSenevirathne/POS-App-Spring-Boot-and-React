import React from "react";
import aboutImng from "../../assets/images/web/about/aboutimg.png";
import i1 from "../../assets/images/web/about/location.png";
import i2 from "../../assets/images/web/menu/carrot.png";
import i3 from "../../assets/images/web/about/delivery-bike.png";
import '../../assets/menu.css'

function About() {
  return (
    <div className="bg-white h-[800px] bg-img" id="aboutPage">
      <div className="flex items-center gap-20 px-56 py-32">
        <div>
          <img src={aboutImng} alt="" className="flex-1 w-[800px]" />
        </div>
        <div className="flex flex-col gap-10 w-[50%]">
          <h1 className="font-raleway font-bold text-[28px] mb-10">
            We are doing more than you expect
          </h1>
          <div className="flex items-center gap-10">
            <img src={i1} alt="" className='w-12'/>
            <div className="flex flex-col gap-3">
              <p className="font-raleway font-semibold text-[20px] text-[#EE8600]">
                We are located in Colombo
              </p>
              <p className="font-poppins font-medium text-[14px] text-[#00000073]">
                We are proudly located in Colombo, serving the local community
                with great food.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={i2} alt="" />
            <div className="flex flex-col gap-3">
              <p className="font-raleway font-semibold text-[20px] text-[#EE8600]">
              Fresh organic ingredients
              </p>
              <p className="font-poppins font-medium text-[14px] text-[#00000073]">
              We use fresh, organic ingredients to ensure every meal is both delicious and healthy.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <img src={i3} alt="" className='w-12'/>
            <div className="flex flex-col gap-3">
              <p className="font-raleway font-semibold text-[20px] text-[#EE8600]">
              Own fast delivery
              </p>
              <p className="font-poppins font-medium text-[14px] text-[#00000073]">
              Enjoy the convenience of our own fast delivery service, bringing your favorite dishes right to your door.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
