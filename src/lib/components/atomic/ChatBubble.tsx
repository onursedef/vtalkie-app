import TestImage from "@assets/test.png";
import TestGif from "@assets/test.gif";

type ChatBubbleProps = {
    userImage: string;
    userImageGif?: string;
    username: string;
    date: string;
    children: React.ReactNode;
};

export const ChatBubble = ({ userImage, userImageGif, username, date, children}: ChatBubbleProps) => {
  return (
    <div className="flex gap-3 p-4 group/message hover:bg-neutral-700/45">
      <div>
        <img
          src={userImage}
          alt="Test"
          className={`size-10 rounded-full ${userImageGif != null || userImageGif != undefined ? 'group-hover/message:hidden' : ''}`}
        />
        {userImageGif != null || userImageGif != undefined ? (
            <img
            src={TestGif}
            alt="Test"
            className="size-10 rounded-full hidden group-hover/message:block"
          />
        ) : null}
      </div>
      <div className="flex-flex-col gap-1">
        <div className="flex items-center gap-2">
          <p className="text-red-500">{username}</p>
          <p className="text-neutral-400 text-xs font-light">
            {date}
          </p>
        </div>
        <p className="prose-sm leading-3 prose-invert select-text">
          {children}
        </p>
      </div>
    </div>
  );
};
