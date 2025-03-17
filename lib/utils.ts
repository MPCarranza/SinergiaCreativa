import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Definir el tipo de inputs: puede ser un string o un valor que pueda ser evaluado a booleano o null/undefined
export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return twMerge(clsx(...inputs));
}
