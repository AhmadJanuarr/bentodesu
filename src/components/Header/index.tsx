"use client";
import { NAV_ITEMS } from "@/datas/NavItems";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

type NavLinksProps = {
  navItem: string;
  key: number;
};
const NavLinks = ({ navItem, key }: NavLinksProps) => {
  return (
    <li className="text-gray-700" key={key}>
      {navItem}
    </li>
  );
};

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]);
  const boxShadow = useTransform(scrollY, [0, 100], ["none", "0px 0px 10px rgba(0, 0, 0, 0.1)"]);
  const NAV_LINKS = NAV_ITEMS.find((item) => item.category === "links");

  return (
    <motion.header
      className="flex w-full laptop:px-10 px-5 py-8 z-50 fixed top-0 left-0 right-0 transition-all duration-300"
      style={{ backgroundColor, boxShadow }}
    >
      <section className="flex justify-between w-full items-center">
        <div className="laptop:w-1/3 w-1/2">
          <h1 className="text-2xl font-semibold">
            Bento<span className="text-secondary">Desu.</span>
          </h1>
        </div>

        <nav className="w-2/3 laptop:flex justify-center hidden">
          <ul className="flex gap-5">
            {NAV_LINKS?.items.map((item) => (
              <NavLinks key={item.id} navItem={item.name} />
            ))}
          </ul>
        </nav>

        <div className="w-1/3 justify-end laptop:flex hidden">
          <button className="items-center gap-1 size-subheading px-5 py-3 rounded-full bg-secondary text-white flex">
            <MapPin />
            <p> Cikupa, Tangerang</p>
          </button>
        </div>

        <div className="w-1/2 flex justify-end laptop:hidden">
          {!menuOpen ? <Menu onClick={() => setMenuOpen(!menuOpen)} /> : <X onClick={() => setMenuOpen(!menuOpen)} />}
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 60 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 z-10 w-full rounded-b-xl shadow-lg"
            >
              <div
                className="absolute -z-10 block min-h-screen w-screen bg-slate-800 opacity-50 md:hidden"
                onClick={() => setMenuOpen(false)}
              ></div>
              <div className="rounded-b-xl border bg-white px-2 py-10">
                <ul className="flex gap-5 flex-col">
                  {NAV_LINKS?.items.map((item) => (
                    <NavLinks key={item.id} navItem={item.name} />
                  ))}
                </ul>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </section>
    </motion.header>
  );
};
