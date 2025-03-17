import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" text-white text-center py-4">
      <p>
        &copy; {new Date().getFullYear()} Mi Sitio. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
