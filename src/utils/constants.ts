// constants.ts
import { Product } from "../types/types";

export const products: Product[] = [
  {
    name: "Producto A",
    price: 700000,
    commission: 10,
    closingRate: 0.3,
    profitMargin: 0.1,
  },
  {
    name: "Producto B",
    price: 900000,
    commission: 15,
    closingRate: 0.35,
    profitMargin: 0.01,
  },
  {
    name: "Producto C",
    price: 1100000,
    commission: 20,
    closingRate: 0.5,
    profitMargin: 0,
  },
  {
    name: "Producto D",
    price: 1300000,
    commission: 35,
    closingRate: 0.5,
    profitMargin: 0,
  },
  {
    name: "Producto E",
    price: 1500000,
    commission: 40,
    closingRate: 0.5,
    profitMargin: 0.2,
  },
  {
    name: "Producto F",
    price: 1700000,
    commission: 40,
    closingRate: 0.5,
    profitMargin: 0,
  },
  {
    name: "Producto J",
    price: 1900000,
    commission: 40,
    closingRate: 0.5,
    profitMargin: 0,
  },
  {
    name: "Producto H",
    price: 2100000,
    commission: 40,
    closingRate: 0.5,
    profitMargin: 0,
  },
];

export const commissionOptions: number[] = [10, 15, 20, 35, 40]; // Exportar commissionOptions
export const IVA = 1.21; // Impuesto IVA
