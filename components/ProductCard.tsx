"use client";
import { CupcakeType } from "@/types/types";
import { addToCart } from "@/utils/cartHelperFuncs";
import React from "react";
import { useTransition } from "react";
import { toast } from "react-toastify";

type Props = {
  Cupcake: CupcakeType;
};

const ProductCard = ({ Cupcake }: Props) => {
  const addToCartHandler = () => {
    try {
      addToCart(Cupcake);
      console.log(Cupcake);
      toast.success("Cupcake Added successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(error);
      toast.error("Error adding cupcake in cart, try again", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center font-averia rounded-t-full">
      <div className="shadow-md hover:scale-105 hover:shadow-xl duration-300 hover:shadow-[#3D0C11] rounded-t-full">
        <img
          src={Cupcake.image}
          alt={Cupcake.imageAlt}
          className="h-80 w-64 rounded-t-full m-auto"
        />
        <div className="px-4 py-3 w-72">
          <p className="text-xl font-bold text-[#3D0C11] truncate block capitalize mb-3">
            {Cupcake.name}
          </p>
          <span className="text-[#3D0C11] mr-3 uppercase text-md">
            {Cupcake.description}
          </span>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-[#3D0C11] cursor-auto my-3">
              {Cupcake.price}
            </p>
            <div className="ml-auto">
              <button
                onClick={addToCartHandler}
                className="rounded-tl-3xl rounded-bl-3xl text-white font-medium text-lg bg-[#D14D72] group border-2 px-6 py-2 my-2 flex justify-between gap-2 items-center hover:bg-[#c9c8aa] hover:text-[#3D0C11] hover:border-[#3D0C11] active:bg-white"
              >
                Add To Cart
                <svg
                  className="w-8 h-8 text-white dark:text-white group-hover:text-[#3D0C11]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
