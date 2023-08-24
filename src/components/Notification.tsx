"use client";
import { NotificationProps } from "@/utils/types";
import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Notification({ message, onClose }: NotificationProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 10000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={`fixed top-0 right-0 m-4 transition-transform ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}
    >
      <div className="text-center py-4 lg:px-4">
        <div
          className="p-2 bg-purple-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-purple-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            Novo
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            {message}
          </span>
          <button onClick={onClose} className="text-white">
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
