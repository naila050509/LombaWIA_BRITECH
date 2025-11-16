import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar fixed */}
      <Navbar />

      {/* Konten halaman */}
      <div className="flex-1 pt-24">
        {children}
      </div>

      {/* Footer selalu di bawah */}
      <Footer />
    </div>
  );
};

export default MainLayout;