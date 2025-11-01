import React from "react";
import { motion } from "framer-motion";
import { FaLink, FaChartBar, FaShieldAlt, FaBolt } from "react-icons/fa";

const getIcon = (title) => {
  switch (title) {
    case "Simple URL Shortening":
      return <FaLink className="text-3xl text-btnColor" />;
    case "Powerful Analytics":
      return <FaChartBar className="text-3xl text-btnColor" />;
    case "Enhanced Security":
      return <FaShieldAlt className="text-3xl text-btnColor" />;
    case "Fast and Reliable":
      return <FaBolt className="text-3xl text-btnColor" />;
    default:
      return null;
  }
};

const Card = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 flex flex-col px-8 py-8 gap-6 rounded-xl hover:scale-[1.01] cursor-pointer bg-white relative overflow-hidden"
      whileHover={{ y: -2 }}
    >
      <div className="flex items-center gap-4">
        {getIcon(title)}
        <h1 className="text-slate-900 text-2xl font-bold">{title}</h1>
      </div>
      <p className="text-slate-600 text-base leading-relaxed">{desc}</p>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-btnColor/5 to-transparent rounded-bl-full -z-10" />
    </motion.div>
  );
};

export default Card;