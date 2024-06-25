import { AddressType } from '@/types/types';
const LOCAL_STORAGE_KEY = 'address';

export const saveAddressToLocalStorage = (address: AddressType) => {
    try {
        const serializedAddress = JSON.stringify(address);
        localStorage.setItem(LOCAL_STORAGE_KEY, serializedAddress);
    } catch (error) {
        console.error('Error saving address to localStorage:', error);
    }
};

export const getAddressFromLocalStorage = (): AddressType | null => {
    try {
        const serializedAddress = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (serializedAddress === null) {
            return null;
        }
        return JSON.parse(serializedAddress);
    } catch (error) {
        console.error('Error fetching address from localStorage:', error);
        return null;
    }
};

export const calculateDeliveryCharge = (price: number): number => {
    return price * 0.05;
};

