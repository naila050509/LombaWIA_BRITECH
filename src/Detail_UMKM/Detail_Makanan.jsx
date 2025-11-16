import { useParams, Link } from "react-router-dom";
import umkms from "../Data_UMKM/Data";

const DetailUMKM = () => {
  const { id } = useParams();
  const data = umkms.find((item) => item.id === Number(id));

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">UMKM Tidak Ditemukan</h2>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Back Button */}
      <Link
        to="/categories"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Kembali
      </Link>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Image */}
        <div className="w-full mb-6">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-64 object-cover rounded-xl shadow"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{data.name}</h1>

        {/* Category */}
        <p className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-4">
          {data.category}
        </p>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6">{data.description}</p>

        {/* Extra Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
          <div className="p-4 bg-gray-100 rounded-xl">
            <p className="text-sm text-gray-500">Alamat</p>
            <p className="font-medium">{data.address ?? "Tidak tersedia"}</p>
          </div>

          <div className="p-4 bg-gray-100 rounded-xl">
            <p className="text-sm text-gray-500">Kontak</p>
            <p className="font-medium">{data.contact ?? "Tidak tersedia"}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href={data.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center px-6 py-3 bg-green-600 text-white text-lg rounded-xl shadow hover:bg-green-700"
          >
            Lihat di Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailUMKM;



