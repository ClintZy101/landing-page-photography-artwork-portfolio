import React from "react";
import { motion } from "framer-motion";

export default function ExpandingDiv() {
  return (
    <div className="w-full grid gap-5">
      <motion.div
        initial={{ width: "100px", height: "50px" }}
        animate={{ width: "60%", position: "relative" }}
        transition={{ duration: 2 }}
        className="bg-green-500 text-white text-center flex justify-center items-center"
      >
        my div long
      </motion.div>
      <motion.div
        initial={{ width: "100px", height: "50px" }}
        animate={{ width: "80%", position: "relative" }}
        transition={{ duration: 2 }}
        className="bg-blue-500 text-white text-center flex justify-center items-center"
      >
        my div long
      </motion.div>
      <motion.div
        initial={{ width: "100px", height: "50px" }}
        animate={{ width: "100%", position: "relative" }}
        transition={{ duration: 2 }}
        className="bg-yellow-500 text-white text-center flex justify-center items-center"
      >
        my div long
      </motion.div>
    </div>
  );
}
