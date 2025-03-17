// import React from "react";

// interface ButtonProps {
//   text?: string;
//   href?: string;
//   onClick?: () => void;
//   children?: React.ReactNode;
// }

// const MyButton: React.FC<ButtonProps> = ({ href = "#", onClick, children }) => {
//   return (
//     <div className="relative w-full group">
//       {/* Capa de fondo con desenfoque y gradiente animado */}
//       <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#FF44EC] via-[#FF675E] to-[#ffde5c] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

//       {/* Botón principal */}
//       <a
//         href={href}
//         onClick={onClick}
//         className="relative inline-flex items-center justify-center w-full px-3 py-1 text-lg text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-900"
//         role="button">
//         {children}
//       </a>
//     </div>
//   );
// };

// export default MyButton;
