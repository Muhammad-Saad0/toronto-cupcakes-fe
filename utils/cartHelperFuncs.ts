import { CartItemType, CupcakeType } from "@/types/types";

export const initializeCart = (): CartItemType[] => {
    const cart = localStorage.getItem('cart');
    
    return cart ? JSON.parse(cart) : [];
  };

const saveCartToLocalStorage = (cart: CartItemType[]): void => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  export const addToCart = (item: CupcakeType): void => {
    let cart = initializeCart();
    const foundItem = cart.find((cartItem) => cartItem.id === item.id);
  
    if (foundItem) {
      foundItem.quantityInCart += 1;
    } else {
      const newItem: CartItemType = { ...item, quantityInCart: 1 };
      cart = [...cart, newItem];
    }
  
    saveCartToLocalStorage(cart);
  };
  
  export const removeFromCart = (itemId: string): void => {
    let cart = initializeCart();
    cart = cart.filter((item) => item.id !== itemId);
    saveCartToLocalStorage(cart);
  };

  export const clearCart = (): void => {
    localStorage.removeItem('cart');
  };
  