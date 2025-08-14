import React from "react";
import { motion } from "framer-motion";
import about from "../../assets/main-logo.png";


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const AboutUs = () => {
  return (
    <section
      id="About"
      className="relative py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
<div
  className="absolute -top-5 -left-5 w-full h-full rounded-2xl"
  style={{ border: "4px solid #007E80" }}
></div>
          <img
          src={about}
            alt="About Pulseberry"
            className="rounded-2xl shadow-lg relative z-10"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
         <h2
  className="text-4xl md:text-5xl font-bold"
  style={{ color: "#007E80" }}
>
            About US
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At Pulseberry, we specialize in food safety training, consultancy,
            and auditing services to help businesses maintain the highest
            hygiene standards. Our mission is to ensure every kitchen, café, and
            food processing facility operates with safety, compliance, and
            excellence in mind.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With years of industry expertise, our team combines modern
            technology, global compliance knowledge, and innovative auditing
            tools to safeguard your business reputation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
className="px-6 py-3 text-white font-medium rounded-lg shadow-lg transition"
style={{
  backgroundColor: "#007E80",
}}
onMouseEnter={(e) => (e.target.style.backgroundColor = "#006668")}
onMouseLeave={(e) => (e.target.style.backgroundColor = "#007E80")}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Decorative Element */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
className="absolute bottom-10 right-10 text-[200px] font-extrabold select-none pointer-events-none"
style={{ color: "#007E80" }}
      >
        PB
      </motion.div>
    </section>
  );
};

export default AboutUs;
