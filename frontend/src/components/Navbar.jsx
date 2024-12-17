import React from "react";
import Logo from "../../assets/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "feature",
    link: "/#testimonials",
  },
  {
    id: 3,
    name: "Crockery",
    link: "/#footer",
  },
];

const Navbar = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
      className="bg-gradient-to-r from-secondary to-secondary/90  "
    >
      <div className="container py-2">
        <div className="flex justify-between items-center gap-2">
          {/* logo section */}
          <div className="">
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center  tracking-wider font-cursive text-white"
            >
              <img src={Logo} alt="logo" className="w-16 " />
              FamilyCorner
            </a>
          </div>
          {/* liinks section */}

          <div className="flex justify-between items-center gap-4">
            <ul className="hidden sm:flex items-center gap-4 font-sans text-gray-300">
              {Menus.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center  text-gray-500  space-x-3 font-serif">
              Mendher
              <FaLocationDot className="text-xl cursor-pointer flex" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
