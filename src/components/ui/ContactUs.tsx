import Button from "./Button";

const ContactUs = () => {
  return (
    <section
      className="bg-custom-gradient relative z-0 flex h-[60vh] w-full flex-col items-start justify-center overflow-hidden bg-cover bg-no-repeat px-6 text-white md:z-20 lg:h-[530px] lg:px-12"
      style={{ clipPath: "polygon(0 0, 100% 39%, 100% 100%, 0% 100%)" }}
    >
      <h2 className="font-montserrat mb-6 text-[40px] font-semibold text-white md:text-[56px]">
        Legacy no longer
      </h2>
      <p className="text-lg md:text-[18px]">
        Talk to us to find out how we can transform your organization for the
        future.
      </p>
      <div className="mt-6">
        <Button>Contact Us</Button>
      </div>
    </section>
  );
};

export default ContactUs;
