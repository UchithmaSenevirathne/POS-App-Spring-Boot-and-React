import React from "react";
import phone from '../../assets/images/web/contact/phone.png'
import location from '../../assets/images/web/contact/building.png'
import email from '../../assets/images/web/contact/email.png'
import dots from '../../assets/images/dots.png'

function Contact() {
  return (
    <div className="flex items-center justify-between bg-white min-h-[700px] px-[300px]" id="contactPage">
      {/* Contact Section */}
      <div className="mb-8 text-left">
        <h1 className="text-5xl font-semibold mb-14">Contact us</h1>
        <p className="text-gray-600 text-[18px]">
          Need to get in touch with us? Either fill out the form with your inquiry or <br/>
          find the <a href="#" className="text-blue-500 underline">department email</a> you'd like to contact below.
        </p>
      </div>
      <img src={dots} alt="" className="absolute top-[4700px] opacity-5 h-52 w-52 left-[310px]" />
      
      {/* Contact Form */}
      <div className="z-10 w-full max-w-md p-8 bg-white shadow-xl">
        <form className="">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 text-gray-700">First name*</label>
              <input
                type="text"
                className="w-full h-12 p-2 bg-gray-100 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Last name</label>
              <input
                type="text"
                className="w-full h-12 p-2 bg-gray-100 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Email*</label>
            <input
              type="email"
              className="w-full h-12 p-2 bg-gray-100 border border-gray-300 rounded-md"
              
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">What can we help you with?</label>
            <textarea
              className="w-full h-12 p-2 bg-gray-100 border border-gray-300 rounded-md"
              
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-1/3 py-2 text-white bg-[orange] rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
      <img src={dots} alt="" className="absolute top-[4850px] opacity-5 right-[370px] w-[300px] h-[300px]" />
    </div>
  );
}

export default Contact;
