import {
  BellIcon,
  FolderPlusIcon,
  PlusCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import {
  RiAddCircleFill,
  RiAddLine,
  RiArrowDownSLine,
  RiHashtag,
  RiSettings2Fill,
  RiShieldStarFill,
  RiVolumeUpFill,
} from "@remixicon/react";
import TooltipButton from "@components/atomic/TooltipButton";
import TestGif from "@assets/test.gif";
import TestImage from "@assets/test.png";
import { useState } from "react";
import React from "react";

export const ServerInfo = () => {
  const [showGuildMenu, setShowGuildMenu] = useState(false);

  return (
    <React.Fragment>
      <div className="relative flex flex-col bg-neutral-900 rounded-l-lg h-screen overflow-y-auto overflow-x-hidden">
        <div className="px-4 py-3 flex items-center justify-between font-semibold border-b border-neutral-800 shadow-md">
          <p>Mergen Games</p>
          <button
            id="guildMenuButton"
            className="focus:border-none focus:outline-none"
            onClick={() => setShowGuildMenu(!showGuildMenu)}
          >
            <RiArrowDownSLine
              className={`h-5 w-5 ${showGuildMenu ? "rotate-180" : ""} transition-transform`}
            />
          </button>
        </div>
        <div className="mt-5 px-1 flex items-center justify-between">
          <div className="inline-flex items-center text-xs">
            <RiArrowDownSLine className="size-4 text-neutral-400" />
            <p className="ml-1 font-bold tracking-wide text-neutral-400">
              TEXT CHANNELS
            </p>
          </div>
          <TooltipButton placement="top" content="Create Channel">
            <RiAddLine className="size-4 text-neutral-400" />
          </TooltipButton>
        </div>
        <div className="flex flex-col gap-2">
          <div className="ml-2 mt-2 px-3 py-1.5 flex items-center justify-between bg-neutral-800 hover:bg-neutral-850 transition-colors rounded-s-md duration-200">
            <span className="inline-flex items-center gap-1">
              <TooltipButton placement="top" content="Text">
                <RiHashtag className="size-3 text-neutral-400" />
              </TooltipButton>
              <p className="text-sm">general</p>
            </span>
            <div className="inline-flex items-center gap-1">
              <TooltipButton placement="top" content="Create Invite">
                <UserPlusIcon className="size-4 text-neutral-400" />
              </TooltipButton>
              <TooltipButton placement="top" content="Edit Channel">
                <RiSettings2Fill className="size-4 text-neutral-400" />
              </TooltipButton>
              <div className="ml-1 w-2 h-2 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="px-2">
            <div className="group/channel px-3 py-1.5 flex items-center justify-between hover:bg-neutral-800 hover:bg-neutral-850 transition-colors rounded-md duration-200">
              <span className="inline-flex items-center gap-1">
                <TooltipButton placement="top" content="Text (Limited)">
                  <div className="inline-flex gap-1">
                    <LockClosedIcon className="size-3 text-neutral-400" />
                    <RiHashtag className="size-3 text-neutral-400" />
                  </div>
                </TooltipButton>
                <p className="text-sm text-neutral-400 group-hover:text-white">
                  task-tracking
                </p>
              </span>
              <div className="hidden items-center gap-1 group-hover/channel:inline-flex">
                <TooltipButton placement="top" content="Create Invite">
                  <UserPlusIcon className="size-4 text-neutral-400" />
                </TooltipButton>
                <TooltipButton placement="top" content="Edit Channel">
                  <RiSettings2Fill className="size-4 text-neutral-400" />
                </TooltipButton>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 px-1 flex items-center justify-between">
          <div className="inline-flex items-center text-xs">
            <RiArrowDownSLine className="size-4 text-neutral-400" />
            <p className="ml-1 font-bold tracking-wide text-neutral-400">
              VOICE CHANNELS
            </p>
          </div>
          <TooltipButton placement="top" content="Create Channel">
            <RiAddLine className="size-4 text-neutral-400" />
          </TooltipButton>
        </div>
        <div className="px-2 mt-2 flex flex-col gap-2">
          <div className="px-3 py-1.5 flex items-center justify-between bg-neutral-800 hover:bg-neutral-850 transition-colors rounded-md duratio-200">
            <div className="group/channel flex flex-col flex-1">
              <div className="flex items-center text-xs justify-between">
                <div className="inline-flex items-center gap-1">
                  <TooltipButton placement="top" content="Voice">
                    <RiVolumeUpFill className="size-3 text-neutral-400" />
                  </TooltipButton>
                  <p className="text-sm text-white">General</p>
                </div>
                <div className="hidden items-center gap-1 group-hover/channel:inline-flex">
                  <TooltipButton placement="top" content="Create Invite">
                    <UserPlusIcon className="size-4 text-neutral-400" />
                  </TooltipButton>
                  <TooltipButton placement="top" content="Edit Channel">
                    <RiSettings2Fill className="size-4 text-neutral-400" />
                  </TooltipButton>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-2 ml-3 ">
                <div className="group inline-flex items-center p-1 hover:bg-neutral-700 rounded-md">
                  <img
                    src={TestImage}
                    alt="test"
                    className="size-6 rounded-full group-hover:hidden"
                  />
                  <img
                    src={TestGif}
                    alt="test"
                    className="size-6 rounded-full bg-no-repeat hidden group-hover:block"
                  />
                  <p className="text-xs text-neutral-400 ml-2 group-hover:text-white">
                    Mergen
                  </p>
                </div>
                <div className="relative">
                  <div className="group inline-flex items-center p-1 hover:bg-neutral-700 rounded-md">
                    <div>
                      <img
                        src={TestImage}
                        alt="test"
                        className="size-6 rounded-full group-hover:hidden border-2 border-neutral-800 group-hover:bg-neutral-700 ring-2 ring-green-500"
                      />
                      <img
                        src={TestGif}
                        alt="test"
                        className="size-6 rounded-full bg-no-repeat hidden group-hover:block border-2 border-neutral-900 group-hover:bg-neutral-700 ring-2 ring-green-500"
                      />
                    </div>
                    <p className="text-xs text-neutral-400 ml-2 group-hover:text-white">
                      Mergen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 py-1.5 flex items-center justify-between hover:bg-neutral-800 hover:bg-neutral-850 transition-colors rounded-md duration-200">
            <div className="flex flex-col flex-1">
              <div className="group/channel flex items-center text-xs justify-between">
                <div className="inline-flex items-center gap-1">
                  <TooltipButton placement="top" content="Voice">
                    <div className="inline-flex gap-1">
                      <LockClosedIcon className="size-3 text-neutral-400" />
                      <RiVolumeUpFill className="size-3 text-neutral-400" />
                    </div>
                  </TooltipButton>
                  <p className="text-sm text-neutral-400">Admin</p>
                </div>
                <div className="hidden items-center gap-1 group-hover/channel:inline-flex">
                  <TooltipButton placement="top" content="Create Invite">
                    <UserPlusIcon className="size-4 text-neutral-400" />
                  </TooltipButton>
                  <TooltipButton placement="top" content="Edit Channel">
                    <RiSettings2Fill className="size-4 text-neutral-400" />
                  </TooltipButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showGuildMenu && (
          <div
            id="guildMenu"
            className={`absolute mt-16 ml-4 mr-4 p-2 bg-neutral-800 shadow-2xl flex gap-1 flex-col w-[calc(100%-2rem)] rounded-md text-xs border border-neutral-700`}
          >
            <button className="group inline-flex w-full justify-between items-center p-2 hover:bg-indigo-500 rounded-md">
              <p className="text-indigo-400 group-hover:text-white">
                Invite People
              </p>
              <UserPlusIcon className="size-4 text-indigo-400 group-hover:text-white" />
            </button>
            <button className="group inline-flex w-full justify-between items-center p-2 hover:bg-indigo-500 rounded-md">
              <p>Guild Settings</p>
              <RiSettings2Fill className="size-4 text-neutral-400 group-hover:text-white" />
            </button>
            <button className="group inline-flex w-full justify-between items-center p-2 hover:bg-indigo-500 rounded-md">
              <p>Create Channel</p>
              <RiAddCircleFill className="size-4 text-neutral-400 group-hover:text-white" />
            </button>
            <button className="group inline-flex w-full justify-between items-center p-2 hover:bg-indigo-500 rounded-md">
              <p>Create Category</p>
              <FolderPlusIcon className="size-4 text-neutral-400 group-hover:text-white" />
            </button>
            <div className="w-full h-px bg-neutral-700 block rounded-md"></div>
            <button className="group inline-flex w-full justify-between items-center p-2 hover:bg-indigo-500 rounded-md">
              <p>Notification Settings</p>
              <BellIcon className="size-4 text-neutral-400 group-hover:text-white" />
            </button>
            <button className="group inline-flex w-full justify-between items-center p-2 hover:bg-indigo-500 rounded-md">
              <p>Privacy Settings</p>
              <RiShieldStarFill className="size-4 text-neutral-400 group-hover:text-white" />
            </button>
            <div className="w-full h-px bg-neutral-700 block rounded-md"></div>
            <button className="group inline-flex w-full justify-between items-center p-2 hover:bg-red-500 rounded-md">
              <p className="text-red-400 group-hover:text-white">
                Leave Server
              </p>
              <PlusCircleIcon className="size-4 text-red-400 group-hover:text-white" />
            </button>
          </div>
        )}
      </div>
      <div className="absolute top-1/2"></div>
    </React.Fragment>
  );
};
