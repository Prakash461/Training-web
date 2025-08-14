import React from "react";
import P1 from "../../assets/food-hygiene.png";
import P2 from "../../assets/e-compliance-2.png";
import P3 from "../../assets/consultancy.png";
import P4 from "../../assets/online-asscesment.png";
import P5 from "../../assets/audit-1.png";
import P6 from "../../assets/health.png";
import { motion } from "framer-motion";


export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const ServiceData = [
  {
    id: 1,
    title: "Food Hygiene Training",
    image: P1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    delay: 0.5,
  },
  {
    id: 2,
    title: "E-Compliance",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    image: P2,
    delay: 0.8,
  },
  {
    id: 3,
    title: "Consultancy",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima",
    image: P3,
    delay: 1.1,
  },
  {
    id: 4,
    title: "Online Assessment",
    image: P4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    delay: 0.5,
  },
  {
    id: 5,
    title: "Pulseberry E- audit",
    image: P5,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    delay: 0.8,
  },
  {
    id: 6,
    title: "Health and Safety",
    image: P6,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    delay: 1.1,
  },
];

const Services = () => {
  return (
    <section id="Services">
    <div className="bg-gray-100 py-8">
      <div className="container py-14">
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold text-center pb-10"
        >
          Our Services
        </motion.h1>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         {ServiceData.slice(0, 6).map((item) => (
            <motion.div
              variants={fadeUp(item.delay)}
              key={item.id}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white"
            >
              <img
                src={item.image}
                alt=""
                className="w-[100px] mb-4 hover:rotate-12 hover:scale-110 duration-300"
              />
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold font-handwriting text-center">
                  {item.title}
                </h1>
                <p className="text-center text-sm text-gray-600">{item.desc}</p>
               <button className="!mt-5 border-2 border-[#007E80] text-[#007E80] px-6 py-2 rounded-md hover:bg-[#007E80] hover:text-white duration-200">
  Book Now
</button>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Services;
