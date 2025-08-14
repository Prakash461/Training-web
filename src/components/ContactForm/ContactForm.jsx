import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function AnimatedContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const submitRef = useRef(null);

  function validate(values) {
    const e = {};
    if (!values.name.trim()) e.name = "Name is required";
    if (!values.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(values.email))
      e.email = "Email is invalid";
    if (!values.message.trim()) e.message = "Message is required";
    else if (values.message.trim().length < 10)
      e.message = "Message must be at least 10 characters";
    return e;
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;
    try {
      setStatus("sending");
      await new Promise((res) => setTimeout(res, 1100));
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      if (submitRef.current) submitRef.current.focus();
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, ease: "easeOut" },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <section id="Contact">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto p-4 md:p-8">
      {/* Left: Animated contact form */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="rounded-3xl p-6 md:p-10 shadow-xl border border-gray-200 bg-white"
      >
        <motion.h2
          variants={item}
          className="text-3xl font-bold mb-3 text-[#007E80]"
        >
          Get in Touch
        </motion.h2>
        <motion.p variants={item} className="text-[#000000] mb-8">
          Have a project in mind? Fill out the form and we’ll get back to you
          shortly.
        </motion.p>

        <motion.form onSubmit={handleSubmit} className="space-y-5" aria-live="polite">
          <motion.div variants={item}>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#000000]"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-xl border px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-[#007E80] transition-all ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name}</p>
            )}
          </motion.div>

          <motion.div variants={item}>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#000000]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-xl border px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-[#007E80] transition-all ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="name@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </motion.div>

          <motion.div variants={item}>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#000000]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-xl border px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-[#007E80] transition-all ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Tell us about your project or question..."
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-500">{errors.message}</p>
            )}
          </motion.div>

          {/* Centered button */}
          <motion.div variants={item} className="flex flex-col items-center gap-3 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              ref={submitRef}
              type="submit"
              disabled={status === "sending"}
              className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium shadow-md text-white transition-all ${
                status === "sending"
                  ? "bg-[#005f61] cursor-wait"
                  : "bg-gradient-to-r from-[#007E80] to-[#00b4b7] hover:from-[#005f61] hover:to-[#009b9d]"
              }`}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.span
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-sm"
              >
                Sent — thank you!
              </motion.span>
            )}
            {status === "error" && (
              <motion.span
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm"
              >
                Oops — something went wrong.
              </motion.span>
            )}
          </motion.div>
        </motion.form>
      </motion.div>

      {/* Right: Map view */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-[610px] rounded-3xl overflow-hidden shadow-xl"
      >
        <iframe
          title="Dubai Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115653.9735840992!2d55.188760463650426!3d25.276987038397116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43410e6b17a9%3A0x4f9a5cb5d6b7e6a3!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1691836198765!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
    </section>
  );
}
