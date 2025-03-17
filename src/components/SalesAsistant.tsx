import React, { useState } from "react";
import CommissionSimulator from "./CommissionSimulator";
import ActionPlan from "./ActionPlan";
import { CommissionResult } from "../types/types";

const SalesAsistant: React.FC = () => {
  const [result, setResult] = useState<CommissionResult | null>(null);

  return (
    <div className="container mx-auto p-4">
      <CommissionSimulator onCalculate={setResult} />
      {result && <ActionPlan data={result} />}
    </div>
  );
};

export default SalesAsistant;
