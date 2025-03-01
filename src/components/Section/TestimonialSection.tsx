"use client";

import { TESTIMONIAL } from "@/datas/Testimonials";
import { useEffect, useState } from "react";
import { TestimonialCard } from "../Card/Testimonial";

export const TestimonialSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [visibleTestimonial, setVisibleTestimonial] = useState(isMobile ? 3 : 9);
  const isMoreAvailable = visibleTestimonial < TESTIMONIAL.length;
  return (
    <section className="justify-center flex flex-col laptop:py-32 relative">
      <div className="text-center">
        <h1 className="size-heading">Testimonial</h1>
        <p className="size-subheading">
          Temukan pengalaman luar biasa dari mereka yang telah mencicipi kelezatan Bento Desu.
        </p>
      </div>

      <div className="relative">
        <div className="relative overflow-hidden transition-all duration-700">
          <div className="grid grid-cols-1 laptop:grid-cols-3 gap-5 pt-10 place-items-center mx-auto max-w-5xl">
            {TESTIMONIAL.slice(0, visibleTestimonial).map((item) => (
              <TestimonialCard
                key={item.id}
                star={item.star}
                heading={item.name}
                subheading={item.description}
                date={item.date}
              />
            ))}
          </div>
        </div>

        {isMoreAvailable && (
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        )}
      </div>

      {isMoreAvailable && (
        <div className="flex justify-center py-10">
          <button
            className="px-8 py-3 size-subheading rounded-full bg-secondary text-white"
            onClick={() => setVisibleTestimonial((prev) => prev + 3)}
          >
            Tampilkan lebih banyak
          </button>
        </div>
      )}
    </section>
  );
};
