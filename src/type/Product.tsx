export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number | string;
  category: string;
  unit: string;
  description?: string;
  supplier: string;
  rating: number;
  reviews: number;
  isOrganic?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface DeliveryOrder {
  id: number;
  customerName: string;
  customerPhone: string;
  pickupAddress: string;
  deliveryAddress: string;
  items: string[];
  totalValue: number;
  distance: string;
  estimatedTime: string;
  status: 'pending' | 'accepted' | 'picked_up' | 'delivered' | 'cancelled';
  paymentMethod: string;
  deliveryFee: number;
}