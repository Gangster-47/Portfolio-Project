import React from "react";
import { Button } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

function Contact() {
  return (
    <div className="gradient-background2">
    <div className="relative flex items-top justify-center sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-4 text-gray-600 mt-6 mb-3">
                <CallIcon sx={{width:"30px",height:"30px"}}/>
                <a href="tel:+1234567890" className="mx-2">
                <Button variant="outlined">
                  +91 9491919191
                </Button>
                </a>
              </div>

              <div className="flex items-center mt-2 text-gray-600 mt-3">
               <EmailIcon sx={{width:"30px",height:"30px"}}/>
                <a href="mailto:yashrautela9@gmail.com" className="mx-2">
                <Button variant="outlined">yashrautela9@gmail.com</Button>
                </a>
              </div>

              <div className="flex items-center mt-2 text-gray-600 mt-3">
                <InstagramIcon sx={{width:"30px",height:"30px"}}/>
                <a href="https://www.instagram.com/yash_rautela._/" className="mx-2">
                <Button variant="outlined">yash_rautela._</Button>
                </a>
              </div>
            </div>

            <form className="p-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <label for="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label for="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label for="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
