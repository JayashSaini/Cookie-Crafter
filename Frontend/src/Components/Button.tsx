const Button = ({ backgroundColor, text, textColor, onClick }: any) => {
  return (
    <button
      className={`${backgroundColor} ${textColor} lg-text-[25px] sm:text-[16px] text-[13px] lg:pt-4 lg:pb-4 lg:pl-9 lg:pr-9  sm:pt-3 sm:pb-3 sm:pl-8 sm:pr-8  pt-2 pb-2 pl-7 pr-7 border-2 border-[#ff9330] rounded-full tracking-normal hover:bg-opacity-75`}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
