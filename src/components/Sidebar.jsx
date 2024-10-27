import React, { useState } from "react";

const Sidebar = () => {
  // State to control the visibility of the sidebar
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger button to toggle the sidebar */}
      <button
        className="md:hidden fixed top-20 left-4 z-50 bg-blue-600 text-white p-3 rounded-full"
        onClick={toggleSidebar}
      >
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-24 md:top-0 left-0 h-full bg-white shadow-lg border-r-2 border-r-[#1E3A5F] px-4 py-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64`}
      >
        <h2 className="text-lg font-semibold mb-4 border-b-2 border-b-[#1E3A5F] pb-2">
          HOT BUTTON
        </h2>
        <div className="space-y-6 pt-10">
          <button className="w-full rounded-full text-center bg-red-500 text-white py-2 flex justify-center items-center">
            Kontak Darurat
            <span className="ml-2">▼</span>
          </button>
          <button className="w-full rounded-full text-center bg-red-400 text-white py-2 flex justify-center items-center">
            Panduan Cepat
            <span className="ml-2">▼</span>
          </button>
          <button className="w-full rounded-full text-center bg-yellow-400 text-white py-2">
            Status Bencana
          </button>
          <button className="w-full bg-orange-400 text-white py-2 rounded-full">
            Pusat Evakuasi
          </button>
          <button className="w-full bg-yellow-500 text-white py-2 rounded-full">
            Berita Terkini Bencana
          </button>
          <button className="w-full bg-blue-800 text-white py-2 rounded-full">
            Laporkan Keadaan
          </button>
        </div>
      </div>

      {/* Background overlay when sidebar is open (for mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;