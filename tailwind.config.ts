import { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de incluir todas las rutas necesarias
    // Otras rutas necesarias
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcssAnimate, // Añade el plugin aquí
  ],
};

export default config;
