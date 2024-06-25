"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import { AddressType } from '@/types/types';
import { getAddressFromLocalStorage, saveAddressToLocalStorage } from '@/utils/helperFunctions';

type AddressFormProps = {
    addressData: AddressType
    setAddressData: React.Dispatch<React.SetStateAction<AddressType>>
    setShowAddressModal: React.Dispatch<React.SetStateAction<boolean>>
    handleContinuePressed: (event: React.FormEvent<HTMLFormElement>) => void
}

const AddressForm: React.FC<AddressFormProps> = ({ setAddressData, addressData, setShowAddressModal, handleContinuePressed }) => {
    // useEffect(() => {
    //     const savedAddress = getAddressFromLocalStorage();
    //     if (savedAddress) {
    //         setAddressData(savedAddress);
    //     }
    // }, []);

    // useEffect(() => {
    //     saveAddressToLocalStorage(addressData);
    //     console.log(addressData)
    // }, [addressData]);

    return (
        <div className='fixed top-0 left-0 z-50 flex-col items-center justify-center w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm'>
            <div className="w-full max-w-4xl my-auto mx-auto p-8">
                <form onSubmit={handleContinuePressed}>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
                    <div
                        onClick={() => setShowAddressModal(false)}
                        className='absolute right-10 top-10 w-[40px] h-[40px] cursor-pointer hover:scale-[1.3] hover:duration-200'>

                        <svg className="w-10 h-10 text-[#3D0C11] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-[#3D0C11] dark:text-white mb-4 font-marcellus">Checkout</h1>
                    <div className="mb-6 font-averia">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-2">Shipping Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="first_name" className="block text-[#3D0C11] mb-1 text-xl">First Name</label>
                                <input 
                                    required
                                    onChange={(event) => setAddressData((prevState) => {
                                        return {...prevState, firstName: event.target.value}
                                    })}
                                    value={addressData.firstName}
                                    type="text" id="first_name" pattern="^[a-zA-Z]+$" title="Only letters are allowed." className="w-full border-b-2 border-[#3D0C11] p-2 rounded-md text-lg" />
                                </div>
                            <div>
                                <label htmlFor="last_name" className="block text-[#3D0C11] mb-1 text-xl">Last Name</label>
                                <input 
                                    required
                                    value={addressData.lastName}
                                    onChange={(event) => { setAddressData({ ...addressData, lastName: event.target.value }) }}
                                    type="text" id="last_name" pattern="^[a-zA-Z]+$" title="Only letters are allowed." className="w-full border-b-2 border-[#3D0C11] p-2 rounded-md text-lg" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="addressData" className="block text-[#3D0C11] mb-1 text-xl">Full Address</label>
                            <input
                                value={addressData.fullAddress}
                                onChange={(event) => { setAddressData({ ...addressData, fullAddress: event.target.value }) }}
                                type="text" id="addressData" pattern="^[a-zA-Z0-9\s,.'-]{3,}$" title="Address should be at least 3 characters long and contain letters, numbers, spaces, and some punctuation marks." className="w-full border-b-2 border-[#3D0C11] p-2 rounded-md text-lg" />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="phone_number" className="block text-[#3D0C11] mb-1 text-xl">Phone Number</label>
                            <input 
                                required
                                value={addressData.phoneNumber}
                                onChange={(event) => { setAddressData({ ...addressData, phoneNumber: event.target.value }) }}
                                type="text" id="phone_number" pattern="^\+?[0-9]{1,4}?[-.\s]?(\([0-9]{1,3}\)|[0-9]{1,3})[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$" title="Enter a valid phone number with optional country code." className="w-full border-b-2 border-[#3D0C11] p-2 rounded-md text-lg" />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="email" className="block text-[#3D0C11] mb-1 text-xl">Email</label>
                                <input 
                                    required
                                    value={addressData.email}
                                    onChange={(event) => { setAddressData({ ...addressData, email: event.target.value }) }}
                                    type="email" id="email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" title="Enter a valid email." className="w-full border-b-2 border-[#3D0C11] p-2 rounded-md text-lg" />
                            </div>
                            <div>
                                <label htmlFor="zip" className="block text-[#3D0C11] mb-1 text-xl">ZIP Code</label>
                                <input 
                                    required
                                    value={addressData.zipCode}
                                    onChange={(event) => { setAddressData({ ...addressData, zipCode: event.target.value }) }}
                                    type="text" id="zip" pattern="^\d{5}(-\d{4})?$" title="Enter a valid ZIP code (e.g., 12345 or 12345-6789)." className="w-full border-b-2 border-[#3D0C11] p-2 rounded-md text-lg" />
                            </div>
                        </div>
                    </div>
                    <button
                    className='text-white mx-auto w-1/2 text-lg md:text-xl font-semibold mt-20 bg-[#D14D72] group border-2 rounded-full font-averia px-10 py-4 flex justify-between gap-2 items-center active:bg-white'>
                        Continue
                    <span className='group-hover:translate-x-2 duration-300'>
                        <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z" clipRule="evenodd" />
                </svg>
                </span>
            </button>
            </div>
        </form>
    </div>
    </div>
    );
}

export default AddressForm;
