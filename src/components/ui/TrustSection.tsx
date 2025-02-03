const TrustSection = () => {
  // Array of logo images
  const logos = [
    "https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png",
    "https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png",
    "https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png",
    "https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png",
    "https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png",
    "https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png",
    "https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png",
    "https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png",
    "https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png",
    "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png",
    "https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg",
    "https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png",
    "https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png",
    "https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png",
    "https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png",
  ];

  return (
    <div className="container mx-auto py-12 text-center">
      {/* Header Section */}
      <header>
        <h6 className="mb-4 text-lg font-semibold text-gray-600">
          TRUSTED BY THE BEST
        </h6>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { value: ">20", label: "Years of Experience" },
            { value: "20+", label: "Financial Institutions" },
            { value: ">200m", label: "Customers Each" },
          ].map((item, index) => (
            <div key={index}>
              <h2 className="font-montserrat text-5xl font-semibold tracking-tight text-blue-500 lg:text-7xl">
                {item.value}
              </h2>
              <p className="text-lg text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Logo Section */}
      <div className="mt-12 grid grid-cols-2 items-center justify-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Trusted Partner ${index + 1}`}
            className="mx-auto max-w-[150px] sm:max-w-[180px] md:max-w-[200px]"
          />
        ))}
      </div>
    </div>
  );
};

export default TrustSection;
