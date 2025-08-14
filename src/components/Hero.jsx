import React from "react";
import Fanta1 from "../assets/food-hygiene.png";
import Fanta2 from "../assets/consultancy.png";
import Fanta3 from "../assets/audit-1.png"; 
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Navbar from "../components/Navbar";

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const headphoneData = [
  {
    id: 1,
    image: Fanta1,
    title: "Food Hygiene Training",
    subtitle:
     "Essential skills to handle, prepare, and store food safely,Learn the best practices to ensure food safety and hygiene compliance.",
    modal: "Hygiene",
    bgColor: "#007E80",
  },
  {
    id: 2,
    image: Fanta2,
    title: "Consultancy",
    subtitle:
       "Expert guidance to help your business grow and succeed,Professional advice tailored to your unique needs and goals.",
    modal: "Media",
    bgColor: "#0077B6",
  },
  {
    id: 3,
    image: Fanta3,
     title: (
      <>
        Pulseberry <br /> E-Audit
      </>
    ),
    subtitle:
     "Smart digital auditing for accuracy, efficiency, and compliance,Streamlined audit solutions for modern businesses.",
    modal: "Audit",
    bgColor: "#2CA58D",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeData = headphoneData[activeIndex];

  // Auto-slide every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === headphoneData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const handleActiveData = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <motion.section
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
        className="text-white"
      >
        {/* Navbar */}
        <Navbar />

        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
          {/* Info Section */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={SlideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} alt="" />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={SlideRight(0.6)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ color: activeData.bgColor }}
                    className="px-4 py-2 bg-white inline-block font-normal rounded-sm"
                  >
                    Book Now
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* Separator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10"
              >
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="uppercase text-sm ">Top Recommendation</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </motion.div>

              {/* List switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="grid grid-cols-3 gap-10"
              >
                {headphoneData.map((item, index) => (
                  <UpdateFollower
                    key={item.id}
                    mouseOptions={{
                      backgroundColor: item.bgColor,
                      zIndex: 9999,
                      followSpeed: 0.5,
                      scale: 5,
                      text: "View Details",
                      textFontSize: "3px",
                    }}
                  >
                    <div
                      onClick={() => handleActiveData(index)}
                      className="cursor-pointer space-y-3 hover:scale-105 transition-all"
                    >
                      <div className="flex justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className={`w-[80px] img-shadow ${
                            activeIndex === index
                              ? "opacity-100 scale-110"
                              : "opacity-50"
                          }`}
                        />
                      </div>
                      <div className="!mt-6 space-y-1 text-center">
                        <p className="text-base line-through opacity-50">
                          {item.price}
                        </p>
                        <p className="text-xl font-bold">{item.price}</p>
                      </div>
                    </div>
                  </UpdateFollower>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  x: -100,
                  transition: { duration: 0.4 },
                }}
                src={activeData.image}
                alt={activeData.title}
                className="w-[400px] md:w-[450px] xl:w-[550px] img-shadow relative z-10"
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none"
              >
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* WhatsApp Icon */}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
