import { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";

function Card() {
  const [state, setState] = useState(0);
  function handledclick() {
    setState(state + 1);
  }
  const [carditem, SetCardItem] = useState({});
  async function Cardresponse() {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/1`);
      // console.log(response)
      SetCardItem({
        name: response.data.title,
        id: response.data.id,
        img: response.data.image,
        price: response.data.price,
      });
    } catch (e) {
      console.log(e, "error not responded");
    }
  }
  Cardresponse();

  // console.log(carditem.img)
  return (
    <div className="flex w-full max-h-[100%] items-center justify-center ">
      <div className="w-[17rem] min-h-[29rem] border-slate-300 border-2 bg-white flex flex-col gap-6 ">
        <div className="flex justify-end pr-[10px] py-[4px]">
          <AiOutlineHeart className="text-[25px] text-slate-700 hover:text-red-500 " />
        </div>
        <div className="flex items-center justify-center pb-[3%] pt-[0.5rem] ">
          <img src={carditem.img} className="max-w-[70%] max-h-[100%]" />
        </div>
        <div className="flex flex-col gap-1 pb-2 ">
        <div className="pt-[4px] flex flex-col items-center justify-center  border-t-2 border-slate-500">
          <div className="flex flex-col gap-2 items-center text-xl pt-[0.5rem] px-[1rem]">
            <h1 className="text-gray-700 font-semibold">{carditem.name}</h1>
            <p>(pack of 2)</p>
          </div>
          <div className="flex gap-2 pt-[4px]">
            <span>${carditem.price}</span>
            <span>$270</span>
            <span>66%off</span>
          </div>
        </div>
        <div className=" items-center flex justify-center gap-[2rem] pt-[0.6rem] ">
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
    </div>
  );
}
export default Card;
