import img1 from "../../assets/card1.avif";

const ForthComponent = () => {
  return (
    <div className="container mx-auto max-w-7xl px-6 py-12">
      {/* Heading Section */}
      <header className="mb-12 text-center">
        <h6 className="font-montserrat text-[16px] font-semibold text-[#1F80F0] uppercase">
          TECHNOLOGY BUILT FOR YOU
        </h6>
        <h2 className="mt-2 text-4xl text-[54px] font-semibold text-gray-800">
          The Future of Finance
        </h2>
      </header>

      {/* Tab Section */}
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        {[
          "Customer focused",
          "Agile and adaptable",
          "Compliance ready",
          "Secure and safe",
        ].map((tab, index) => (
          <button
            key={index}
            className="rounded-full border border-gray-300 bg-[#b9d9ff] px-6 py-2 text-lg font-medium text-[#1f80f0] transition-all hover:bg-gray-200 focus:ring focus:ring-gray-300"
            aria-label={tab}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap items-center justify-between gap-6 rounded-lg bg-gray-50 p-8 shadow-lg">
        <div className="flex-1">
          <p className="text-lg font-semibold text-[#1F80F0] uppercase">
            Customer focused
          </p>
          <h2 className="mt-4 text-[40px] font-bold text-gray-800">
            Purpose-built financial services
          </h2>
          <p className="mt-4 text-gray-600">
            <strong>
              Elevate customer experience and achieve agile financial product
              innovation with the world’s first consumer-centric, real-time
              transaction account processing and credit limit system.
            </strong>
          </p>
          <p className="mt-4 text-gray-600">
            Experience the advantages of integrated retail financial services
            technology, real-time analysis of transactional behavior, and
            product marketing opportunities.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={img1}
            alt="Financial Services"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ForthComponent;
