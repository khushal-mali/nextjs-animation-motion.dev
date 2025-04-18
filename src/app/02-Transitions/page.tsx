import * as motion from "motion/react-client";

// Duration => How long the animation takes.
// Easing => The speed curve of the animation
// Delay => How long to wait before starting the animations

const Transitions = () => {
  return (
    <div>
      <motion.div
        className="box"
        initial={{ x: 0 }}
        animate={{ x: 120 }}
        transition={{
          delay: 2,
          duration: 5,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Transitions;
