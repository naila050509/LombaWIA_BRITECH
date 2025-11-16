import React from "react";
import MieAyam from "../assets/mie_ayam.png";
import BuburAyam from "../assets/bubur_ayam.png";
import AyamBakar from "../assets/ayam_bakar.png";
import SotoMie from "../assets/soto_mie.png";
import IceCream from "../assets/es_krim.png";
import Cappuccino from "../assets/capuccino.png";
import SinarTerang from "../assets/sinar_terang.png";
import Vita from "../assets/vita.png";
import SolSepatu from "../assets/sol_sepatu.png";
import RedsSalon from "../assets/red_salon.png";
import { address } from "framer-motion/client";

const Data = [
  {
    id: 1,
    name: "MIE AYAM MAS BAYAN ",
    lat: -6.2,
    lng: 106.816666,
    category: "Makanan",
    rating: 4.8,
    image: MieAyam,
    description:
      "Mie Ayam Mas Bayan adalah warung mie ayam legendaris yang terkenal dengan cita rasa gurih dan tekstur mie yang kenyal. Disajikan dengan topping pangsit renyah dan bakso lembut, setiap mangkuknya dibuat langsung oleh Mas Bayan dengan resep turun-temurun. Warung ini jadi tempat favorit warga sekitar untuk makan siang cepat dengan rasa rumahan yang autentik.",
    address: "Jl sektor 16 RT.006/RW.004, Sudimara Jaya, Kec. Ciledug, Kota Tangerang, Banten 15151",
    phone: "081234567890",
    openHours: "08:00 - 20:00",
  },

  {
    id: 2,
    name: "Bubur Ayam Cirebon",
    lat: -6.21,
    lng: 106.82,
    category: "Makanan",
    rating: 4.5,
    image: BuburAyam,
    description:
      "Bubur Ayam Cirebon ini jadi favorit warga sekitar Tanah Seratus karena rasanya yang gurih dan kuah kaldunya yang khas. Disajikan dengan topping ayam suwir melimpah dan berbagai pilihan sate seperti sate telur, usus, dan ati, bubur ini selalu ramai pembeli di pagi hari. Cocok banget buat sarapan hangat sebelum beraktivitas.",
    address: "Jl. Tanah Seratus Gg. H. Kasum 2, RT.006/RW.004, Sudimara Jaya, Kec. Ciledug, Kota Tangerang, Banten 15151",
    phone: "081298765432",
    openHours: "09:00 - 18:00",
  },

  {
    id: 3,
    name: "AYAM BAKAR PONDOK ASSALAM",
    lat: -6.21,
    lng: 106.82,
    category: "Makanan",
    rating: 4.5,
    image: AyamBakar,
    description:
      "Ayam Bakar Tanah Seratus dikenal dengan bumbu bakarnya yang meresap sempurna dan aroma khas arang yang menggoda. Semua ayam dibakar langsung di tempat, memberikan rasa gurih, manis, dan sedikit pedas yang pas di lidah. Warung ini jadi favorit warga sekitar untuk makan malam sederhana tapi nikmat.",
    address: "Jl. Tanah Seratus RT.002/RW.003 No.19, Sudimara Jaya, Kec. Ciledug, Kota Tangerang, Banten 15151",
    phone: "081298765432",
    openHours: "09:00 - 18:00",
  },

  {
    id: 4,
    name: "Soto Mie Bogor 7 Sodara Kang Joni",
    lat: -6.21,
    lng: 106.82,
    category: "Makanan",
    rating: 4.5,
    image: SotoMie,
    description:
      "Warung makan khas Bogor yang terkenal dengan kuah gurih dan topping melimpah. Cocok untuk penikmat kuliner tradisional yang ingin menikmati cita rasa autentik soto Bogor.",
    address: "Jl. Tanah Seratus No.63-46, RT.001/RW.004, Sudimara Jaya, Kec. Ciledug, Kota Tangerang, Banten 15151",
    phone: "081298765432",
    openHours: "09:00 - 18:00",
  },

  {
    id: 5,
    name: "Sari Ice Cream Tanah Seratus",
    lat: -6.21,
    lng: 106.82,
    category: "Minuman",
    rating: 4.5,
    image: IceCream,
    description:
      "Sari Ice Cream Tanah Seratus adalah kedai es krim lokal yang sudah jadi tempat nongkrong favorit anak muda Ciledug. Dikenal dengan racikan es krim homemade yang lembut dan varian topping kreatif, setiap gelasnya menawarkan sensasi manis yang menyegarkan. Harga terjangkau dan rasa premium bikin pelanggan selalu balik lagi.",
    address: "Jl. Tanah Seratus, RT.001/RW.003, Sudimara Jaya, Kec. Ciledug, Kota Tangerang, Banten 15151",
    phone: "081298765432",
    openHours: "09:00 - 18:00",
  },

  {
    id: 6,
    name: "Cappuccino Cincau tanah serratus",
    lat: -6.21,
    lng: 106.82,
    category: "Minuman",
    rating: 4.5,
    image: Cappuccino,
    description:
      "Minuman segar yang memadukan rasa creamy cappuccino dengan kenyalnya cincau. Cocok diminum saat siang hari untuk melepas dahaga.",
    address: "Jl. Tanah Seratus No.23, RT.004/RW.012, Sudimara Jaya, Kec. Ciledug, Kota Tangerang, Banten 15151",
    phone: "081298765432",
    openHours: "09:00 - 18:00",
  },

  {
    id: 7,
    name: "Sinar Terang Elektronik",
    lat: -6.21,
    lng: 106.82,
    category: "Elektronik",
    rating: 4.5,
    image: SinarTerang,
    description:
      "Toko Elektronik Batas Peninggilan menyediakan berbagai kebutuhan rumah tangga dan peralatan listrik dengan harga terjangkau. Dari kompor gas, rice cooker, hingga perlengkapan dapur dan perkakas, semuanya tersedia di satu tempat. Pemilik toko dikenal ramah dan siap membantu pelanggan menemukan barang sesuai kebutuhan mereka. ",
    address: "Jl. Batas Peninggilan, RT.003/RW.001, Sudimara Jaya, Kec. Ciledug, Kota Tangerang, Banten 15153",
    phone: "081298765432",
    openHours: "09:00 - 18:00",
  },

  {
    id: 8,
    name: "Toko Vita Elektrik",
    lat: -6.21,
    lng: 106.82,
    category: "Elektronik",
    rating: 4.5,
    image: Vita,
    description:
      "Toko yang menyediakan berbagai kebutuhan elektronik rumah tangga dengan harga terjangkau. Mulai dari lampu hingga perlengkapan kabel dan peralatan rumah lainnya, cocok untuk keperluan sehari-hari.",
    address: "Jl. Tanah Seratus, RT.003/RW.012, Sudimara Jaya, Kec. Ciledug, Kota Tangerang, Banten 15151",
    phone: "081298765432",
    openHours: "09:00 - 18:00",
  },

  {
    id: 9,
    name: "Sol Salon Sepatu Aris",
    lat: -6.21,
    lng: 106.82,
    category: "Layanan Jasa",
    rating: 4.5,
    image: SolSepatu,
    description:
      "Sol Salon Sepatu Aris adalah tempat andalan warga Ciledug untuk memperbaiki dan merawat barang kesayangan seperti sepatu, tas, hingga koper. Dengan pengalaman bertahun-tahun, Mas Aris dan timnya terkenal rapi dalam pengerjaan dan teliti dalam setiap detail. Selain servis, mereka juga menyediakan layanan cuci dan duplikat kunci dengan hasil memuaskan.",
    address: "Jalan Tanah Seratus RT.02/RW.02 No.5, RT.002/RW.002, Sudimara Jaya, Kec. Ciledug, Kota Tangerang, Banten 15151",
    phone: "081298765432",
    openHours: "09:00 - 18:00",
  },

  {
    id: 10,
    name: "Red's Salon Style & Beauty",
    lat: -6.21,
    lng: 106.82,
    category: "Layanan Jasa",
    rating: 4.5,
    image: RedsSalon,
    description:
      "Salon kecantikan yang menyediakan berbagai layanan perawatan rambut dan wajah dengan hasil profesional. Tempat ini cocok buat kamu yang ingin tampil segar dan percaya diri dengan gaya rambut terbaru.",
    address: "Jl. Kedondong Dalam, RT.001/RW.004, Sudimara Jaya, Kec. Ciledug, Kota Tangerang, Banten 15151",
    phone: "081298765432",
    openHours: "09:00 - 18:00",
  },
];

export default Data;
