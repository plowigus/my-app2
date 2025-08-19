export interface ProductImage {
  id: number;
  url: string;
  is_main: boolean;
  order: number;
  updated_at: string;
}

export interface ProductVariant {
  id: number;
  product_id: number;
  size: string;
  stock: number;
  is_active: boolean;
}

export interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  old_price: number | null;
  description: string;
  category: string;
  brand: string;
  collection: string;
  fabric: string;
  is_active: boolean;
  images: ProductImage[];
  variants: ProductVariant[];
  updated_at: string;
}
