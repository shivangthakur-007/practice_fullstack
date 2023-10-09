import React from "react";

function Footer() {
  return (
    <div className="bg-black flex flex-col  py-[3rem]">
      <div className="flex basis-[60%] px-[1.5rem]">
        <div className="flex basis-[50%] justify-around">
          <ul className="flex flex-col gap-2">
            <h1 className="text-white text-[14.5px]">QUICK LINKS</h1>
            <div className="text-[15.5px] text-gray-200 gap-2 font-xl">
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
            <h1 className="text-white text-[14.5px]">CATEGORIES</h1>
            <div className="text-[15.5px] text-gray-200 gap-2 font-xl">
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
            <h1 className="text-white text-[14.5px]">CONTACTS</h1>
            <div className="text-[15.5px] text-gray-200 gap-2 font-xl">
              <li className="max-w-[11.5rem]">
                <img src="" alt="" /> Suite No 301, Third Floor, Good Earth
                Business Bay, Sector 58, Gurugram Haryana (122011)
              </li>
              <a href="">
                <img src="" alt="" /> +91854628797
              </a>
              <a href="">
                <img src="" alt="" /> curstomcare@gmail.com
              </a>
            </div>
          </ul>
          <ul className="flex flex-col gap-2">
            <h1 className="text-white">KEEP IN TOUCH</h1>
            <div className="text-[15.5px] text-gray-200 gap-2 font-xl">
              <input type="email" placeholder="Your email" />
              <button></button>
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
      <div className="flex basis-[40%]">
        <div>
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
        <div>
          <div>
            <a href="/">Terms and conditions</a>
            <span>|</span>
            <a href="/">Privacy Policy</a>
            <span>|</span>
            <a href="/">Returns and Refunds</a>
            <span>|</span>
          </div>
          <div>
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
