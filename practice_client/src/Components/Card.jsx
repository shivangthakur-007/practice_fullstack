import { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

function Card() {
  const [state, setState] = useState(0);
  function handledclick() {
    setState(state + 1);
  }
  

  const cardImg =
    "https://www.combonation.in/storage/56549/650eb75e35b2d_Combo-220.jpg";
  return (
    <div className="flex w-full h-[80vh] items-center justify-center ">
      <div className="w-[17rem] h-[27rem] border-slate-300 border-2 flex flex-col absolute ">
        <div className="flex justify-end pr-[10px] py-[4px] bg-red-50">
          <AiOutlineHeart className="text-[25px] text-slate-700 hover:text-red-500  " />
        </div>
        <div className="flex items-center justify-center pb-[3%] border-b-2 border-slate-500 pt-[0.5rem]">
          <img src={cardImg} width="220px" height="150px" />
        </div>
        <div className="pt-[4px] flex flex-col items-center justify-center">
          <div className="flex flex-col gap-2 items-center text-xl pt-[0.5rem]">
            <h1 className="text-gray-700 font-semibold">Caffine Care Combo</h1>
            <p>(pack of 2)</p>
          </div>
          <div className="flex gap-2 pt-[4px]">
            <span>$69</span>
            <span>$270</span>
            <span>66%off</span>
          </div>
        </div>
        <div className="items-center flex justify-center gap-[2rem] pt-[0.6rem] ">
          <div>
            <button
              onClick={handledclick}
              className="flex items-center py-[1px] px-[1px] w-[140px] rounded-md border-2 border-yellow-500 hover:bg-yellow-600 "
            >
              <div className="flex items-center gap-2">
                <AiOutlineShoppingCart className="flex text-2xl text-gray-700 " />
                <span className="text-gray-600 px-[2px] py-[1px] text-lg font-semibold">
                  Add to cart
                </span>
              </div>
            </button>
          </div>
          <div className="">
            <button className="flex bg-tranparent  items-center justify-center  border-[2px] border-slate-400 rounded-3xl w-[30px] h-[28px] cursor-pointer hover:border-blue-800 ">
              <span className="text-xl hover:text-slate-500 text-blue-600">
                {state}
              </span>
            </button>
          </div>
        </div>
      </div>
      </div>
  );
}
export default Card;
