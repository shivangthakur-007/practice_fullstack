import React from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { FiHeadphones } from "react-icons/fi";
import { LiaAngleDoubleRightSolid, LiaGreaterThanSolid } from "react-icons/lia";
import { PiCaretDoubleRightFill, PiCopyrightLight } from "react-icons/pi";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { ChevronDoubleRightIcon, ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/20/solid";

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
            <div className="text-[16.5px] text-gray-200 font-xl flex">
              <input
                type="email"
                placeholder="Your email"
                className="text-[#ccc] px-2 rounded-l-[4px] border-transparent outline-none"
                id="keep"
                name="Keep in touch"
              />
              <button>
                <LiaAngleDoubleRightSolid className="w-[40px] h-[35px] bg-[#FE9E2D] rounded-[5px] rounded-l-none text-white" />
              </button>
            </div>
            <div>
              <h1 className="text-white pb-1 text-lg">Follow us</h1>
              <li className="flex gap-7">
                <BsFacebook className="text-blue-500  text-4xl cursor-pointer" />
                <BsInstagram className="text-pink-500 bg-gradient-to-b cursor-pointer from-pink-300 to-yellow-500 rounded-xl text-4xl" />
                <BsLinkedin className="text-blue-500 text-4xl cursor-pointer" />
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex basis-[40%] mx-[6rem] pt-[1.5rem]">
        <div className="flex basis-[50%] gap-2">
          <select id="language" name="language" className=" flex gap-2 leading-6 text-[#ccc] px-[1px] pl-1 rounded-sm py-[1.5px] h-[30px] pr-1 cursor-pointer outline-none">
            <option className="" value="English">
              English
            </option>
          </select>
            <GlobeAltIcon className="w-[20px] contrast-[200]" />
          <select id="currency" name="currency" className=" flex gap-2 leading-6 text-[#ccc] px-[1px] pl-1 rounded-sm py-[1.5px] h-[30px] cursor-pointer outline-none">
            <option className="" value="Indian Rupees">
              Indian Rupees{" "}
            </option>
          </select>
            <ChevronDownIcon className="w-[20px] contrast-[200]" />
          <img
            src="https://www.combonation.in/assets/img/cards_all.svg"
            alt=""
            className="h-[30px] w-[200px] cursor-pointer"
          />
        </div>
        <div className="flex flex-col basis-[50%] text-[19px] font-bold text-gray-300">
          <div className="flex gap-2">
            <a href="/">Terms and conditions</a>
            <span>|</span>
            <a href="/">Privacy Policy</a>
            <span>|</span>
            <a href="/">Returns and Refunds</a>
            <span>|</span>
          </div>
          <div className="flex gap-2 text-[18px] font-semibold text-gray-400">
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
