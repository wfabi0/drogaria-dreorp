export interface CategoryCardProps {
  title: string;
  image: string;
  id: string;
}

export interface CarouselProps {
  images: any[];
}

export interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  price: string;
  newPrice: string;
  key?: number;
  category: Categories;
  promotion: boolean;
}

export interface NotificationProps {
  message: string;
  onClose: () => void;
  index: number;
}

export type Categories =
  | "Desodorantes"
  | "Vitaminas"
  | "Chocolates"
  | "Escovas de dentes"
  | "Higiene Infantil"
  | "Beleza"
  | "Outros";
