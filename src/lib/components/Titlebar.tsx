import { getCurrentWindow } from "@tauri-apps/api/window";
import { useState, useEffect } from "react";

export const Titlebar = () => {
  const [maximized, setMaximized] = useState(false);
  const appWindow = getCurrentWindow();

  useEffect(() => {
    const handleMinimize = () => appWindow.minimize();
    const handleMaximizeToggle = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100)); // Add a slight delay
      const isMax = await appWindow.isMaximized();
      if (isMax) {
        appWindow.unmaximize();
        setMaximized(false);
      } else {
        appWindow.maximize();
        setMaximized(true);
      }
    };

    document
      .getElementById("titlebar-minimize")
      ?.addEventListener("click", handleMinimize);
    document
      .getElementById("titlebar-maximize")
      ?.addEventListener("click", handleMaximizeToggle);
    document
      .getElementById("titlebar-close")
      ?.addEventListener("click", () => appWindow.close());

    const init = async () => {
      const isMax = await appWindow.isMaximized();
      setMaximized(isMax);
    };

    init();

    return () => {
      document
        .getElementById("titlebar-minimize")
        ?.removeEventListener("click", handleMinimize);
      document
        .getElementById("titlebar-maximize")
        ?.removeEventListener("click", handleMaximizeToggle);
      document
        .getElementById("titlebar-close")
        ?.removeEventListener("click", () => appWindow.close());
    };
  }, [appWindow]);

  return (
    <div
      data-tauri-drag-region="true"
      id="titlebar"
      className="flex items-center justify-between bg-neutral-950 pl-3"
    >
      <p className="py-1 text-neutral-400 text-xs font-krone-one tracking-wide" style={{
        "WebkitAppRegion": "drag"
      }}>
        vtalkie
      </p>
      <div className="inline-flex">
        <button
          id="titlebar-minimize"
          className="group appearance-none focus:outline-none focus:ring-0 focus:border-none inline-flex items-center justify-center h-6 w-10 hover:bg-neutral-800 transition-colors duration-200"
        >
          <svg
            className="size-4 text-neutral-400 group-hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        </button>
        <button
          id="titlebar-maximize"
          className="group appearance-none focus:outline-none focus:ring-0 focus:border-none inline-flex items-center justify-center h-6 w-10 hover:bg-neutral-800 transition-colors duration-200 scale-x-[-1]"
        >
          {!maximized ? (
            <div className="size-3 border border-neutral-400 rounded-sm group-hover:border-white" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 text-neutral-400 group-hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
              />
            </svg>
          )}
        </button>
        <button
          id="titlebar-close"
          className="group appearance-none focus:outline-none focus:ring-0 focus:border-none inline-flex items-center justify-center h-6 w-10 hover:bg-red-500 transition-colors duration-200"
        >
          <svg
            className="size-4 text-neutral-400 group-hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
