import {
  BsFillPhoneFill,
  BsFillQuestionCircleFill,
  BsBag,
} from "react-icons/bs";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import CategoryMenu from "../Components/Categorymenu";
import BrandsMenu from "../Components/BrandsMenu";
import StoreMenu from "../Components/Stores";
import { useContext } from "react";
import { Bio } from "../App";


function Header() {
const head=useContext(Bio)    
  const img =
    "https://www.combonation.in/storage/9453/63ca5f25af222_Xmas_logo_theme.png";
  return (
    <>
      <section className="bg-[#fd7e14] leading-4 p-[2px] max-h-[8vh] flex items-center justify-around">
        <div className="w-[50%] pl-[2rem] py-2">
          <a href="/" className="text-lg font-semibold text-white">
            why choose Combination?
          </a>
        </div>
        <div>
          <ul className="flex items-center gap-[12rem]">
            <a href="/" className="text-lg font-semibold text-white">
              <li className="flex  items-center gap-1">
                <BsFillPhoneFill />
                Get App
              </li>
            </a>
            <a
              href="/"
              className="text-lg font-semibold text-white pl-4 relative"
            >
              <li className="flex items-center gap-1">
                <BsFillQuestionCircleFill />
                Help
              </li>
            </a>
          </ul>
        </div>
        <div className=" fixed top-[35rem] left-[79rem] border-box z-20">
          <a href="/">
            <IoNotificationsCircleOutline className="text-[4rem] text-red-600 p-[2px]" />
          </a>
        </div>
      </section>
      <header className="flex flex-wrap max-w-[100%] mx-[7rem] relative z-40">
        <div className="flex  items-center grow-0 basis-[25%] justify-start">
          <a href="/">
            <img src={img} width="150px" />
          </a>
        </div>
        <div className="flex grow-0 basis-[50%] items-center text-[14px] justify-start px-[2rem]  font-[700] text-slate-700">
          <div className="flex gap-[2rem] ">
            <a href="/">Home</a>
            <a href="/">
              <CategoryMenu />
            </a>
            <a href="/">
              <BrandsMenu />
            </a>
            <a href="/">
              <StoreMenu />
            </a>
          </div>
        </div>
        <div className="flex items-end flex-col basis-[25%] justify-center pr-[2rem] font-bold text-slate-700 text-lg ">
          <span>Need Help?</span>
          <span>+918595091624</span>
        </div>
      </header>
      <div className="sticky top-0 left-0 z-10 bg-white w-full py-[3px]">
        <nav className="flex flex-wrap pb-[0.5rem] ml-[7rem] mr-[5rem]   ">
          <div className="flex grow-0 basis-[25%] "></div>
          <div className="flex grow-0 basis-[50%] pl-[1rem]">
            <div className="box-border w-[100%] border-none rounded-md  mr-[2rem] ">
              <input
                className="bg-transparent rounded-md  w-[100%]   py-[0.3rem] px-[1rem] text-lg font-semibold"
                type="search"
                name="search_box"
                id="search_box"
                placeholder="Search Over 10700+ Products"
              />
            </div>
          </div>
          <ul className="flex grow-0 basis-[20%] items-center gap-[1rem] justify-end ">
            <a href="/">
              <li>
                <CgProfile className="w-[40px] h-[35px] hover:text-yellow-500" />
              </li>
            </a>
            <a href="/">
              <li>
                <AiOutlineHeart className="w-[40px] h-[35px] hover:text-yellow-500" />
              </li>
            </a>
            <a href="/">
              <li>
                <BsBag className="w-[40px] h-[30px] hover:text-yellow-500" />
                <div className="">
                  <button className="flex bg-tranparent  items-center justify-center  border-[2px] border-slate-400 rounded-3xl w-[30px] h-[28px] cursor-pointer hover:border-blue-800 ">
                    <span className="text-xl hover:text-slate-500 text-blue-600">
                      {head.state}
                    </span>
                  </button>
                </div>
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Header;
