import { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

function Card({ data }) {
  const [state, setState] = useState(0);
  function handledclick() {
    setState(state + 1);
  }

  return (
    <div className="bg-white my-[2rem] flex flex-col border-[1px] border-gray-500 w-[15.9rem] min-h-[28.5rem] gap-2 pb-2">
      <div className="flex items-center justify-end pr-[6px] pt-[4px] basis-1/12">
        <AiOutlineHeart className="text-2xl hover:text-red-500" />
      </div>
      <div className=" flex items-center justify-center border-b-[1px] border-gray-400 pb-2 basis-5/12">
        <img src={data.image} className="h-[12.5rem] w-[11.5rem]" />
      </div>
      <div className="flex flex-col items-center basis-5/12 min-h-[8rem]">
        <div className="flex flex-col items-center">
          <h1 className="flex text-center justify-center text-md">
            {data.title}
          </h1>
          <p className="text-lg text-gray-500 font-semibold text-center">
            (pack of 2)
          </p>
        </div>
        <div className="flex gap-2 text-gray-400 text-md">
          <span>{data.price}</span>
          <span>$270</span>
          <span>66%off</span>
        </div>
      </div>
      <div className="flex items-center gap-6 justify-center  basis-1/12 pr-[3px] pl-[3px]">
        <div className="border-yellow-500 border-[2px] hover:border-white box-border hover:bg-yellow-600 py-[0.5px] px-1 rounded-lg flex items-center border-box ">
          <button onClick={handledclick} className="">
            <div className="flex items-center gap-2 text-yellow-500 font-semibold hover:text-white">
              <AiOutlineShoppingCart className="text-2xl " />
              <span className=" text-xl">Add to cart</span>
            </div>
          </button>
        </div>
        <button className="border-[1.5px] border-blue-500 rounded-2xl hover:border-none  border-box w-[30px]">
          <span className="text-xl text-gray-500 hover:text-blue-500">
            {state}
          </span>
        </button>
      </div>
    </div>
  );
}
export default Card;
