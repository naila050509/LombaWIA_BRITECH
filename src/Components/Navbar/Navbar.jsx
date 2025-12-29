import React, { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { TbSearch, TbX } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Maps", link: "/Maps" },
  { id: 3, title: "Categories", link: "/Categories" },
  { id: 4, title: "About Us", link: "/AboutUs" },
  { id: 5, title: "Contact", link: "/Contact" },
];

const Navbar = ({ textColor = "text-black" }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // ✅ Auto close saat pindah route (mencegah "nyangkut")
  useEffect(() => {
    setIsOpen(false);
    setShowSearch(false);
  }, [location.pathname]);

  // ✅ Lock scroll saat drawer kebuka (mobile lebih stabil)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar utama */}
      <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-[10000]">
        <div className="container py-4 flex justify-between items-center px-4">
          {/* Logo */}
          <h1 className={`font-bold text-2xl tracking-wide ${textColor}`}>
            BRITECH
          </h1>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className={`inline-block py-2 px-3 hover:text-secondary ${textColor} relative group`}
                  >
                    <div className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-secondary rounded-full transition-all duration-500 ease-in-out group-hover:left-0 group-hover:w-full" />
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Search Desktop */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowSearch(true)}
                className="text-2xl text-gray-700 hover:text-secondary transition-all"
              >
                <TbSearch />
              </button>

              <AnimatePresence>
                {showSearch && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute right-0 top-10 bg-white/90 backdrop-blur-md shadow-lg border border-gray-200 rounded-full flex items-center px-4 py-2 w-72 z-[10001]"
                  >
                    <TbSearch className="text-gray-500 text-2xl mr-2" />
                    <input
                      type="text"
                      placeholder="Search something..."
                      className="bg-transparent outline-none text-gray-800 flex-1"
                      autoFocus
                    />
                    <TbX
                      className="text-gray-500 text-xl cursor-pointer hover:text-secondary transition"
                      onClick={() => setShowSearch(false)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Tombol Menu Mobile (toggle: hamburger ↔ X) */}
          <div className="lg:hidden">
            <button
              type="button"
              onPointerDown={() => setIsOpen((v) => !v)}
              className="p-2 rounded-xl active:scale-95 touch-manipulation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <IoMdClose className="text-4xl text-black" />
              ) : (
                <IoMdMenu className={`text-4xl ${textColor}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onPointerDown={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-[9999]"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.22 }}
              className="fixed top-0 left-0 h-dvh w-72 max-w-[85vw] bg-white text-black z-[10001] shadow-2xl"
              role="dialog"
              aria-modal="true"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-3">
                  <h2 className="text-xl font-bold text-black">Menu</h2>

                  {/* X di dalam drawer (opsional) */}
                  <button
                    type="button"
                    onPointerDown={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                    className="p-2 rounded-xl hover:bg-gray-100 active:scale-95 touch-manipulation"
                    aria-label="Close menu"
                  >
                    <IoMdClose className="text-3xl text-black" />
                  </button>
                </div>

                <ul className="space-y-3">
                  {NavbarMenu.map((menu, index) => (
                    <div key={menu.id}>
                      <Link
                        to={menu.link}
                        onClick={() => setIsOpen(false)}
                        className="block text-black hover:text-yellow-600 transition-colors text-lg font-medium py-2"
                      >
                        {menu.title}
                      </Link>

                      {index < NavbarMenu.length - 1 && (
                        <hr className="border-gray-200" />
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
