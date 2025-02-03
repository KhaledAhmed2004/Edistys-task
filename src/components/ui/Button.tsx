const Button = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <button
      // className={`flex items-center justify-center space-x-2 rounded bg-[#fe8b53] px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-[#ff7a42] md:py-5 ${className}`}
      className="flex items-center justify-center rounded-md bg-[#fe8b53] px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-[#ff7a40] active:scale-95 md:py-[15.5px]"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
