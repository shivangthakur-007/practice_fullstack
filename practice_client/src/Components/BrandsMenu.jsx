import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineDown } from "react-icons/ai";

const img =
  "https://www.combonation.in/storage/9453/63ca5f25af222_Xmas_logo_theme.png";
function BrandsMenu() {
  const btn = [
    { pic: img },
    { pic: img },
    { pic: img },
    { pic: img },
    { pic: img },
    { pic: img },
    { pic: img },
    { pic: img },
    { pic: img },
    { pic: img },
    { pic: img },
    { pic: img },
  ];
  return (
    <Popover className="relative">
      <Popover.Button className="flex items-end outline-none">
        <span>BRANDS</span>
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
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4 flex ">
              {btn.map((item, index) => (
                <div key={index}>
                  <a href="/">
                    <img src={item.pic} width="200px" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
export default BrandsMenu;
