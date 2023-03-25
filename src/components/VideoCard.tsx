import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { OptionIcon } from "../assets/Icons/OptionIcon";
import { VIDEO } from "../pages/Home/Home";

export const VideoCard = ({ item }: { item: VIDEO }) => {
  return (
    <div className="rounded-xl">
      <Link to={`/watch/${item._id}`} className="border-2 border-red-500 block">
        <img src={item.thumbnail} alt={item.title} className="rounded-xl" />
      </Link>
      <div className="flex items-start pt-2.5 pr-1 group">
        <div className="w-10">
          <img
            src={item.logo}
            alt="creatorImg"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col px-2.5">
          {/* Video Title */}
          <span
            className="text-sm leading-tight font-medium"
            title={item.title}
          >
            {item.title}
          </span>
          {/* Video Creator */}
          <span className="text-xs">{item.creator}</span>
          {/* Video Views */}
          <span className="text-xs ">views</span>
        </div>
        {/* <div className="ml-auto md:opacity-0 md:group-hover:opacity-100 opacity-100">
          <button className="p-1.5">
            <OptionIcon />
          </button>
        </div> */}
        <Menu
          as="div"
          className="relative inline-block text-left ml-auto md:opacity-0 md:group-hover:opacity-100 opacity-100"
        >
          <div>
            <Menu.Button>
              <OptionIcon />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-1">
              <div className="px-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Add to Watchlater
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1  ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Save to Playlist
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Share
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};
