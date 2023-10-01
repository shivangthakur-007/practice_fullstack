import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

function Card() {
  const cardImg =
    "https://www.combonation.in/storage/56549/650eb75e35b2d_Combo-220.jpg";
  return (
    <div className="flex w-full h-[80vh] items-center justify-center ">
      <div className="w-[17rem] h-[27.3rem] border-slate-300 border-2 flex flex-col absolute ">
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
        <div className="items-center flex justify-center pt-[0.6rem] ">
          <div>
            <button
              // onClick=""
              className="flex items-center py-[2px] px-[10px] w-[180px] rounded-md border-2 border-yellow-500 hover:bg-yellow-500 hover:border-transparent "
            >
              <div className="flex items-center gap-4 text-xl">
                <AiOutlineShoppingCart className="flex text-3xl text-gray-700 " />
                <span className="text-gray-600 px-[2px] py-[1px] font-semibold">
                  Add to cart
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      </div>
  );
}
export default Card;
