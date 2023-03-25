import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { OptionIcon } from "../assets/Icons/OptionIcon";
import { VIDEO } from "../list";

export function SuggestedCard({ video }: { video: VIDEO }) {
  return (
    <Link to={`/watch/${video._id}`} className="block mb-3">
      <div className="flex items-start group">
        <div className="max-w-[180px]">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full rounded-xl"
          />
        </div>
        <div className="flex flex-col pt-1 px-2.5">
          {/* Video Title */}
          <span
            className="text-sm leading-tight font-medium"
            title={video.title}
          >
            {video.title}
          </span>
          {/* Video Creator */}
          <span className="text-xs mt-1.5">{video.creator}</span>
          {/* Video Views */}
          <span className="text-xs mt-1">452</span>
        </div>
        <div className="w-11 text-right ml-auto pr-3">
          <Menu
            as="div"
            className="relative inline-block text-left ml-auto md:opacity-0 md:group-hover:opacity-100 opacity-100"
          >
            <div>
              <Menu.Button className="p-2">
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
    </Link>
  );
}
