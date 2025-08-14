import React from "react";
import Logo from "../assets/pulseberry-logo.png";
import { MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const NavbarMenu = [
  { id: 1, title: "Home", link: "#Home" },
  { id: 2, title: "Services", link: "#Services" }, // Medical relevant menu
  { id: 3, title: "About Us", link: "#About" },
  { id: 4, title: "Blog", link: "#Blogs" },
  { id: 5, title: "Contact", link: "#Contact" },
];

const Navbar = ({ activeColor }) => {
  return (
    <div
      style={{ backgroundColor: activeColor }}
      className="text-white py-3 md:py-8"> 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          {/* Removed invert to keep logo original colors */}
          <img src={Logo} alt="Medical Logo" className="max-w-[150px]" />
        </div>

        {/* Menu section (desktop only) */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 relative z-40">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <a
                    href={item.link}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase hover:text-[#A1E3D8] transition-colors duration-300"
                  >
                    {item.title}
                  </a>
                </UpdateFollower>
              </li>
            ))}

            {/* User account icon */}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <button className="text-xl ps-14 hover:text-[#A1E3D8] transition-colors duration-300">
                <FaRegUser />
              </button>
            </UpdateFollower>
          </ul>
        </div>

        {/* Hamburger Icon (mobile only) */}
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
