"use client";
import React from "react";
import UserDetails from "../components/UserDetails";
import SalesAsistant from "../components/SalesAsistant";
import HeroSection from "@/components/Banner";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="container my-5">
        <HeroSection />
      </div>
      <div className="min-h-screen bg-gray-100 p-4 rounded-t-2xl">
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Asistente de Ventas
          </h1>
          <UserDetails />
          <SalesAsistant />
        </div>
      </div>
    </>
  );
};

export default HomePage;
