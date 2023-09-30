import { Popover, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import axios from "axios";

// const img =
//   "https://www.combonation.in/storage/9453/63ca5f25af222_Xmas_logo_theme.png";

function CategoryMenu() {
  const [category, setCategory] = useState([]);
  async function CategoryChild() {
    try {
      let response = await axios.get(
        `https://fakestoreapi.com/products/categories`
      );
      setCategory(response.data);
    } catch (error) {
      console.log(error, "Something went wrong");
    }
  }
  useEffect(() => {
    CategoryChild();
  }, []);
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
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white leading-6 shadow-lg ring-1 ring-gray-900/5">
            <ul className="flex items-center justify-center text-lg gap-2">
              <a href="/electronic">
                <li>{category[0]}</li>
              </a>
              <a href="/">
                <li>{category[1]}</li>
              </a>
              <a href="/">
                <li>{category[2]}</li>
              </a>
              <a href="/">
                <li>{category[3]}</li>
              </a>
            </ul>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
export default CategoryMenu;
