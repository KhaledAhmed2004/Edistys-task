import { useState, useRef, useEffect } from "react";

const CARD_DATA = [
  {
    tab: "Customer focused",
    title: "Purpose-built financial services",
    description:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first consumer-centric, real-time transaction account processing and credit limit system.",
    content:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behavior, and product marketing opportunities.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?auto=format",
  },
  {
    tab: "Agile and adaptable",
    title: "Agile and adaptable for growth",
    description:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    content:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?auto=format",
  },
  {
    tab: "Compliance ready",
    title: "Manage compliance with ease",
    description:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
    content:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?auto=format",
  },
  {
    tab: "Secure and safe",
    title: "Highly secure and safe",
    description:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
    content:
      "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?auto=format",
  },
];
const FinancialServicesCarousel = () => {
  const [activeTab, setActiveTab] = useState(CARD_DATA[0].tab);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);
  const lastMouseX = useRef<number>(0);
  const velocityX = useRef<number>(0);
  const lastTimestamp = useRef<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const index = cardRefs.current.findIndex(
            (ref) => ref === visibleEntry.target,
          );
          setActiveTab(CARD_DATA[index].tab);
        }
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.6,
      },
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    const index = CARD_DATA.findIndex((item) => item.tab === tab);
    const targetCard = cardRefs.current[index];

    if (targetCard && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: targetCard.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollLeft.current = scrollContainerRef.current!.scrollLeft;
    lastMouseX.current = e.pageX;
    lastTimestamp.current = Date.now();
    velocityX.current = 0;

    // Change cursor style
    scrollContainerRef.current!.style.cursor = "grabbing";
  };

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();

    const currentX = e.pageX;
    const timestamp = Date.now();
    const deltaTime = timestamp - lastTimestamp.current;

    // Calculate movement multiplier (increased for more sensitivity)
    const multiplier = 2.5;
    const deltaX = (currentX - startX.current) * multiplier;

    // Calculate velocity
    if (deltaTime > 0) {
      velocityX.current = (currentX - lastMouseX.current) / deltaTime;
    }

    // Update scroll position with enhanced sensitivity
    scrollContainerRef.current!.scrollLeft = scrollLeft.current - deltaX;

    // Update last position and timestamp
    lastMouseX.current = currentX;
    lastTimestamp.current = timestamp;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;

    isDragging.current = false;
    scrollContainerRef.current!.style.cursor = "grab";

    // Apply momentum scrolling
    const momentum = velocityX.current * 100; // Adjust this multiplier to control momentum strength
    if (Math.abs(momentum) > 0.5) {
      scrollContainerRef.current!.scrollBy({
        left: -momentum,
        behavior: "smooth",
      });
    }
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      handleMouseUp();
    }
  };

  return (
    <div className="container mx-auto max-w-7xl px-6 py-12">
      <header className="mb-12 space-y-3 text-center">
        <h3 className="font-montserrat text-lg font-bold tracking-wider text-blue-600 uppercase">
          TECHNOLOGY BUILT FOR YOU
        </h3>
        <h2 className="font-montserrat text-3xl font-semibold text-gray-900 md:text-5xl">
          The Future of Finance
        </h2>
      </header>

      <nav className="mb-6 flex flex-wrap justify-center gap-4">
        {CARD_DATA.map(({ tab }) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`rounded-full px-6 py-2 text-lg font-medium transition-all focus:ring focus:ring-gray-300 ${
              activeTab === tab
                ? "bg-blue-100 text-blue-600 hover:bg-blue-200"
                : "text-blue-600 hover:bg-blue-50"
            } `}
            aria-pressed={activeTab === tab}
            aria-label={`Show ${tab} content`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="no-scrollbar flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth p-4"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            userSelect: "none",
            touchAction: "pan-x",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          role="region"
          aria-label="Financial services features carousel"
        >
          {CARD_DATA.map((item, index) => (
            <article
              key={item.tab}
              ref={(el) => (cardRefs.current[index] = el)}
              className="grid w-full min-w-[350px] flex-none snap-center grid-cols-1 gap-6 rounded-lg bg-gray-50 p-6 shadow-lg md:grid-cols-2"
            >
              <div className="flex flex-col justify-center">
                <p className="text-lg font-semibold text-blue-600 uppercase">
                  {item.tab}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-gray-800 md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 font-medium text-gray-600">
                  {item.description}
                </p>
                <p className="mt-4 text-gray-600">{item.content}</p>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={item.image}
                  alt={`Illustration for ${item.title}`}
                  className="w-full rounded-lg object-cover shadow-md select-none"
                  loading="lazy"
                  draggable="false"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialServicesCarousel;
