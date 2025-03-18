import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center">
      <Image
        src="/hero-image.png"
        alt="Hero"
        width={500} // Ajusta según tu necesidad
        height={300} // Ajusta según tu necesidad
        className="w-full md:w-2/4 h-auto object-cover rounded-r-3xl"
      />
      <div className="px-5 mt-9 w-full md:w-3/4 text-center md:text-left rounded-l-3xl md:ml-12">
        <h1 className="text-2xl md:text-4xl text-slate-100 font-bold">
          ¡Simulá tus comisiones y planificá tus metas hoy!
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
