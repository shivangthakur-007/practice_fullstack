import { ArrowDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

function CardNumber() {
  const img1 =
    "https://www.combonation.in/storage/5869/63981b089f0b1_Baby-Care.png";
  const [data, setdata] = useState([]);
  async function CardApi() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setdata(response.data);
    } catch (e) {
      console.log(e, "error, data not responded");
    }
  }
  useEffect(() => {
    CardApi();
  }, []);

  // let a=data.map((i)=>{
  //   return data.title
  // })
  // console.log(a)
  // console.log(data);

  return (
    <div className="bg-white">
      <section className="flex bg-[#f8f8f8] opacity-95 z-0 pt-[1rem] px-[6.7rem] gap-5">
        <div className="">
          <div className="border-box flex flex-col z-10 shadow-[0_10px_9px_rgba(0,0,0,0.16)]  w-[20vw] h-[60vh]">
            <div className="flex flex-col basis-[40%]">
              <div className="border-b-[1px] border-gray-300 bg-[#f8f8f85e]  py-[0.2rem] pl-[0.4rem]">
                <span className="text-[20px] text-gray-600 font-[600]">
                  Sort By:
                </span>
              </div>
              <div className="bg-white flex flex-col px-[2rem] py-[1rem] z-40">
                <li className="text-gray-800">
                  <a
                    href="/"
                    className="text-gray-400 font-semibold text-[18px]"
                  >
                    Name
                  </a>
                </li>
                <li className="text-gray-800">
                  <a
                    href="/"
                    className="text-gray-400 font-semibold text-[18px]"
                  >
                    Category
                  </a>
                </li>
                <li className="text-gray-800">
                  <a
                    href="/"
                    className="text-gray-400 font-semibold text-[18px]"
                  >
                    MRP
                  </a>
                </li>
              </div>
            </div>
            <div className="flex flex-col basis-[10%] border-b-[1px] border-gray-300 bg-[#f8f8f85e] py-[0.2rem] pl-[0.4rem]">
              <span className="text-[20px] text-gray-600 font-[600]">
                Filter By
              </span>
            </div>
            <ul className="flex flex-col gap-3 basis-[50%] justify-center w-full items-center bg-white">
              <li className="flex gap-7 px-[2rem] text-[20px] font-semibold items-center">
                Subcategories{" "}
                <ArrowDownIcon className="w-[17%] text-gray-600" />
              </li>
              <li className="flex gap-7 px-[2rem] text-[20px] font-semibold">
                Brands <ArrowDownIcon className="w-[17%] text-gray-600" />
              </li>
              <li className="flex gap-7 px-[2rem] text-[20px] font-semibold ">
                Price <ArrowDownIcon className="w-[17%] text-gray-600" />
              </li>
            </ul>
          </div>
        </div>
        <nav className="">
          <div>
            <img src={img1} className="" />
          </div>
          <ul className="flex gap-2 border-b-[1px] border-gray-600 py-[0.7rem]">
            <a href="/electronic" className="flex gap-[3px]  items-center">
              <li className="text-lg hover:text-blue-500 hover:font-[600]">
                Home
              </li>
              <span className="">❯</span>
            </a>
            <a href="/electronic" className="flex gap-[3px] items-center">
              <li className="text-lg hover:text-blue-500 hover:font-[600]">
                Categories
              </li>
              <span>❯</span>
            </a>
            <a href="/electronic" className="flex gap-[3px] items-center">
              <li className="text-lg hover:text-blue-500 hover:font-[600]">
                Baby Care
              </li>
              <span>❯</span>
            </a>
          </ul>
          <div className="border-b-[1px] border-gray-600 text-4xl py-[0.5rem] text-black font-semibold ">
            <h1>Precurated Combo</h1>
          </div>
          <div className="flex max-w-[100%] flex-wrap gap-[16px]  justify-center items-center ">
            {data.map((e, i) => {
              return (
                <div>
                  <Card data={e} key={i} />
                </div>
              );
            })}
          </div>
        </nav>
      </section>
    </div>
  );
}
export default CardNumber;
