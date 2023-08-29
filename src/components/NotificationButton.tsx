"use client";
import { useEffect, useState } from "react";
import Notification from "./Notification";
import { NotificationButtonProps } from "@/utils/types";

export default function NotificationButton({
  title,
  button,
  className,
}: NotificationButtonProps) {
  const [cart, setCart] = useState<string[]>([]);
  const [activeNotifications, setActiveNotifications] = useState<string[]>([]);
  const [waitingNotifications, setWaitingNotifications] = useState<string[]>(
    []
  );

  useEffect(() => {
    if (waitingNotifications.length > 0 && activeNotifications.length < 2) {
      const [nextNotification, ...rest] = waitingNotifications;
      setActiveNotifications((prevNotifications) => [
        ...prevNotifications,
        nextNotification,
      ]);
      setWaitingNotifications(rest);
    }
  }, [activeNotifications, waitingNotifications]);

  const handleAddToCart = (item: string) => {
    setCart([...cart, item]);

    if (activeNotifications.length < 2) {
      setActiveNotifications((prevNotifications) => [
        ...prevNotifications,
        item,
      ]);
    } else {
      setWaitingNotifications((prevNotifications) => [
        ...prevNotifications,
        item,
      ]);
    }
  };

  const handleCloseNotification = (index: number) => {
    setActiveNotifications((prevNotifications) =>
      prevNotifications.filter((_, i) => i !== index)
    );
  };

  return (
    <div>
      <button
        type="submit"
        className={className}
        onClick={() => handleAddToCart(title)}
      >
        {button}
      </button>
      <div className="fixed">
        {activeNotifications.map((message, index) => (
          <Notification
            key={index}
            message={message}
            onClose={() => handleCloseNotification(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
