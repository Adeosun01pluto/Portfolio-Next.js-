"use client";

import {useState} from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import {BiMenuAltRight} from "react-icons/bi"

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [menuToggle, setmenuToggle] = useState(false)
  return (
    <header className="z-[999] pb-32">
      <div className="fixed z-[999] w-full px-4 mx-auto bg-white/80 md:bg-transparent flex items-center justify-between md:justify-around h-24">
        {/* <motion.div
          className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div> */}
        <Link href="#" className="text-black font-semibold text-lg cursor-pointer">Qozeem</Link>
        <nav className="hidden bg-opactiy-80 rounded-lg border border-white border-opacity-40 bg-white px-2 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 md:flex sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                    {
                      "text-gray-950 dark:text-gray-200":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        {menuToggle ? 
          <nav className="fixed flex justify-between top-24 w-[60%] h-screen bg-opactiy-80 border left-[0] border-white border-opacity-40 bg-black/70 px-2 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 sm:py-0">
          <ul className="flex-col px-4 items-start justify-start gap-y-1 text-[0.9rem] font-medium text-gray-500">
            {links.map((link) => (
              <motion.li
                className=" flex items-start justify-start relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={()=>setmenuToggle(false)}
              >
                <Link
                  className={clsx(
                    "flex items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                    {
                      "text-white dark:text-white":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {/* {link.name === activeSection && (
                    <motion.span
                      className="bg-gray-300 w-[50%] rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )} */}
                </Link>
              </motion.li>
            ))}
          </ul>
          <span onClick={()=>setmenuToggle(false)} className="text-white text-xl cursor-pointer">X</span>
        </nav> 
        : null
        }
        <span onClick={()=>setmenuToggle(!menuToggle)} className="block md:hidden cursor-pointer"><BiMenuAltRight size={33} /></span>
      </div>
    </header>
  );
}