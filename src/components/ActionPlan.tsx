import React from "react";
import { CommissionResult } from "../types/types";

interface ActionPlanProps {
  data: CommissionResult;
}

const ActionPlan: React.FC<ActionPlanProps> = ({ data }) => {
  const today = new Date().toLocaleDateString("es-ES");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Resultados</h2>
      <ul className="space-y-4">
        <li className="flex items-center">
          <span className="mr-2">✅</span> Ganancia neta hoy:{" "}
          <strong>&nbsp;${data.netProfitToday.toLocaleString()}</strong>
        </li>
        <li className="flex items-center">
          <span className="mr-2">✅</span> Ventas requeridas en ARS:{" "}
          <strong>&nbsp;${data.salesRequiredARS.toLocaleString()}</strong>
        </li>
        <li className="flex items-center">
          <span className="mr-2">✅</span> Volumen en carrera en USD:{" "}
          <strong>&nbsp;{data.volumeInRaceUSD.toLocaleString()} USD</strong>
        </li>
        <li className="flex items-center">
          <span className="mr-2">✅</span> Total de ventas en el mes:{" "}
          <strong>&nbsp;{data.totalSales}</strong>
        </li>
        <h2 className="text-xl font-semibold mb-4">
          Plan de Acción desde Hoy ({today})
        </h2>
        <li className="flex items-center">
          <span className="mr-2">✅</span> Nuevos datos a prospectar:{" "}
          <strong>&nbsp;{data.newProspects}</strong>
        </li>
        <li className="flex items-center">
          <span className="mr-2">✅</span> Mínimo de presentaciones por mes:{" "}
          <strong>&nbsp;{data.minPresentationsMonth}</strong>
        </li>
        <li className="flex items-center">
          <span className="mr-2">✅</span> Mínimo de presentaciones por semana:{" "}
          <strong>&nbsp;{data.minPresentationsWeek}</strong>
        </li>
        <li className="flex items-center">
          <span className="mr-2">✅</span> Capacitación mínima sugerida:{" "}
          <strong>&nbsp;20hs semanales.</strong>
        </li>
      </ul>
    </div>
  );
};

export default ActionPlan;
