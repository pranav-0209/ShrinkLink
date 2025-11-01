import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    icon: FaLink,
    title: "Simple URL Shortening",
    desc:
      "Create short, memorable links in seconds with an intuitive interface and one-click copy.",
  },
  {
    icon: FaChartLine,
    title: "Powerful Analytics",
    desc:
      "Track clicks, referrers and geography to understand your audience and optimize campaigns.",
  },
  {
    icon: FaEdit,
    title: "Enhanced Security",
    desc:
      "Protect your links with robust security practices and optional access controls.",
  },
  {
    icon: FaShareAlt,
    title: "Fast and Reliable",
    desc:
      "Lightning-fast redirects with high uptime so your links are always reachable.",
  },
];

const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8 sm:p-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic mb-3">
            About Shrinklink
          </h1>
          <p className="text-gray-700 text-base mb-8 max-w-3xl">
            Shrinklink simplifies URL shortening so you can share links that are
            short, secure and trackable. Generate and manage links quickly,
            analyze performance with built-in analytics, and keep control with
            security options — all from a clean, fast interface.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-start gap-4 bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-btnColor/10 text-btnColor text-xl">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">{f.title}</h3>
                  <p className="text-gray-600 mt-1 text-sm">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Link to="/register" className="bg-btnColor text-white px-6 py-2 rounded-md font-medium hover:opacity-95 transition">
            Get Started — Free
          </Link>
          <Link to="/dashboard" className="text-btnColor border border-btnColor px-4 py-2 rounded-md font-medium hover:bg-btnColor/5 transition">
            View Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;