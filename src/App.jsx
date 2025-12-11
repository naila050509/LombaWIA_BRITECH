import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Highlight from "./Components/Highlight/Highlight";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";

//halaman kategori
import Makanan from "./Pages/Makanan";
import Minuman from "./Pages/Minuman";
import Elektronik from "./Pages/Elektronik";
import Jasa from "./Pages/Jasa";

//halaman menu
import Maps from "./Menu/Maps";
import Categories from "./Menu/Categories";
import AboutUs from "./Menu/AboutUs";
import Contact from "./Menu/Contact";
import MainLayout from "./MainLayout";

//halaman detail umkm
import DetailUMKM from "./Detail_UMKM/Detail_Makanan";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* HALAMAN UTAMA */}
        <Route
          path="/"
          element={
            <main className="overflow-x-hidden bg-white text-dark">
              <Hero />
              <Highlight />
              <Banner />
              <Footer />
            </main>
          }
        />

        <Route path="/LombaWIA_BRITECH" element={
          <main className="overflow-x-hidden bg-white text-dark">
            <Hero />
            <Highlight />
            <Banner />
            <Footer />
          </main>
        } />
        {/* ⬆️ SAMPAI SINI */}

        {/* HALAMAN KATEGORI */}
        <Route
          path="/Makanan"
          element={
            <MainLayout>
              <Makanan />
            </MainLayout>
          }
        />
        <Route
          path="/Minuman"
          element={
            <MainLayout>
              <Minuman />
            </MainLayout>
          }
        />
        <Route
          path="/Elektronik"
          element={
            <MainLayout>
              <Elektronik />
            </MainLayout>
          }
        />
        <Route
          path="/Jasa"
          element={
            <MainLayout>
              <Jasa />
            </MainLayout>
          }
        />

        {/* HALAMAN MENU */}
        <Route
          path="/Maps"
          element={
            <MainLayout>
              <Maps />
            </MainLayout>
          }
        />
        <Route
          path="/Categories"
          element={
            <MainLayout>
              <Categories />
            </MainLayout>
          }
        />
        <Route
          path="/AboutUs"
          element={
            <MainLayout>
              <AboutUs />
            </MainLayout>
          }
        />
        <Route
          path="/Contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        {/* HALAMAN UMKM */}
        <Route
        path="/umkm/:id" element={<DetailUMKM />}
        />
      </Routes> 
    </BrowserRouter>
  );
};

export default App;