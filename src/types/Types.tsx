export interface CategoryInterface {
  id: string;
  categoryName: string;
  imageUrl: string;
}

export interface UserInterface {
  id: string;
  email: string;
  name: string;
  imageUrl: string;
  userRole: string;
  street: string;
  barangay: string;
  postalCode: number;
  municipality: string;
  city: string;
  contactNumber: number;
}

export interface ProductInterface {
  id: string;
  productName: string;
  imageUrl: string;
  description: string;
  price: number;
  quantity: number;
  category: any;
  sold: number;
}

export interface shippingAdd {
  street: string;
  barangay: string;
  postalCode: number;
  municipality: string;
  city: string;
  contactNumber: number;
  paymentMethod: string;
}

export interface orderInterface {
  id: string;
  email: string;
  userFullName: string;
  totalPrice: number;
  orderList: string;
  status: string;
  paymentMethod: string;
  receipt: string;
}

export interface orderListInterface {
  id: string;
  imageUrl: string;
  description: string;
  price: number;
  productName: string;
  quantity: number;
  sold: number;
}
