import React, { useState } from "react";
import { FaImage, FaMap } from "react-icons/fa"; // Import ikon
import Sidebar from "../components/Sidebar";
import MapComponent from "../components/MapHome";
import StatusSection from "../components/Status";
import mapImage from "/illustrator/map.png"; // Ganti dengan path gambar yang sesuai

function Map() {
  const [isMapVisible, setIsMapVisible] = useState(true);

  const toggleMap = () => {
    setIsMapVisible((prev) => !prev); // Mengganti state antara peta dan gambar
  };

  return (
    <div className="flex h-screen pt-24 relative bg-blue-50">
      <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-white/100 via-white/40 to-transparent"></div>
      {/* Sidebar */}
      {/* Map and Status Panel */}
      <div className="flex-1 flex flex-col">
        

        {/* Map atau Gambar */}
        <div className="flex-1 z-10">
          {isMapVisible ? (
            <MapComponent />
          ) : (
            <img src={mapImage} alt="Peta" className="w-full absolute top-5 scale-50 object-cover" />
          )}
        </div>
        {/* Status Panel */}
        <div className="md:mr-12">
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <div>
              <h1 className="font-bold text-lg">STATUS</h1>
            </div>
          </div>
          <StatusSection />
        </div>
      </div>

      {/* Tombol Ikon untuk mengganti tampilan */}
      <button
        onClick={toggleMap}
        className="absolute z-[999] bottom-44 scale-150 left-4 bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600 transition"
        title={isMapVisible ? "Tampilkan Gambar" : "Tampilkan Peta"}
      >
        {isMapVisible ? <FaImage /> : <FaMap />} {/* Ganti ikon berdasarkan tampilan */}
      </button>
    </div>
  );
}

export default Map;