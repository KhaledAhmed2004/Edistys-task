import Button from "./Button";

const Hero = () => {
  return (
    <section
      className="relative bg-gray-900 px-6 py-16 text-white lg:px-12"
      style={{ clipPath: "polygon(0 0, 100% 1%, 100% 76%, 0% 100%)" }}
    >
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <h2 className="font-Montserrat text-4xl leading-tight font-bold md:text-6xl lg:text-[80px]">
          Embrace the Future of Finance
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
          Reimagine financial services with AnyTech’s open platform, a
          distributed banking solution that powers transformation.
        </p>
        <Button>Reach Out to Us</Button>
      </div>
    </section>
  );
};

export default Hero;
