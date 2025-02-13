import { PlusIcon } from "@heroicons/react/24/solid";
import { RiSendPlaneFill } from "@remixicon/react";

type ChatInputProps = {
  channel: string;
  isShowMemberListOpen: boolean;
};

export const ChatInput = ({ channel, isShowMemberListOpen }: ChatInputProps) => {
  return (
    <div className={`absolute bottom-0 ${isShowMemberListOpen ? 'right-60' : 'right-0'} left-0 flex items-center gap-2 p-4 border-t border-neutral-700 bg-neutral-900/25`}>
      <div className="flex items-center pl-2 py-2 w-full bg-neutral-900 rounded-md ">
        <div className="w-fit h-fit p-2 bg-neutral-600 hover:bg-neutral-700 rounded-full transition-colors">
          <PlusIcon className="size-4 text-white" />
        </div>
        <input
          type="text"
          className="w-full p-2 bg-transparent focus:outline-none"
          placeholder={`Message #${channel}`}
        />
      </div>
      <button
        type="submit"
        className="p-3 hover:bg-neutral-700 rounded-full hover:bg-primary-700 transition-colors"
      >
        <RiSendPlaneFill className="size-4 text-white rotate-45 -translate-x-[2px]" />
      </button>
    </div>
  );
};
