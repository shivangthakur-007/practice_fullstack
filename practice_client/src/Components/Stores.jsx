import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';

const img =
  "https://www.combonation.in/storage/9453/63ca5f25af222_Xmas_logo_theme.png";
function StoreMenu() {
  // const dispatch= useDispatch();
  // const btn = useSelector((state)=> state?.store?.data);
  // console.log(btn);
  // const btn = [
  //   { name: "AIRIA MALL STORE"},
  //   { name: "AKSHARDHAM STORE"},
  //   { name: "AMRITSAR STORE"},
  //   { name: "DWARKA STORE"},
  //   { name: "FARIDABAD STORE"},
  //   { name: "GK M BLOCK"},
  //   { name: "KANPUR STORE"},
  //   { name: "LAJPAT NAGAR"},
  //   { name: "MGF METROPOLITAN STORE"},
  //   { name: "RAJOURI GARDEN STORE"},
  // ];
  return (
    <Popover className="relative ">
      <Popover.Button className="flex items-end outline-none">
        <span>STORES</span>
        <AiOutlineDown className="h-5 w-4 " aria-hidden="true" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="Transition ease-in-out"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-50% z-10 mt-5 flex  w-screen max-w-max -translate-x-1/2 px-2">
          <div className="w-4/12 max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="py-4 px-3 gap-1 flex flex-col items-start ">
              {/* {btn.map((item, index) => (
                <button key={index}>
                  <ul>
                    <Link to={"/storenav"}>
                      <li onClick={""} className="font-semibold text-gray-900">
                        {item.name}
                      </li>
                    </Link>
                  </ul>
                </button>
              ))}  */}
              {/* <li>{btn?.name}</li> */}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
export default StoreMenu;
