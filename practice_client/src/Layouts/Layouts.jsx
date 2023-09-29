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
import Carousel from "../Components/Carousel";

function Layouts() {
  const img =
    "https://www.combonation.in/storage/9453/63ca5f25af222_Xmas_logo_theme.png";
  const img1 =
    "https://www.combonation.in/storage/55399/6501ac9b11108_BYOC_Strip_banner_Sep_DT.jpg";
  const img2 =
    "https://www.combonation.in/storage/56834/6512dbb29b553_MKQ_banner_DT_oct.jpg";
  return (
    <div className="min-h-[100vh]  font-sans">
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
            <a href="/" className="text-lg font-semibold text-white pl-4">
              <li className="flex items-center gap-1">
                <BsFillQuestionCircleFill />
                Help
              </li>
            </a>
          </ul>
        </div>
      </section>
      <header className="flex flex-wrap max-w-[100%] mx-[7rem] relative">
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
      <div className="sticky top-0 left-0 bg-white w-full py-[3px]">
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
                <CgProfile className="w-[40px] h-[35px]" />
              </li>
            </a>
            <a href="/">
              <li>
                <AiOutlineHeart className="w-[40px] h-[35px]" />
              </li>
            </a>
            <a href="/">
              <li>
                <BsBag className="w-[40px] h-[30px]" />
              </li>
            </a>
          </ul>
        </nav>
      </div>
      <div className="carousel flex gap-[3rem] bg-[#FFF4E3] text-xl text-slate-500 p-[8px] font-semibold">
        <div className="carousel-item">
          <a href="/">
            <span>MENS</span>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/">
            <span>HOME & KITCHEN</span>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/">
            <span>GIFTS</span>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/">
            <span>PERSONAL CARE</span>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/">
            <span>BEAUTY</span>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/">
            <span>ACCESSORIES</span>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/">
            <span>BODY CARE</span>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/">
            <span>FRAGNANCES</span>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/">
            <span>HAIR CARE</span>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/">
            <span>MEN GROOMING</span>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/">
            <span>NEW LAUNCH</span>
          </a>
        </div>
      </div>
      <section>
        <div>
          <img src={img1} />
        </div>
      </section>
      <nav>
        <Carousel />
      </nav>
      <div>
        <img src={img2} alt="new" />
      </div>
    </div>
  );
}

export default Layouts;
