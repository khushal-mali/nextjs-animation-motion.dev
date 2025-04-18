import * as motion from "motion/react-client";

// Duration => How long the animation takes.
// Easing => The speed curve of the animation
// Delay => How long to wait before starting the animations

const KeyFrames = () => {
  return (
    <div>
      {/* <motion.div
        className="box flex items-center text-white justify-center"
        animate={{
          scale: [1, 2, 3, 2, 1],
          rotate: [0, 60, 30, 270, 160, 230, 360],
          borderRadius: ["0%", "20%", "50%", "20%", "0%"],
        }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        Hello
      </motion.div> */}

      <div className="flex space-x-2">
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="w-8 h-8 bg-teal-500 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0, 100],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyFrames;
