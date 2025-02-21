import { PhoneIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import {
  RiSignalTowerFill,
  RiMicFill,
  RiVolumeUpFill,
  RiSettings2Fill,
} from "@remixicon/react";
import TestImage from "@assets/test.png";
import { ShareScreenIcon } from "../icons/ShareScreen";
import TooltipButton from "./atomic/TooltipButton";
import React from "react";
import CameraModal from "./atomic/CameraModal";

export const UserInfo = () => {
  const [showCameraSelectionModal, setShowCameraSelectionModal] = React.useState(false);

  return (
    <div className="mt-auto bottom-0 flex flex-col bg-neutral-950">
      <div className="flex flex-col justify-start px-3 py-3 text-sm border-b border-neutral-800">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <TooltipButton placement="top" content="168ms" color="green">
              <RiSignalTowerFill className="size-6 text-green-500" />
            </TooltipButton>
            <div className="flex flex-col">
              <span className="ml-2 text-xs text-green-500">
                Voice Connected
              </span>
              <TooltipButton placement="top" content="General / Mergen Games">
                <span className="ml-2 text-xs text-neutral-300 w-20 overflow-hidden whitespace-nowrap text-ellipsis">
                  General / Mergen Games
                </span>
              </TooltipButton>
            </div>
          </div>
          <TooltipButton placement="top" content="Leave call">
            <button type="button" className="p-2 hover:bg-neutral-800 rounded-md">
              <PhoneIcon className="size-5 rotate-[135deg] text-neutral-400" />
            </button>
          </TooltipButton>
        </div>
        <div className="flex justify-evenly items-center pt-2 gap-2">
          <div className="group relative w-full">
            <button
              type="button"
              className="bg-neutral-800 hover:bg-neutral-800/75 px-3 py-2 rounded-md w-full flex items-center justify-center"
              onClick={() => setShowCameraSelectionModal(true)}>
              <VideoCameraIcon className="size-6 text-neutral-400" />
            </button>
            <div className="absolute -top-10  bg-neutral-900/75 backdrop-blur-md rounded-md w-full p-1.5 hidden group-hover:block">
              <span className="text-xs text-neutral-400">Turn on camera</span>
            </div>
          </div>
          <div className="group relative w-full">
            <button type="button" className="bg-neutral-800 hover:bg-neutral-800/75 px-3 py-2 rounded-md w-full flex items-center justify-center">
              <ShareScreenIcon className="size-6 text-neutral-400" />
            </button>
            <div className="absolute -top-10 left-2 bg-neutral-900/75 backdrop-blur-md rounded-md p-1.5 hidden group-hover:block whitespace-nowrap">
              <span className="text-xs text-neutral-400">Share screen</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-2 py-3 text-xs text-neutral-400">
        <div className="flex gap-2 items-center justify-center">
          <div className="relative flex-shrink-0">
            <img
              src={TestImage}
              alt="test"
              className="size-9 rounded-full -z-[99999]"
            />
            <div className="absolute -bottom-0 -right-0 w-[10px] h-[10px] rounded-full bg-green-500 ring-2 ring-neutral-950 border-neutral-950"/>
          </div>
          <div className="flex flex-col items-start">
            <span className="w-[3.5rem] font-semibold text-white text-xs overflow-hidden text-ellipsis whitespace-nowrap">
              irukaga
            </span>
            <p className="text-xs">#123</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <TooltipButton placement="top" content="Turn off microphone">
            <button type="button" className="p-1.5 hover:bg-neutral-800 transition-colors rounded-md">
              <RiMicFill className="size-4 text-neutral-400" />
            </button>
          </TooltipButton>
          <TooltipButton placement="top" content="Deafen">
            <button type="button" className="p-1.5 hover:bg-neutral-800 transition-colors rounded-md">
              <RiVolumeUpFill className="size-4 text-neutral-400" />
            </button>
          </TooltipButton>
          <TooltipButton placement="top" content="User Settings">
            <button type="button" className="p-1.5 hover:bg-neutral-800 transition-colors rounded-md">
              <RiSettings2Fill className="size-4 text-neutral-400" />
            </button>
          </TooltipButton>
        </div>
      </div>
      {showCameraSelectionModal && (
        <CameraModal showCameraModal={showCameraSelectionModal} setShowCameraModal={setShowCameraSelectionModal} />
      )}
    </div>
  );
};
