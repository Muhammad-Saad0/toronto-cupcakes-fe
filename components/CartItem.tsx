"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { CartItemType } from "@/types/types";
import { calculateDeliveryCharge } from "@/utils/helperFunctions";

type CartItemProps = {
  item: CartItemType;
  handleDelete: (id: string) => void;
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>; // o mottaa ji tussaan tu impress ni
};

const CartItem: React.FC<CartItemProps> = ({
  item,
  handleDelete,
  cartItems,
  setCartItems,
}) => {
  const [quantity, setQuantity] = useState<number>(item.quantityInCart);

  const handleItemQuantityIncrement = (itemID: string) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemID) {
        return {
          ...item,
          quantityInCart: item.quantityInCart + 1,
        };
      }
      return item;
    });

    setCartItems(updatedItems);
    setQuantity((prevState) => prevState + 1);
  };

  const handleItemQuantityDecrement = (itemID: string) => {
    if (quantity <= 1) return;

    const updatedItems = cartItems.map((item) => {
      if (item.id === itemID) {
        return {
          ...item,
          quantityInCart: item.quantityInCart - 1,
        };
      }
      return item;
    });

    setCartItems(updatedItems);
    setQuantity((prevState) => prevState - 1);
  };

  const deliveryCharge = calculateDeliveryCharge(item.price);

  useEffect(() => {}, [quantity]);

  return (
    <div className="font-averia">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
        <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
          <div className="img-box">
            <img
              src={item.image}
              alt="perfume bottle image"
              className="xl:w-[140px]"
            />
          </div>
          <div className="pro-data w-full max-w-sm ">
            <h5 className="font-semibold text-2xl leading-8 text-[#3D0C11] max-[550px]:text-center">
              {item.name}
            </h5>

            <h6 className="font-medium text-xl leading-8 text-[#D14D72] max-[550px]:text-center">
              $ {item.price} per cupcake
            </h6>
          </div>
        </div>
        <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
          <h6 className="font-manrope font-bold text-2xl leading-9 text-[#D14D72] w-full max-w-[176px] text-center">
            $ {deliveryCharge.toFixed(2)}{" "}
            <span className="text-sm text-black ml-3 lg:hidden whitespace-nowrap">
              (Delivery Charge)
            </span>
          </h6>
          <div className="flex items-center w-full mx-auto justify-center">
            <button
              onClick={() => {
                handleItemQuantityDecrement(item.id);
              }}
              className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
            >
              <svg
                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M16.5 11H5.5"
                  stroke=""
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M16.5 11H5.5"
                  stroke=""
                  stroke-opacity="0.2"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M16.5 11H5.5"
                  stroke=""
                  stroke-opacity="0.2"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <input
              value={quantity}
              type="text"
              className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
              placeholder="1"
            />
            <button
              onClick={() => handleItemQuantityIncrement(item.id)}
              className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
            >
              <svg
                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M11 5.5V16.5M16.5 11H5.5"
                  stroke=""
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M11 5.5V16.5M16.5 11H5.5"
                  stroke=""
                  stroke-opacity="0.2"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M11 5.5V16.5M16.5 11H5.5"
                  stroke=""
                  stroke-opacity="0.2"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <h6 className="text-[#3D0C11] font-manrope font-bold text-3xl leading-9 w-full max-w-[176px] text-center">
            ${(quantity * item.price).toFixed(2)}
          </h6>
        </div>
        <button
          onClick={() => handleDelete(item.id)}
          className="flex items-center justify-center text-white font-medium bg-red-700 group border-2 px-3 py-3 rounded-full w-full lg:w-[140px] hover:bg-[#c9c8aa] hover:text-[#3D0C11] hover:border-[#3D0C11] font-averia text-xl active:bg-white"
        >
          Delete
          <svg
            className="w-6 h-6 ml-1 text-white group-hover:text-[#3D0C11]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
