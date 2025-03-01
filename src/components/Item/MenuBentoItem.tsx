import { ArrowRight } from "lucide-react";
type MenuBentoItemProps = {
  key: string;
  number: string;
  image: string;
  title: string;
  description: string;
};

export const MenuBentoItem = ({ key, number, image, title, description }: MenuBentoItemProps) => {
  return (
    <div className="flex min-h-[800px] items-center relative laptop:flex-row flex-col" key={key}>
      <span className="bg-primary laptop:w-[65%] w-[100%] -left-20 absolute h-[70%] -z-10 rounded-xl" />
      <div className="laptop:w-1/2 w-full">
        <img src={image} alt={title} />
      </div>
      <div className="laptop:w-1/2 w-full flex laptop:block items-center relative">
        {number && <span className="text-[10rem] text-[#CDCDCD] opacity-55 absolute -top-32">{number}</span>}
        <div className="desktop:w-4/5 laptop:w-3/5">
          <h1 className="size-heading leading-none py-10">{title}</h1>
          <p className="size-subheading">{description}</p>
          <span className="flex gap-2 items-center absolute rotate-90 -right-11 laptop:right-0 top-10">
            Scroll Down <ArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};
