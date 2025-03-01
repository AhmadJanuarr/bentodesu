import { FaStar } from "react-icons/fa6";

type TestimonialCardProps = {
  star: number;
  heading: string;
  subheading: string;
  date: string;
};

export const TestimonialCard = ({ star, heading, subheading, date }: TestimonialCardProps) => {
  return (
    <div className="bg-[#FCF9F9] rounded-xl px-4 py-3 h-auto size-subheading">
      <div className="flex py-4 gap-5 items-center justify-between">
        <div className="flex">
          {Array.from({ length: star }).map((_, index) => (
            <FaStar key={index} className="text-yellow-400 w-8" />
          ))}
        </div>
        <span>{date}</span>
      </div>
      <h1 className="font-bold py-2">{heading}</h1>
      <p>{subheading}</p>
    </div>
  );
};
