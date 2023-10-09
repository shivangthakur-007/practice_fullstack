import { Popover, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import axios from "axios";
import {Link} from 'react-router-dom'

function CategoryMenu() {
  const [fake, setfake]= useState([]);
  async function fakecategories(){
    try {
    const response =await axios.get("https://fakestoreapi.com/products/categories");
      setfake(response.data)
    } catch (e) {
      console.log(e, "error found")
    }
  }
useEffect(()=>{
  fakecategories();
},[]);

let card=Object.values(fake);
  return (
    <Popover className="relative">
      <Popover.Button className="flex items-end gap-[2px]">
        <span>CATEGORIES</span>
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
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="bg-white shadow-[0px_0px_16px_rgba(17,17,26,0.1)] rounded-xl px-2 py-3">
            <ul className="flex text-md text-gray-500 gap-2">
              <Link to="/electronics">
                <li>{card[0]}</li>
              </Link>
              <Link to="/jewelery">
                <li>{card[1]}</li>
              </Link>
              <Link to="/men">
                <li>{card[2]}</li>
              </Link>
              <Link to="/women">
                <li>{card[3]}</li>
              </Link>
            </ul>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
export default CategoryMenu;
