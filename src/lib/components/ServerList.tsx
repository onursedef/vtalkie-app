import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import { VTalkieIcon } from "../icons/vtalkie";

export const ServerList = () => {
  return (
    <div className="w-16 flex-shrink-0 flex flex-col items-center bg-neutral-950 py-3 justify-between">
      <div className="flex flex-col items-center space-y-3">
        <div className="group w-16 flex items-center justify-between pr-2">
          <div className="w-1 h-0 group-hover:h-4 rounded-r-md opacity-0 group-hover:opacity-100 bg-white transition-all duration-300" />
          <div className="group relative w-12 h-12 bg-gray-700 hover:bg-indigo-500 rounded-full flex items-center justify-center text-gray-400 hover:text-white cursor-pointer transform hover:rounded-2xl transition-all duration-100 ease-in-out hover:scale-105">
            <VTalkieIcon className="w-10 h-10 transition-transform duration-200 ease-in-out hover:scale-95" />
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-full ml-2 px-3 py-2 bg-neutral-950/90 backdrop-blur-sm rounded-md text-xs whitespace-nowrap transition-all">
              <p className="text-neutral-200">Change Server</p>
            </div>
          </div>
        </div>
        <div className="w-14 h-[2px] bg-gray-700 rounded-full" />
      </div>
      <div className="group relative w-12 h-12 bg-gray-700 hover:bg-green-500 rounded-full flex items-center justify-center text-green-500 hover:text-white cursor-pointer transform hover:rounded-2xl transition-all duration-100 ease-in-out hover:scale-105 z-40">
        <PlusIcon className="size-5" />
        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-full ml-2 px-3 py-2 bg-neutral-950/90 backdrop-blur-sm rounded-md text-xs whitespace-nowrap transition-all">
          <p className="text-neutral-200">Add Server</p>
        </div>
      </div>
    </div>
  );
};
