"use client";
import { useEffect, useState } from "react";
import Notification from "./Notification";
import { ProductCardProps } from "@/utils/types";

export default function AddToCartButton({ title }: ProductCardProps) {
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
        `Item "${item}" adicionado ao carrinho!`,
      ]);
    } else {
      setWaitingNotifications((prevNotifications) => [
        ...prevNotifications,
        `Item "${item}" adicionado ao carrinho!`,
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
        className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-full transition-colors duration-300 ease-in-out hover:bg-purple-800 bottom-0"
        onClick={() => handleAddToCart(title)}
      >
        Adicionar ao carrinho
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
