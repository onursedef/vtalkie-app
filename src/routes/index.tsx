import { createFileRoute } from "@tanstack/react-router";
import { ServerInfo } from "@components/ServerInfo";
import { ServerList } from "@components/ServerList";
import { Titlebar } from "@components/Titlebar";
import { UserInfo } from "@components/UserInfo";
import {
  RiAtLine,
  RiHashtag,
  RiQuestionMark,
  RiSendPlaneFill,
  RiSpotifyFill,
} from "@remixicon/react";
import { LockClosedIcon, PlusIcon, UsersIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import TestImage from "@assets/test.png";
import TestGif from "@assets/test.gif";
import { ChatBubble } from "@components/atomic/ChatBubble";
import { ChatInput } from "@components/atomic/ChatInput";
import { UserSummary } from "@components/atomic/UserSummary";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [showMemberList, setShowMemberList] = useState(true);

  return (
    <div className="h-screen flex flex-col font-nunito text-white select-none">
      {/* Title bar */}
      <Titlebar />

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden bg-neutral-950">
        {/* Server list */}
        <ServerList />

        {/* Server info */}
        <div className="w-56 flex flex-col justify-between flex-shrink-0">
          <ServerInfo />
          <UserInfo />
        </div>

        {/* Content area */}
        <div className="relative flex flex-col flex-1 bg-neutral-800">
          <div className="absolute top-0 right-0 left-0 px-4 py-3 flex items-center justify-between font-semibold border-b border-neutral-700 shadow-lg bg-neutral-800">
            <div className="inline-flex items-center">
              <LockClosedIcon className="size-3 text-neutral-400" />
              <RiHashtag className="size-3 text-neutral-400 mr-2" />
              <p className="text-neutral-400">general</p>
            </div>
            {/* Search */}
            <div className="flex gap-4 w-96 justify-end">
              <div className="group relative flex items-center justify-center">
                <button onClick={() => setShowMemberList(!showMemberList)} className="hover:bg-neutral-700/50 p-1.5 rounded-md transition-colors">
                  <UsersIcon className="size-4 text-neutral-400" />
                </button>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute -bottom-8 -left-10 px-3 py-2 bg-neutral-950/50 backdrop-blur-sm rounded-md text-xs z-[9999] transition-all whitespace-nowrap">
                  <p className="text-neutral-200">{showMemberList ? 'Hide member list' : 'Show member list'}</p>
                </div>
              </div>
              <div className="relative w-48">
                <MagnifyingGlassIcon className="absolute right-2 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
                <input
                  type="text"
                  className="w-full pl-3 pr-8 py-1.5 bg-neutral-900 rounded-md focus:outline-none"
                  placeholder="Search"
                />
              </div>
              <div className="group relative flex items-center">
                <button className="hover:bg-neutral-700/50 p-1.5 rounded-md transition-colors">
                  <RiAtLine className="size-4 text-neutral-400" />
                </button>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute -bottom-8 -left-5 px-3 py-2 bg-neutral-950/50 backdrop-blur-sm rounded-md text-xs z-[9999] transition-all">
                  <p className="text-neutral-200">Mentions</p>
                </div>
              </div>
              <div className="group relative flex items-center">
                <button className="hover:bg-neutral-700/50 p-1.5 rounded-md transition-colors">
                  <RiQuestionMark className="size-4 text-neutral-400" />
                </button>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute -bottom-8 -left-2 px-3 py-2 bg-neutral-950/50 backdrop-blur-sm rounded-md text-xs z-[9999] transition-all">
                  <p>Help</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex mt-16">
            {/* Chat */}
            <div className="flex-1 bg-neutral-800">
              <div className="h-full flex flex-col">
                {/* Chat */}
                <div className="flex flex-col gap-1 flex-1 overflow-y-auto mb-[9.5rem]">
                  <ChatBubble
                    userImage={TestImage}
                    userImageGif={TestGif}
                    username="irukaga"
                    date="7/15/2024 1:03 AM"
                  >
                    <h1>Linkin Park - Bleed it out</h1>
                  </ChatBubble>
                  <ChatBubble
                    userImage={TestImage}
                    username="irukaga"
                    date="7/15/2024 1:03 AM"
                  >
                    <p>Long text ngl</p>
                  </ChatBubble>
                </div>
              </div>
              {/* Chat input */}
              <ChatInput channel="general" isShowMemberListOpen={showMemberList} />
            </div>
            {/* User List */}
            {showMemberList && (
              <div className="w-60 bg-neutral-900">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-neutral-500 font-bold px-5 pt-6">
                      DEVELOPERS - 1
                    </p>
                    <div className="flex flex-col px-2">
                      <UserSummary
                        userImage={TestImage}
                        userImageGif={TestGif}
                        username="irukaga"
                        status="online"
                      >
                        <RiSpotifyFill className="size-3 text-green-500" />
                        <p className="text-neutral-400 text-xs w-36 whitespace-nowrap text-ellipsis overflow-hidden">
                          Listening to "Papa Roach - Last Resort"
                        </p>
                      </UserSummary>
                      <div className="flex items-center gap-2 px-3 py-2 hover:bg-neutral-800 rounded-md">
                        <div className="relative overflow-visible">
                          <img
                            src={TestImage}
                            alt="Test"
                            className="size-8 rounded-full"
                          />
                          <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 ring-2 ring-neutral-950 rounded-full"></div>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-red-500 text-sm">irukaga</p>
                          <div className="inline-flex items-center gap-1">
                            <p className="text-neutral-400 text-xs w-36 whitespace-nowrap text-ellipsis overflow-hidden">
                              Listening to "Papa Roach - Last Resort"
                            </p>
                            <RiSpotifyFill className="size-3 text-green-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
