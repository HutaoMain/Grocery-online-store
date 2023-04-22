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
