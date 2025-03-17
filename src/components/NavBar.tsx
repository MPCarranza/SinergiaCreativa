import Link from "next/link";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";

const NavBar = () => {
  return (
    <header className="py-8 m-2 text-white xl:py-12 bg-none">
      <div className="container flex items-center justify-between py-3 mx-auto border rounded-full backdrop-filter backdrop-blur-lg border-slate">
        {/* logo */}
        <Link href="/">
          <h1 className="mx-10 text-2xl font-AgrandirWideItalic text-slate">
            Sinergia Creativa
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="items-center hidden gap-8 mx-10 xl:flex">
          <Navigation />
        </div>

        {/* mobile nav */}
        <div className="mx-10 xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
