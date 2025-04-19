import * as motion from "motion/react-client";

// whileHover => How long the animation takes.
// whileTap => The speed curve of the animation
// whileDrag => How long to wait before starting the animations

const images = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Nature Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Nature Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Nature Image 3",
  },
];

const Gestures = () => {
  return (
    <div className="w-full h-full">
      {/* <motion.div
        className="box rounded-lg cursor-pointer"
        whileHover={{ scale: 1.2, rotate: 10 }}
        // whileTap={{ scale: 0.8 }}
        drag
        dragConstraints={{
          top: -150,
          left: -150,
          right: 150,
          bottom: 150,
        }}
        whileDrag={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
      /> */}

      {/* <motion.div
        initial={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.01 }}
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        dragElastic={0.2}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mx-auto max-w-sm text-black bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      >
        <img
          className="w-full h-48 object-cover"
          src="https://images.unsplash.com/photo-1528075395564-444ce37136bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card Image"
        />
        <div className="p-6">
          <h2 className="font-semibold text-xl mb-2">Dynamic Card Title</h2>
          <p className="text-gray-700 mb-4">
            This is my simple and amazing card build with amazing animations library
            (motion.dev)
          </p>
          <button className="bg-blue-400 cursor-pointer text-white rounded transition hover:bg-blue-600 px-4 py-2">
            Learn More
          </button>
        </div>
      </motion.div> */}

      <div className="w-[80%] flex">
        {images.map((image, i) => (
          <motion.div
            key={i}
            className="relative m-[1rem] overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img src={image.src} alt={image.caption} className="w-full h-auto" />

            <motion.div
              className="absolute inset-0 flex items-center justify-center text-white bg-opacity-50 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              whileHover={{ opacity: 1 }}
            >
              <p className="text-lg max-sm:text-xs">{image.caption}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gestures;
