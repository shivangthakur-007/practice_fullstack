import React from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { FiHeadphones } from "react-icons/fi";
import { LiaGreaterThanSolid } from "react-icons/lia";
import {PiCopyrightLight} from "react-icons/pi";

function Footer() {
  return (
    <div className="bg-black flex flex-col  py-[3rem]">
      <div className="flex basis-[60%] border-b-[1px] border-gray-800 pb-[2rem] mx-[6rem]">
        <div className="flex basis-[50%] gap-[9rem]">
          <ul className="flex flex-col gap-2">
            <h1 className="text-white text-[14.5px] leading-[26px]">
              QUICK LINKS
            </h1>
            <div className="text-[16.5px] font-bold leading-[26px] text-gray-200 gap-2 font-xl">
              <a href="">
                <li>About us</li>
              </a>
              <a href="">
                <li>Franchise Partnership</li>
              </a>
              <a href="">
                <li>Help</li>
              </a>
              <a href="">
                <li>My Account</li>
              </a>
              <a href="">
                <li>Contacts</li>
              </a>
            </div>
          </ul>
          <ul className="flex flex-col gap-2">
            <h1 className="text-white text-[14.5px] leading-[26px] ">
              CATEGORIES
            </h1>
            <div className="text-[16.5px] leading-[26px] font-bold text-gray-200 gap-2 font-xl">
              <a href="">
                <li>Baby Care</li>
              </a>
              <a href="">
                <li>Beauty</li>
              </a>
              <a href="">
                <li>Gifts</li>
              </a>
              <a href="">
                <li>Health & Wellness</li>
              </a>
              <a href="">
                <li>Home & kitchen</li>
              </a>
              <a href="">
                <li>Personal Care</li>
              </a>
            </div>
          </ul>
        </div>
        <div className="flex basis-[50%] justify-between ">
          <ul className="flex flex-col gap-2">
            <h1 className="text-white text-[14.5px] leading-[26px] ">
              CONTACTS
            </h1>
            <div className="text-[16.5px] leading-[26px] text-gray-200 flex flex-col gap-2 font-semibold max-w-[14.5rem]">
              <li className="flex gap-4 ">
                <AiOutlineHome className="text-gray-200 h-[29px] w-[70px]" />
                <h1>
                  Suite No 301, Third Floor, Good Earth Business Bay, Sector 58,
                  Gurugram Haryana (122011)
                </h1>
              </li>
              <a href="" className="flex gap-4 items-center">
                <FiHeadphones className="text-2xl" /> <span>+91375979890</span>
              </a>
              <a href="" className="flex gap-4 items-center">
                <AiOutlineMail className="text-gray-200 text-2xl" />
                <span>customcare@gmail.com</span>
              </a>
            </div>
          </ul>
          <ul className="flex flex-col gap-2">
            <h1 className="text-white">KEEP IN TOUCH</h1>
            <div className="text-[16.5px] text-gray-200 gap-2 font-xl flex">
              <input type="email" placeholder="Your email" />
              <button>
                <LiaGreaterThanSolid />
                <LiaGreaterThanSolid />
              </button>
            </div>
            <div>
              <h1>Follow us</h1>
              <li>
                <a href="">
                  <img src="" alt="" />
                </a>
                <a href="">
                  <img src="" alt="" />
                </a>
                <a href="">
                  <img src="" alt="" />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex basis-[40%] mx-[6rem] py-[1.5rem]">
        <div className="flex items-center basis-[50%]">
          <button>
            <span>English</span>
          </button>
          <button>
            <span>Indian Rupees</span>
          </button>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="flex flex-col basis-[50%] text-[19px] font-bold text-gray-200">
          <div>
            <a href="/">Terms and conditions</a>
            <span>|</span>
            <a href="/">Privacy Policy</a>
            <span>|</span>
            <a href="/">Returns and Refunds</a>
            <span>|</span>
          </div>
          <div className="flex gap-2 text-[18px] font-semibold text-gray-200">
            <PiCopyrightLight className="" />
            <p>
              2021-23 Combonation.in. Powered by Born Unicorn Tech Prise Pvt.
              Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
