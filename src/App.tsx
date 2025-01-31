import Footer from "./components/layout/Footer";
import ContactUs from "./components/ui/ContactUs";
import ForthComponent from "./components/ui/ForthComponent";
import Hero from "./components/ui/Hero";
import SecendComponent from "./components/ui/SecendComponent";
import ThredComponent from "./components/ui/ThredComponent";

function App() {
  return (
    <div>
      <Hero />
      <SecendComponent />
      <ThredComponent />
      <ForthComponent />
      <svg
        className="undefined md:my-sm my-lg max-h-[240px] min-h-[60px] w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M-240 0L1680 0L-240 280L-240 0Z"
          fill="url(#paint0_linear_6055_471)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_6055_471"
            x1="458.5"
            y1="1561.14"
            x2="392.705"
            y2="52.1879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1F80F0"></stop>
            <stop offset="1" stop-color="#1F80F0" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
