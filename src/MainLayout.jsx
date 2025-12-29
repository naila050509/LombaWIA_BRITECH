import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navbar selalu di atas (penting buat Maps/Leaflet) */}
      <div className="fixed top-0 left-0 right-0 z-[9999]">
        <Navbar />
      </div>

      {/* Konten halaman */}
      <main className="flex-1 pt-24 relative z-0">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
