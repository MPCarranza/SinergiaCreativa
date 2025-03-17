import React from "react";

const UserDetails: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md mb-8 p-6">
        <h2 className="text-xl font-semibold mb-4">Mis Datos</h2>
        <div className="space-y-2">
          <p>
            <strong>Nombre de socio/a:</strong> Martín Rodríguez
          </p>
          <p>
            <strong>Mes:</strong> Febrero
          </p>
          <p>
            <strong>Valor USD:</strong> 1055
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
