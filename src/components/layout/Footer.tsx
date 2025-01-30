import logo from "../../assets/logo.webp";
import { FaLinkedin } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="font-inter bg-[#002045] text-white">
      {/* Top Footer Section */}
      <TopFooter />

      <div className="border-b border-[#164377]"></div>

      {/* Bottom Footer Section */}
      <BottomFooter />
    </footer>
  );
};

const TopFooter = () => {
  return (
    <div className="container mx-auto flex items-center justify-between px-4 py-12 lg:flex-row">
      {/* Logo Placeholder */}
      <img alt="logo" src={logo} />

      {/* Solutions Links & Icons */}
      <div className="text-[#00E9EA]">
        <div className="hidden items-center gap-4 lg:flex">
          <p className="border-blue-dark text-res-body-p1-semibold lg:text-body-p1-semibold border-r px-6 py-4">
            Our Solutions
          </p>
          {/* Show solutions links on large screens */}
          <ul className="gap-4 lg:flex">
            {["AnyCaaS", "AnyBaaS", "AnyPaaS"].map((solution) => (
              <li key={solution} className="cursor-pointer hover:underline">
                {solution}
              </li>
            ))}
          </ul>
        </div>

        {/* Show icons on medium to small screens (tablet & mobile) */}
        <div className="mt-4 flex gap-4 text-2xl md:flex lg:mt-0 lg:hidden">
          <FaLinkedin className="cursor-pointer hover:text-blue-500" />
          <IoCallSharp className="cursor-pointer hover:text-green-500" />
          <IoMdMail className="cursor-pointer hover:text-red-500" />
        </div>
      </div>
    </div>
  );
};

const BottomFooter = () => {
  return (
    <div className="bg-[#00152D] py-6 text-sm text-[#1F80F0]">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 lg:flex-row">
        <p>
          <strong>© {new Date().getFullYear()} All rights reserved.</strong>{" "}
          Any Technology Pte Ltd.
        </p>
        <p className="cursor-pointer hover:underline">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
