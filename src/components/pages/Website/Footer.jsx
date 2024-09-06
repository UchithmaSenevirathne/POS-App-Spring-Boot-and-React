import React from "react";
import footImg from "../../assets/images/web/footbanner/footImg.jpg";
import facebook from "../../assets/images/web/footbanner/facebook.png";
import twitter from "../../assets/images/web/footbanner/twitter.png";
import whatsapp from "../../assets/images/web/footbanner/whatsapp.png";
import divider from "../../assets/images/web/banner/divider.webp";
import "../../assets/midbanner.css";
import { FaCartShopping} from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="absolute flex flex-col top-[4080px] z-50 gap-10">
        <div className="flex items-center justify-center gap-3">
          <FaCartShopping className="text-[orange] text-[50px]" />
          <p className="font-bold text-[32px] font-poppins text-white">FOODIE</p>
        </div>
        <div className="text-center">
        <p className='text-[16px] font-poppins text-white w-[400px]'>Enjoy a variety of options with quick delivery and great service!</p>
        </div>
        <div className="flex justify-center gap-3 align-items-center">
            <img src={facebook} alt="" className="w-[25px] h-[25px]"/>
            <img src={whatsapp} alt="" className="w-[25px] h-[25px]"/>
            <img src={twitter} alt="" className="w-[25px] h-[25px]"/>
        </div>
      </div>
      <img src={divider} alt="" className="absolute top-[3820px] z-10" />
      <img src={footImg} alt="" className="h-[524px] object-cover footerimg" />
    </div>
  );
}

export default Footer;
