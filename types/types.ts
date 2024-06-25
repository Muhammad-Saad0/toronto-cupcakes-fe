export type CupcakeCategoryType =
  | "Always Available"
  | "Holidays"
  | "Special Events"
  | "Custom"
  | "All";

export type CupcakeType = {
  id: string;
  name: string;
  description: string;
  type: CupcakeCategoryType;
  price: number;
  image: string;
  imageAlt: string;
};

export type CartItemType = CupcakeType & {
  quantityInCart: number;
};

export type AddressType = {
  firstName: string;
  lastName: string;
  fullAddress: string;
  phoneNumber: string;
  email: string;
  zipCode: string;
};
