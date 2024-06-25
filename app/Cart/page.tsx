"use client";
import AddressForm from "@/components/AddressForm";
import CartItem from "@/components/CartItem";
import { AddressType, CartItemType } from "@/types/types";
import { initializeCart, removeFromCart } from "@/utils/cartHelperFuncs";
import {
  calculateDeliveryCharge,
  getAddressFromLocalStorage,
  saveAddressToLocalStorage,
} from "@/utils/helperFunctions";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function page() {
  const [showAddressModal, setShowAddressModal] = useState<boolean>(false);
  const [addressData, setAddressData] = useState<AddressType>({
    firstName: "",
    lastName: "",
    fullAddress: "",
    phoneNumber: "",
    email: "",
    zipCode: "",
  });
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [totalDeliveryCharge, setTotalDeliveryCharge] =
    useState<number>(0);

  const handleDeleteItem = (itemId: string) => {
    removeFromCart(itemId);
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  const handleContinueToPayment = () => {
    var toastText;

    for (let key in addressData) {
      if (addressData[key as keyof AddressType] === "") {
        toastText = "Please Enter your Address.";
      } else {
        toastText = "Confirm Address Data is Correct";
      }
    }

    setShowAddressModal(true);
    toast.info(toastText, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleModalContinuePressed = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    console.log("data saved");
    saveAddressToLocalStorage(addressData);

    const stripe = await stripePromise;

    const stripeItems = cartItems.map((item) => ({
      item_id: item.id,
      quantity: item.quantityInCart,
    }));

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout/create-stripe-checkout-session`,
        {
          items: stripeItems,
          address: addressData,
        }
      );

      const sessionId = response.data.id;

      const { error } = await stripe!.redirectToCheckout({
        sessionId: sessionId,
      });

      if (error) {
        console.error("Error redirecting to checkout:", error);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  const loadAddressFromLocalStorage = () => {
    const savedAddress = getAddressFromLocalStorage();
    console.log(savedAddress);
    if (savedAddress != null) {
      setAddressData(savedAddress as AddressType);
    }
  };

  useEffect(() => {
    loadAddressFromLocalStorage();
    const cart = initializeCart();
    // if null then show something else
    if (cart) {
      setCartItems(cart);
    }
  }, []);

  useEffect(() => {
    let totalSum = 0;

    cartItems.forEach((item) => {
      totalSum += item.price * item.quantityInCart;
    });

    setSubTotal(totalSum);
    setTotalDeliveryCharge(calculateDeliveryCharge(totalSum));
  }, [cartItems]);

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center font-averia text-[#3D0C11]">
          Your Cart
        </h2>
        <div className="hidden lg:grid grid-cols-2 py-6">
          <div className="font-normal text-xl leading-8 text-gray-500">
            Product
          </div>
          <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
            <span className="w-full max-w-[200px] text-center">
              Delivery Charge
            </span>
            <span className="w-full max-w-[260px] text-center">
              Quantity
            </span>
            <span className="w-full max-w-[200px] text-center">Total</span>
          </p>
        </div>

        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleDelete={handleDeleteItem}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}

        {showAddressModal && (
          <AddressForm
            addressData={addressData}
            setAddressData={setAddressData}
            setShowAddressModal={setShowAddressModal}
            handleContinuePressed={handleModalContinuePressed}
          />
        )}
        <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
          <div className="flex items-center justify-between w-full mb-6">
            <p className="font-normal text-xl leading-8 text-[#3D0C11]">
              Sub Total
            </p>
            <h6 className="font-semibold text-2xl leading-8 text-[#3D0C11]">
              ${subTotal.toFixed(2)}
            </h6>
          </div>
          <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
            <p className="font-normal text-xl leading-8 text-[#3D0C11]">
              Delivery Charge
            </p>
            <h6 className="font-semibold text-2xl leading-8 text-[#3D0C11]">
              ${totalDeliveryCharge.toFixed(2)}
            </h6>
          </div>
          <div className="flex items-center justify-between w-full py-6">
            <p className="font-marcellus font-medium text-2xl leading-9 text-[#3D0C11]">
              Total
            </p>
            <h6 className="font-manrope font-medium text-3xl leading-9 text-[#D14D72]">
              ${(totalDeliveryCharge + subTotal).toFixed(2)}
            </h6>
          </div>
        </div>
        <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8 text-lg md:text-xl">
          <button
            onClick={handleContinueToPayment}
            className="text-[#3D0C11] font-semibold bg-[#c9c8aa] group px-6 py-3 my-2 flex justify-between gap-2 items-center hover:bg-[#D14D72] hover:text-white active:bg-[#3D0C11] rounded-full"
          >
            <span className="px-2 font-semibold leading-8">
              Pay on Delivery
            </span>
            <span className="group-hover:translate-x-2 duration-300 ">
              <svg
                className="w-6 h-6 group-hover:text-white"
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
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </span>
          </button>
          <button
            onClick={handleContinueToPayment}
            className="text-white font-semibold bg-[#D14D72] group px-6 py-3 my-2 flex justify-between gap-2 items-center active:bg-white rounded-full"
          >
            Continue to Payment
            <span className="group-hover:translate-x-2 duration-300 ">
              <svg
                className="w-6 h-6 text-white"
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
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
