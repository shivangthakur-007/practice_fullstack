import {
  BsFillPhoneFill,
  BsFillQuestionCircleFill,
  BsBag,
} from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import CategoryMenu from "../Components/Categorymenu";
import BrandsMenu from "../Components/BrandsMenu";
import StoreMenu from "../Components/Stores";

function Layouts() {
  const img =
    "https://www.combonation.in/storage/9453/63ca5f25af222_Xmas_logo_theme.png";
  return (
    <div className="min-h-[100vh]  font-sans">
      <section className="bg-[#fd7e14] leading-4 p-[2px] max-h-[8vh] flex items-center justify-around">
        <div className="w-[50%] pl-[2rem]">
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
            <a href="/" className="text-lg font-semibold text-white pl-4">
              <li className="flex items-center gap-1">
                <BsFillQuestionCircleFill />
                Help
              </li>
            </a>
          </ul>
        </div>
      </section>
      <header className="flex flex-wrap max-w-[100%] mx-[7rem]">
        <div className="flex  items-center grow-0 basis-[25%] justify-start">
          <a href="/">
            <img src={img} width="150px" />
          </a>
        </div>
        <div className="flex grow-0 basis-[50%] items-center text-[16px] justify-start px-[2rem]  font-[600] text-black">
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
        <div className="flex items-end flex-col basis-[25%] justify-center pr-[2rem] font-bold text-black text-lg ">
          <span>Need Help?</span>
          <span>+918595091624</span>
        </div>
      </header>
      <nav className="flex mx-[7rem] my-[1rem] flex-wrap ">
        <div className="flex grow-0 basis-[25%] py-[2px]"></div>
        <div className="flex grow-0 basis-[50%] pl-[1rem]">
          <div className="box-border w-[100%] border-none rounded-md  mr-[2rem] ">
            <input
              className="bg-transparent w-[100%]   py-[0.3rem] px-[1rem] text-lg font-semibold"
              type="search"
              name="search_box"
              id="search_box"
              placeholder="Search Over 10700+ Products"
            />
          </div>
        </div>
        <ul className="flex grow-0 basis-[20%]">
          <a href="/">
            <li>
              <CgProfile />
            </li>
          </a>
          <a href="/">
            <li>
              <AiOutlineHeart />
            </li>
          </a>
          <a href="/">
            <li>
              <BsBag />
            </li>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Layouts;
