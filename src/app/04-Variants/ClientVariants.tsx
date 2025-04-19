"use client";

import { Variants as VariantsType } from "motion/react";
import { motion } from "motion/react";
import { useState } from "react";

const variants: VariantsType = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: [0.5, 1.2, 1] },
  exit: { opacity: 0, scale: 0.5 },
};

const cardVariants: VariantsType = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

const ClientVariants = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [isFlipped, setIsFlipped] = useState<boolean>(true);

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        variants={variants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        exit="exit"
        className="box"
      />

      <button
        onClick={() => setVisible((prev) => !prev)}
        className="cursor-pointer w-full border py-1 rounded-md"
      >
        Toggle
      </button>

      <motion.div className="perspective-1000">
        <motion.div
          variants={cardVariants}
          initial="front"
          transition={{ duration: 0.6 }}
          animate={isFlipped ? "back" : "front"}
          className="w-64 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-style-preserve-3d"
        >
          {/* <motion.div className="absolute inset-0 bg-white flex items-center justify-center text-xl backface-hidden font-bold">
            Front side
          </motion.div> */}
          <motion.div className="absolute inset-0 bg-blue-500 flex items-center justify-center text-xl font-bold rotate-y-180">
            Back side
          </motion.div>
        </motion.div>
      </motion.div>

      <button
        onClick={() => setIsFlipped((prev) => !prev)}
        className="cursor-pointer w-full border py-1 rounded-md"
      >
        Toggle
      </button>
    </div>
  );
};

export default ClientVariants;
