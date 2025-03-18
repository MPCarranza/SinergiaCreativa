// constants.ts
import { Product } from "../types/types";
import { Commission } from "../types/types";

export const products: Product[] = [
  {
    name: "Producto A",
    price: 700000,
  },
  {
    name: "Producto B",
    price: 900000,
  },
  {
    name: "Producto C",
    price: 1100000,
  },
  {
    name: "Producto D",
    price: 1300000,
  },
  {
    name: "Producto E",
    price: 1500000,
  },
  {
    name: "Producto F",
    price: 1700000,
  },
  {
    name: "Producto J",
    price: 1900000,
  },
  {
    name: "Producto H",
    price: 2100000,
  },
];

export const commissionOptions: Commission[] = [
  {
    commission: 10,
    profitMargin: 10,
    closingRate: 0.3,
  },
  {
    commission: 15,
    profitMargin: 6.6,
    closingRate: 0.35,
  },
  {
    commission: 20,
    profitMargin: 5,
    closingRate: 0.5,
  },
  {
    commission: 35,
    profitMargin: 2.85,
    closingRate: 0.5,
  },
  {
    commission: 40,
    profitMargin: 1.8,
    closingRate: 0.5,
  },
]; // Exportar commissionOptions
export const IVA = 1.21; // Impuesto IVA
