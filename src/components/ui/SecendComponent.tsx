import { motion, useScroll, useTransform } from "framer-motion";
import img from "../../assets/girl.avif";
import backgroundSVG from "../../assets/background.svg";
import foreground from "../../assets/foreground.png";

const floatAnimation = (delay: number) => ({
  y: [0, -5, 0], // Moves up and down
  transition: {
    duration: 7, // Slower movement (5s)
    ease: "easeInOut",
    repeat: Infinity,
    delay: delay,
  },
});

const SecondComponent = () => {
  const { scrollY } = useScroll(); // Get the scroll position

  // Track the scroll direction with a smaller range for smoother effect
  const bgMove = useTransform(scrollY, [0, 500], ["0%", "10%"]); // Reduced movement (10% instead of 20%)

  return (
    <section className="container mx-auto flex flex-col items-center justify-between gap-8 px-6 py-16 lg:flex-row lg:px-14">
      {/* Text Content */}
      <article className="max-w-2xl space-y-6">
        <h3 className="font-montserrat text-lg font-bold tracking-wider text-blue-600 uppercase">
          Powering the Future of Finance
        </h3>
        <h2 className="font-montserrat mt-2 text-3xl font-semibold text-gray-900 md:text-[56px]">
          Uncovering new ways to delight customers
        </h2>
        <p className="text-lg text-gray-600">
          <strong>
            AnyTech is revolutionizing financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </strong>
        </p>
        <p className="text-lg text-gray-600">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </article>

      {/* Image Section with Background SVG */}
      <div className="relative w-full max-w-md lg:max-w-lg">
        {/* Background SVG that moves based on scroll */}
        <motion.img
          src={backgroundSVG}
          alt="Background design"
          className="absolute -top-16 left-1/2 -z-10 w-[120%] -translate-x-1/2 opacity-70"
          style={{ y: bgMove }} // Apply subtle scroll effect
          transition={{ type: "spring", stiffness: 50, damping: 20 }} // Less intense spring transition
        />
        <img
          src={foreground}
          className="absolute bottom-[-95px] left-1/2 z-50 w-[120%] -translate-x-1/2 opacity-70"
        />

        {/* Main Image */}
        <img
          src={img}
          alt="A person representing financial technology"
          className="relative z-10 mx-auto w-3/4 shadow-2xl"
        />

        {/* Floating Decorative Icons */}
        <motion.img
          src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?auto=format"
          alt="Decorative icon"
          className="absolute top-25 left-5 z-20 size-[75px]"
          animate={floatAnimation(0)}
        />
        <motion.img
          src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?auto=format"
          alt="Decorative icon"
          className="absolute top-50 left-36 z-20 size-[75px]"
          animate={floatAnimation(1)}
        />
        <motion.img
          src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?auto=format"
          alt="Decorative icon"
          className="absolute top-10 right-2 z-20 size-[115px]"
          animate={floatAnimation(2)}
        />
      </div>
    </section>
  );
};

export default SecondComponent;
