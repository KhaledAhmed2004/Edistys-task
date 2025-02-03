import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/cta-background-patterns.png";
import img2 from "../../assets/Frame 1.png";

const ContactUs: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const moveBackgrounds = {
    x: (mousePosition.x - window.innerWidth / 2) / 20,
    y: (mousePosition.y - window.innerHeight / 2) / 20,
  };

  const reverseMoveBackgrounds = {
    x: -(mousePosition.x - window.innerWidth / 2) / 20,
    y: -(mousePosition.y - window.innerHeight / 2) / 20,
  };

  return (
    <section
      className="bg-custom-gradient relative overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 39%, 100% 100%, 0% 100%)" }}
    >
      {/* Background Images */}
      <motion.img
        src={img1}
        alt="Wave lines pattern"
        className="absolute top-0 left-0 h-full w-full object-cover"
        style={{ willChange: "transform" }}
        animate={moveBackgrounds}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
      />
      {/* <motion.img
        src={img2}
        alt="Wave lines pattern"
        className="absolute top-[-90px] left-0 z-10 w-full h-full object-cover md:hidden"
        style={{ willChange: "transform", filter: "brightness(0.5)" }}
        animate={reverseMoveBackgrounds}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
      /> */}
      {/* Second SVG with reversed movement */}
      <motion.img
        src={img2}
        alt="Wave lines pattern for desktop background"
        className="absolute top-[-90px] left-0 z-10 h-full w-full object-cover"
        style={{ willChange: "transform", filter: "brightness(0.5)" }}
        animate={reverseMoveBackgrounds}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex min-h-[400px] w-full flex-col items-start justify-center px-6 py-16 text-white sm:py-20 md:px-12 lg:min-h-[530px]">
        <h2 className="font-montserrat z-10 mb-6 text-[clamp(32px,5vw,56px)] font-semibold text-white">
          Legacy no longer
        </h2>
        <p className="z-10 text-lg text-[clamp(14px,4vw,18px)] md:text-[18px]">
          Talk to us to find out how we can transform your organization for the
          future.
        </p>
        <div className="z-10 mt-6">
          <button className="flex items-center justify-center rounded-md bg-[#fe8b53] px-6 py-3 text-[clamp(14px,1.5vw,18px)] font-semibold text-white transition-all hover:bg-[#ff7a40] active:scale-95 md:px-10 md:py-4">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
