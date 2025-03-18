export interface Product {
  name: string;
  price: number; // Precio en pesos argentinos
}

export interface Commission {
  commission: number;
  profitMargin: number;
  closingRate: number; // Tasa de cierre
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
