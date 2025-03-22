import type React from "react";

import { useState, useRef, useEffect } from "react";
import Close from "../icons/Close";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "left" | "right";
  className?: string;
  title?: string;
}

export default function Drawer({
  isOpen,
  onClose,
  children,
  side = "left",
  className = "",
  title,
}: DrawerProps) {
  const [isClosing, setIsClosing] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node) &&
        isOpen
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      <div
        ref={drawerRef}
        className={`fixed ${
          side === "left" ? "left-0" : "right-0"
        } top-0 h-full w-full max-w-xs bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-gray-800 sm:max-w-md ${
          isClosing
            ? side === "left"
              ? "-translate-x-full "
              : "translate-x-full "
            : "translate-x-0 "
        } ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <div className="flex h-full flex-col overflow-y-auto p-6">
          <div className="flex items-center justify-between">
            <h2 id="drawer-title" className="text-lg font-medium">
              {title}
            </h2>
            <button
              onClick={handleClose}
              className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700"
              aria-label="Close drawer"
            >
              <Close />
            </button>
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
