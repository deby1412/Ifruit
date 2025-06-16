export interface CartItem {
  id: number; // ID local para controle no frontend
  produtoId: number; // ID do produto original (referência ao banco)
  nomeProduto: string;
  precoUnitario: number;
  precoOriginal?: number;
  imagemUrl: string;
  categoria: string;
  unidade: string;
  quantidade: number;
}

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

// Função auxiliar para converter um Product para CartItem
export function convertProductToCartItem(product: Product): CartItem {
  return {
    id: product.id,
    produtoId: product.id,
    nomeProduto: product.name,
    precoUnitario: product.price,
    precoOriginal: product.originalPrice,
    imagemUrl: product.image,
    categoria: product.category,
    unidade: product.unit,
    quantidade: 1
  };
}
