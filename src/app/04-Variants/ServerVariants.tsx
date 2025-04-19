import { Variants } from "motion/react";
import * as motion from "motion/react-client";
import React from "react";

const ServerVariants = () => {
  const boxVariants: Variants = {
    initial: { scale: 1, rotate: 0, skew: 0 },
    hover: {
      skew: "10deg",
      scale: 1.2,
      rotate: 15,
      transition: { duration: 0.3 },
    },
    click: {
      scale: 0.9,
      rotate: -15,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={boxVariants}
      initial={"initial"}
      whileHover={"hover"}
      whileTap={"click"}
      className="h-40 w-40 cursor-pointer rounded-lg bg-green-500"
    />
  );
};

export default ServerVariants;
