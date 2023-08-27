export interface Cart {
  total: number;
  items: CartItem[];
}

export interface CartItem {
  id: number;
  title: string;
  quantity: number;
  description: string;
  image: string;
  price: number;
}

export interface Post {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: Array<string>;
}
