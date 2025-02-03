import React, { useMemo } from "react";

const ThirdComponent = () => {
  const features = useMemo(
    () => [
      {
        id: 1,
        img: "https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?auto=format",
        title: "Full-Suite Solutions",
        description:
          "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
      },
      {
        id: 2,
        img: "https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?auto=format",
        title: "Scalable Architecture",
        description:
          "Our solutions are built for scalability, ensuring seamless performance as your business grows.",
      },
      {
        id: 3,
        img: "https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?auto=format",
        title: "Secure Transactions",
        description:
          "Advanced encryption and security measures to keep your financial data safe at all times.",
      },
    ],
    [],
  );
  return (
    <div className="container mx-auto md:mb-[128px]">
      <section className="flex flex-col items-center px-6 py-16 text-center lg:px-12">
        {/* Heading */}
        <div className="space-y-3">
          <h3 className="font-montserrat text-lg font-bold tracking-wider text-blue-600 uppercase">
            Our Philosophy
          </h3>
          <h2 className="font-montserrat mt-2 text-3xl font-semibold text-gray-900 md:text-[56px]">
            Human-Centred Innovation
          </h2>
        </div>

        <img
          src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?auto=format"
          alt="Human-Centered Innovation"
          className="mt-6"
        />

        {/* Feature Cards with Horizontal Scroll on Mobile */}
        <div className="scrollbar-hide mt-10 flex w-full max-w-full gap-x-4 overflow-x-auto sm:flex-row md:grid md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              img={feature.img}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

type FeatureProps = {
  img: string;
  title: string;
  description: string;
};

const FeatureCard = React.memo(({ img, title, description }: FeatureProps) => {
  return (
    <article className="flex min-w-[300px] flex-col items-start space-y-4 rounded-2xl bg-[#F8FCFF] p-6 text-start md:p-8">
      <img src={img} alt={`Icon for ${title}`} className="h-12 w-12" />
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      <p className="text-lg text-gray-600">{description}</p>
    </article>
  );
});

export default ThirdComponent;
