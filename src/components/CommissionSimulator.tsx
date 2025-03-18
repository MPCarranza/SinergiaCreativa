import React, { useState } from "react";
import { products, commissionOptions, IVA } from "../utils/constants";
import { Product, CommissionResult, Commission } from "../types/types";

interface CommissionSimulatorProps {
  onCalculate: (result: CommissionResult) => void;
}

const CommissionSimulator: React.FC<CommissionSimulatorProps> = ({
  onCalculate,
}) => {
  const [averageTicketUSD, setAverageTicketUSD] = useState<string>("");
  const [dollarValue, setDollarValue] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[1]); // Producto B por defecto
  const [selectedCommission, setSelectedCommission] = useState<Commission>(
    commissionOptions[0]
  ); // Comisión inicial: 15%
  const [monthlyGoalARS, setMonthlyGoalARS] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    setter(rawValue);
  };

  const calculate = () => {
    const numericAverageTicketUSD = parseFloat(averageTicketUSD);
    const numericDollarValue = parseFloat(dollarValue);
    const numericMonthlyGoalARS = parseFloat(monthlyGoalARS);

    if (
      isNaN(numericAverageTicketUSD) ||
      isNaN(numericDollarValue) ||
      isNaN(numericMonthlyGoalARS)
    ) {
      alert("Por favor, ingresa valores válidos.");
      return;
    }

    // Calcular el salesFactor
    const salesFactor = selectedCommission.profitMargin;

    // Calcular "Ventas requeridas en ARS"
    const salesRequiredARS = numericMonthlyGoalARS * IVA * salesFactor;

    // Calcular el volumen en carrera en USD (redondeado a entero)
    const volumeInRaceUSD = Math.round(salesRequiredARS / numericDollarValue);

    // Calcular el total de ventas en el mes (sin redondear aún)
    const totalSales = volumeInRaceUSD / numericAverageTicketUSD;

    // Calcular la ganancia neta hoy
    const netProfitToday = Math.round(
      (selectedProduct.price / IVA) * (selectedCommission.commission / 100)
    );

    // Calcular el mínimo de presentaciones por mes (redondeado al entero correcto)
    const minPresentationsMonth = Math.round(
      totalSales / selectedCommission.closingRate
    );

    // Calcular el mínimo de presentaciones por semana (redondeado al entero correcto)
    const minPresentationsWeek = Math.round(minPresentationsMonth / 4) + 1;

    // Calcular nuevos datos a prospectar (redondeado al entero correcto)
    const newProspects = Math.round(totalSales * 6);

    // Actualizar el estado con los resultados
    onCalculate({
      netProfitToday,
      salesRequiredARS,
      volumeInRaceUSD,
      totalSales: Math.round(totalSales), // Redondear total de ventas al final
      minPresentationsMonth,
      minPresentationsWeek,
      newProspects,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold mb-4">Simulador de Comisiones</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ticket promedio en USD
          </label>
          <input
            type="text"
            value={averageTicketUSD}
            onChange={(e) => handleInputChange(e, setAverageTicketUSD)}
            placeholder="Ej: 800"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Valor del dólar
          </label>
          <input
            type="text"
            value={dollarValue}
            onChange={(e) => handleInputChange(e, setDollarValue)}
            placeholder="Ej: 1055"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Comisión actual
          </label>
          <select
            value={selectedCommission?.commission} // Solo usamos selectedCommission ya que nunca será nulo
            onChange={(e) => {
              const selectedValue = parseFloat(e.target.value); // Obtener el valor seleccionado
              const selectedOption = commissionOptions.find(
                (option) => option.commission === selectedValue
              ); // Buscar el objeto correspondiente en el array
              if (selectedOption) {
                setSelectedCommission(selectedOption); // Solo seteamos si encontramos un valor válido
              }
            }}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            {commissionOptions.map((option: Commission) => (
              <option key={option.commission} value={option.commission}>
                {option.commission}% {/* Muestra el valor de la comisión */}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Seleccione un producto
          </label>
          <select
            value={selectedProduct.name}
            onChange={(e) => {
              const product = products.find((p) => p.name === e.target.value);
              if (product) setSelectedProduct(product);
            }}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            {products.map((product) => (
              <option key={product.name} value={product.name}>
                {product.name} - ${product.price.toLocaleString()}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Meta mensual en ARS
          </label>
          <input
            type="text"
            value={`$ ${Number(monthlyGoalARS).toLocaleString("es-ES")}`}
            onChange={(e) => handleInputChange(e, setMonthlyGoalARS)}
            placeholder="Ej: $800.000"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mt-4">
          <button
            onClick={calculate}
            className="w-full inline-flex h-12 animate-shimmer text-white items-center justify-center rounded-md border bg-gradient-to-r from-emerald-400 to-teal-700 bg-[length:200%_100%] px-6 font-medium transition-colors">
            Calcular
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommissionSimulator;
