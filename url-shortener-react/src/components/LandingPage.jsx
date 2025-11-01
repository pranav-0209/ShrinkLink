import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";

let desc =
  "Generate short, memorable links with ease using Shrinklink’s intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with Shrinklink. Track clicks and manage your links seamlessly to enhance your online presence. Generate short, memorable links with ease using Shrinklink’s intuitive interface. Share URLs effortlessly across platforms.";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  console.log("TOKEN FROM LANDING PAGE: " + token);

  const dashBoardNavigateHandler = () => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4 bg-gradient-to-br from-white to-gray-50">
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-0 w-72 h-72 bg-btnColor/10 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-rose-500/10 rounded-full filter blur-3xl -z-10"></div>
        <div className="lg:flex-row flex-col pt-8 lg:gap-12 gap-8 flex justify-between items-center relative z-10">
          <div className=" flex-1">
            <div className="mb-6">
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1 rounded-full bg-btnColor/10 text-btnColor text-sm font-semibold mb-4"
              >
                Trusted by 10,000+ users worldwide
              </motion.span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: -80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
            >
              Transform Long URLs Into <span className="text-btnColor">Memorable Links</span> Instantly.
            </motion.h1>
            <p className="text-slate-700 text-base my-8 leading-relaxed max-w-2xl">
              Shrinklink streamlines the process of URL shortening, making sharing
              links effortless and efficient. With our user-friendly interface,
              you can generate concise, easy-to-share URLs in seconds. Take control
              of your links and boost your online presence with Shrinklink today.
            </p>
            <div className="flex items-center gap-3">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={dashBoardNavigateHandler}
                className="bg-custom-gradient w-40 text-white rounded-md py-2.5 hover:shadow-md transition-all duration-200"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Manage Links
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={dashBoardNavigateHandler}
                className="border-btnColor border w-40 text-btnColor rounded-md py-2.5 hover:bg-btnColor hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Create Short Link
              </motion.button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -top-16 -right-16 w-72 h-72 bg-teal-500/10 rounded-full filter blur-3xl -z-10"></div>
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[480px] h-auto object-contain mx-auto"
              src="/images/img6.png"
              alt="URL shortening illustration"
            />
          </div>
        </div>
        <div className="sm:pt-12 pt-7">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-slate-800 font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
          >
            Trusted by individuals and teams at the world best companies{" "}
          </motion.p>
          <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
            <Card
              title="Simple URL Shortening"
              desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
            />
            <Card
              title="Powerful Analytics"
              desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
            />
            <Card
              title="Enhanced Security"
              desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
            />
            <Card
              title="Fast and Reliable"
              desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users.
"
            />
          </div>
        </div>
      </div>
    </div>
  );
}



      export default LandingPage;