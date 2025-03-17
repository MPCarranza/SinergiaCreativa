"use client";
import React from "react";

import { usePathname, useRouter } from "next/navigation";

interface LinkItem {
  name: string;
  path: string;
}

const links: LinkItem[] = [
  {
    name: "Asistente de metas",
    path: "/",
  },
  {
    name: "Quienes somos",
    path: "https://sinergiacreativa.casa/contactus",
  },
  {
    name: "Contáctenos",
    path: "https://sinergiacreativa.casa/contactus",
  },
];

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (link: LinkItem) => {
    if (link.path.startsWith("http")) {
      // Para enlaces externos, abrir en una nueva pestaña
      window.open(link.path, "_blank", "noopener,noreferrer");
    } else if (link.path.includes("#")) {
      const [basePath, hash] = link.path.split("#");

      if (pathname === basePath) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(link.path);
      }
    } else {
      // Para rutas internas
      router.push(link.path);
    }
  };

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <button
          key={index}
          onClick={() => handleNavigation(link)}
          className={`${
            link.path === pathname
          } rounded-full text-slate px-2 font-AgrandirRegular border border-slate transition-transform hover:scale-95`}>
          {link.name}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
