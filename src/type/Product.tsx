export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: string;
  category: string;
  unit: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}