import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./Components/Hero/Hero";
import Highlight from "./Components/Highlight/Highlight";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import MainLayout from "./MainLayout";

// ✅ Lazy-load pages (biar bundle awal kecil)
const Makanan = lazy(() => import("./Pages/Makanan"));
const Minuman = lazy(() => import("./Pages/Minuman"));
const Elektronik = lazy(() => import("./Pages/Elektronik"));
const Jasa = lazy(() => import("./Pages/Jasa"));

const Maps = lazy(() => import("./Menu/Maps"));
const Categories = lazy(() => import("./Menu/Categories"));
const AboutUs = lazy(() => import("./Menu/AboutUs"));
const Contact = lazy(() => import("./Menu/Contact"));

const DetailUMKM = lazy(() => import("./Detail_UMKM/Detail_Makanan"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
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

          <Route
            path="/LombaWIA_BRITECH"
            element={
              <main className="overflow-x-hidden bg-white text-dark">
                <Hero />
                <Highlight />
                <Banner />
                <Footer />
              </main>
            }
          />

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

          {/* HALAMAN DETAIL UMKM */}
          <Route path="/umkm/:id" element={<DetailUMKM />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
