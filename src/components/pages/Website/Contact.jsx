import React from "react";
import phone from '../../assets/images/web/contact/phone.png'
import location from '../../assets/images/web/contact/building.png'
import email from '../../assets/images/web/contact/email.png'

function Contact() {
  return (
    <div className="bg-white h-[800px]" id="contactPage">
      <div className="flex gap-40 px-56 py-32">
        <div className="flex flex-col w-[70%] gap-10">
          <h1 className="font-raleway font-bold text-[28px] mb-10">
            Get in touch with Us
          </h1>
          <div className="flex flex-col gap-10">
            <input type="text" className="bg-[#F4F4F4] h-[55px] placeholder:text-[#ABABAB] text-[16px] font-poppins placeholder:font-light pl-9 rounded-md" placeholder='Name'/>
            <input type="email" className="bg-[#F4F4F4] h-[55px] placeholder:text-[#ABABAB] text-[16px] font-poppins placeholder:font-light pl-9 rounded-md" placeholder='Email'/>
            <input type="text" className="bg-[#F4F4F4] h-[55px] placeholder:text-[#ABABAB] text-[16px] font-poppins placeholder:font-light pl-9 rounded-md" placeholder='Message'/>
          </div>
          <button className="bg-[#FFA600] w-[25%] text-[16px] font-poppins text-white h-[43px] rounded-md">Send Message</button>
        </div>
        <div className="flex flex-col w-[50%] gap-10">
          <h1 className="font-raleway font-bold text-[28px] mb-10">
          Contact Informations
          </h1>
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <img src={phone} alt="" className="w-6"/>
              <p className="text-[16px] font-poppins text-[#4B4B4B]">+94 71 330 1004</p>
            </div>
            <div className="flex items-center gap-5">
              <img src={email} alt="" className="w-6"/>
              <p className="text-[16px] font-poppins text-[#4B4B4B]">foodie@gmail.com</p>
            </div>
            <div className="flex items-center gap-5">
              <img src={location} alt="" className="w-6"/>
              <p className="text-[16px] font-poppins text-[#4B4B4B]">No: 123, Battaramulla, Colombo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
