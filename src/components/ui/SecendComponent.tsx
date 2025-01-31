import img from "../../assets/girl.avif";

const SecondComponent = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-8 px-6 py-16 lg:flex-row lg:px-12">
      {/* Text Content */}
      <article className="max-w-2xl space-y-6">
        <h3 className="text-lg font-semibold tracking-wider text-blue-600 uppercase">
          Powering the Future of Finance
        </h3>
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Uncovering new ways to delight customers
        </h2>
        <p className="text-lg text-gray-600">
          AnyTech is revolutionizing financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-lg text-gray-600">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </article>

      {/* Image Section */}
      <div className="w-full max-w-md lg:max-w-lg">
        <img
          src={img}
          alt="A person representing financial technology"
          className="h-auto w-full rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default SecondComponent;
