import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Position = "top" | "bottom" | "left" | "right";

type TooltipButtonProps = {
  placement: Position;
  content: string;
  color?: string;
  children: React.ReactNode;
};

const getBackgroundColor = (color?: string) => {
  switch (color) {
    case "red":
      return "bg-red-500/75";
    case "green":
      return "bg-green-500/75";
    case "blue":
      return "bg-blue-500/75";
    case "yellow":
      return "bg-yellow-500/75";
    default:
      return "bg-neutral-950/75";
  }
};

const TooltipButton = ({ placement, content, color, children }: TooltipButtonProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const updateTooltipPosition = () => {
    if (!targetRef.current || !tooltipRef.current) return;

    const targetRect = targetRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (placement) {
      case "top":
        top = targetRect.top - tooltipRect.height - 8;
        left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
        break;
      case "bottom":
        top = targetRect.bottom + 8;
        left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
        break;
      case "left":
        top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
        left = targetRect.left - tooltipRect.width - 8;
        break;
      case "right":
        top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
        left = targetRect.right + 8;
        break;
    }

    // Prevent tooltip from going off screen
    const padding = 8;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (left + tooltipRect.width + padding > screenWidth) {
      left = screenWidth - tooltipRect.width - padding;
    }
    if (left < padding) {
      left = padding;
    }

    if (top + tooltipRect.height + padding > screenHeight) {
      top = screenHeight - tooltipRect.height - padding;
    }
    if (top < padding) {
      top = padding;
    }

    setTooltipPosition({ top, left });
  };

  useEffect(() => {
    if (showTooltip) {
      updateTooltipPosition();
      window.addEventListener("scroll", updateTooltipPosition);
      window.addEventListener("resize", updateTooltipPosition);

      return () => {
        window.removeEventListener("scroll", updateTooltipPosition);
        window.removeEventListener("resize", updateTooltipPosition);
      };
    }
  }, [showTooltip]);

  const bgColorClass = getBackgroundColor(color);

  return (
    <>
      <div
        ref={targetRef}
        className="inline-flex items-center w-fit h-fit"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
      {showTooltip &&
        createPortal(
          <div
            ref={tooltipRef}
            className={`fixed px-3 py-2 ${bgColorClass} backdrop-blur-sm rounded-md text-xs 
              pointer-events-none transition-all duration-150 
              shadow-lg
              ${showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
            style={{
              top: tooltipPosition.top,
              left: tooltipPosition.left,
              zIndex: 99999,
            }}
          >
            <p className="text-neutral-200 whitespace-nowrap font-semibold">{content}</p>
          </div>,
          document.body 
        )}
    </>
  );
};

export default TooltipButton;