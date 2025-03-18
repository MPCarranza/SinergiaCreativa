"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../components/UiComponents/sheet";

import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

interface LinkItem {
  name: string;
  path: string;
}

const links: LinkItem[] = [
  {
    name: "Asistente de ventas",
    path: "/",
  },
  {
    name: "Quienes somos",
    path: "https://sinergiacreativa.casa/about-us",
  },

  {
    name: "Contáctenos",
    path: "https://sinergiacreativa.casa/contactus",
  },
];

const MobileNav: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center ">
        <CiMenuFries className="text-[32px] text-slate " />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <a className="mt-32 mb-40 text-2xl text-center">
          <Link href="/">
            <h1 className="text-2xl text-white font-AgrandirWideItalic">
              Sinergia Creativa
            </h1>
          </Link>
        </a>
        {/* nav */}
        <nav className=" flex flex-col items-center justify-center gap-8 font-AgrandirRegular">
          {links.map((link: LinkItem, index: number) => {
            return (
              <a
                href={link.path}
                key={index}
                className={` text-xl capitalize text-white transition-all`}>
                {link.name}
              </a>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
