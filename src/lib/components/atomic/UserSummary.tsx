import React from "react";

type UserSummaryProps = {
  userImage: string;
  userImageGif?: string;
  username: string;
  roleColor?: string;
  status: "online" | "offline" | "idle" | "dnd" | "streaming";
  children: React.ReactNode;
};

export const UserSummary = ({
  userImage,
  userImageGif,
  username,
  roleColor,
  status,
  children,
}: UserSummaryProps) => {
  var statusColor: string = "bg-green-500";

  switch (status) {
    case "online":
      statusColor = "bg-green-500";
      break;
    case "offline":
      statusColor = "bg-red-500";
      break;
    case "idle":
      statusColor = "bg-yellow-500";
      break;
    case "dnd":
      statusColor = "bg-red-500";
      break;
    case "streaming":
      statusColor = "bg-purple-500";
      break;
  }

  return (
    <div className="group flex items-center gap-2 px-3 py-2 hover:bg-neutral-800 rounded-md">
      <div className="relative overflow-visible">
        <img
          src={userImage}
          alt="Test"
          className={`size-8 rounded-full ${userImageGif ? "group-hover:hidden" : ""}`}
        />
        {userImageGif && (
          <img
            src={userImageGif}
            alt="Test"
            className="size-8 rounded-full hidden group-hover:block"
          />
        )}
        <div
          className={`absolute bottom-0 right-0 w-[10px] h-[10px] ${statusColor} ring-2 ring-neutral-950 rounded-full`}
        ></div>
      </div>
      <div className="flex flex-col">
        {/* <p className="text-red-500 text-sm">{username}</p> */}
        <div className="inline-flex gap-1 items-center">
            <p className="text-red-500 text-sm">{username}</p>
            <p className="text-neutral-400 text-xs opacity-0 group-hover:opacity-100">#123</p>
        </div>
        <div className="inline-flex items-center gap-1">{children}</div>
      </div>
    </div>
  );
};
