import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/hero-background-desktop.png";
import img2 from "../../assets/hero-background-desktop1.png";

const Hero = () => {
  // State for mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Update mouse position
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Update window size
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate background movement
  const moveBackgrounds = {
    x: (mousePosition.x - windowSize.width / 2) / 20,
    y: (mousePosition.y - windowSize.height / 2) / 20,
  };

  const reverseMoveBackgrounds = {
    x: -(mousePosition.x - windowSize.width / 2) / 20,
    y: -(mousePosition.y - windowSize.height / 2) / 20,
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(59.82% 121.73% at -9.66% 130.31%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)",
        clipPath: "polygon(0 0, 100% 0, 100% 73%, 0% 100%)",
      }}
    >
      {/* Overlay Image 1 */}
      <motion.img
        src={img1}
        alt="Hero Background"
        className="absolute top-0 left-0 z-[50] h-full w-full object-cover opacity-90"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ x: moveBackgrounds.x, y: moveBackgrounds.y }}
      />

      {/* Overlay Image 2 */}
      <motion.img
        src={img2}
        alt="Hero Background"
        className="absolute top-0 left-0 z-[40] h-full w-full object-cover opacity-90"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        style={{ x: reverseMoveBackgrounds.x, y: reverseMoveBackgrounds.y }}
      />

      <section className="relative container mx-auto flex flex-col items-center justify-between gap-10 px-6 py-16 text-white md:px-12 lg:flex-row lg:py-24">
        {/* Left Side - Text Content */}
        <motion.div
          className="z-[100] max-w-2xl text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-Montserrat z-[100] text-4xl leading-tight font-semibold md:text-6xl lg:text-[80px]">
            Embrace the Future of Finance
          </h2>
          <p className="z-[100] mt-4 max-w-xl text-lg font-semibold text-gray-200 md:text-xl">
            Reimagine financial services with AnyTech’s open platform, a
            distributed banking solution that powers transformation.
          </p>
          <div className="mt-6">
            <motion.button
              className="z-[100] flex items-center justify-center rounded-md bg-[#fe8b53] px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-[#ff7a40] active:scale-95 md:py-[15.5px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reach Out to Us
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="absolute top-0 right-[-250px] h-full w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          <img
            src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?auto=format"
            style={{
              clipPath: "polygon(100% 0, 100% 35%, 75% 100%, 10% 100%, 68% 0)",
              width: "90%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="Hero Image"
            className="h-full w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
