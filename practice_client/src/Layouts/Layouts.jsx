import {
  BsFillPhoneFill,
  BsFillQuestionCircleFill,
  BsBag,
} from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import ButtonMenu from "../Components/ButtonMenu";

function Layouts() {
    const img =
      "https://www.combonation.in/storage/9453/63ca5f25af222_Xmas_logo_theme.png";
  return (
    <div className="min-h-[100vh] ">
      <section className="bg-[#fd7e14] p-2 max-h-[8vh] flex items-center justify-around">
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
      <header>
        <div>
          <img
            src={img}
            width="150px"
          />
        </div>
        <div>
          <div>
            <a href="/">
                <ButtonMenu />
            </a>
            <a href="/">
                <ButtonMenu />
            </a>
            <a href="/">
                <ButtonMenu />
            </a>
            <a href="/">
                <ButtonMenu />
            </a>
          </div>
          <div>
            <input
              type="search"
              name="search_box"
              id="search_box"
              placeholder="Search Over 10700+ products"
            />
          </div>
        </div>
        <div>
          <div></div>
          <div>
            <ul>
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
          </div>
        </div>
      </header>
    </div>
  );
}

export default Layouts;
