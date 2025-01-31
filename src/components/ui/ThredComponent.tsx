import React from "react";
import { FaMicrochip, FaLightbulb } from "react-icons/fa6";
import { RiGitBranchFill } from "react-icons/ri";

type FeatureProps = {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
};

const FeatureCard = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <div className="flex max-w-md flex-col items-center space-y-4 rounded-2xl bg-[#F8FCFF] p-6 shadow-lg md:p-8">
      <Icon className="text-4xl text-blue-600" />
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
};

const ThirdComponent = () => {
  const features = [
    {
      id: 1,
      icon: RiGitBranchFill,
      title: "Full-Suite Solutions",
      description:
        "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    },
    {
      id: 2,
      icon: FaLightbulb,
      title: "Scalable Architecture",
      description:
        "Our solutions are built for scalability, ensuring seamless performance as your business grows.",
    },
    {
      id: 3,
      icon: FaMicrochip,
      title: "Secure Transactions",
      description:
        "Advanced encryption and security measures to keep your financial data safe at all times.",
    },
  ];

  return (
    <section className="flex flex-col items-center px-6 py-16 text-center lg:px-12">
      {/* Heading */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold tracking-wider text-blue-600 uppercase">
          Our Philosophy
        </h3>
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Human-Centred Innovation
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ThirdComponent;
