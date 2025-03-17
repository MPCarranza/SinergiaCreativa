export interface Product {
  name: string;
  price: number; // Precio en pesos argentinos
  commission: number; // Comisión en porcentaje
  closingRate: number; // Tasa de cierre
  profitMargin: number; // Margen de ganancia (entre 0 y 1)
}

export interface CommissionResult {
  netProfitToday: number; // Ganancia neta hoy
  salesRequiredARS: number; // Ventas requeridas en ARS
  volumeInRaceUSD: number; // Volumen en carrera en USD (redondeado a entero)
  totalSales: number; // Total de ventas en el mes (redondeado a entero)
  minPresentationsMonth: number; // Mínimo de presentaciones por mes (redondeado a entero)
  minPresentationsWeek: number; // Mínimo de presentaciones por semana (redondeado a entero)
  newProspects: number; // Nuevos datos a prospectar (redondeado a entero)
}
// types.ts
// export interface Product {
//   name: string;
//   price: number; // Precio en pesos argentinos
//   commission: number; // Comisión en porcentaje
//   closingRate: number; // Tasa de cierre
//   profitMargin?: number; // Margen de ganancia (opcional)
// }

// export interface CommissionResult {
//   netProfitToday: number; // Ganancia neta hoy
//   salesRequiredARS: number; // Ventas requeridas en ARS
//   volumeInRaceUSD: number; // Volumen en carrera en USD
//   totalSales: number; // Total de ventas en el mes
//   minPresentationsMonth: number; // Mínimo de presentaciones por mes
//   minPresentationsWeek: number; // Mínimo de presentaciones por semana
//   newProspects: number; // Nuevos datos a prospectar
// }
