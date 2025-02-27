import { MenuBentoItem } from "@/components/Item/MenuBentoItem";
import { TestimonialSection } from "@/components/Section/TestimonialSection";
import { MENU_BENTO } from "@/datas/MenuBento";
import { Pointer } from "lucide-react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

export const generateMetadata = () => {
  return (
    <>
      <NextSeo
        title="Bentodesu - Perfect Bentobox"
        description="Memperkenalkan sebuah bento box yang menawarkan hidangan Jepang asli yang praktis dan lezat. Dengan pilihan yang beragam dan bahan-bahan segar, bentobox ini memberikan pengalaman kuliner yang tak terlupakan."
      />
    </>
  );
};

export default function Home() {
  return (
    <div className="items-center justify-center w-full flex flex-col pt-20">
      <img
        src="/elements/element5.png"
        alt="element-background"
        className="w-full absolute -z-10 top-0 laptop:max-h-[15%] min-h-[9%]"
      />
      <section className="flex justify-center flex-col items-center py-10 laptop:py-20 desktop:py-32">
        <h1 className="laptop:text-[4rem] desktop:text-[4.5rem] font-bold text-center text-[2em]">
          Nikmati Kelezatan dalam Kotak Bento yang Sempurna
        </h1>
        <p className="size-subheading laptop:w-1/2 text-center py-7">
          Setiap bento adalah sebuah karya seni. Dibuat dengan penuh perhatian dan cinta, kami menyajikan hidangan
          Jepang asli yang praktis dan lezat. Temukan menu favorit Anda dan rasakan kenikmatan dalam setiap gigitan.
        </p>
        <button className="px-5 py-3 size-subheading  rounded-full border border-secondary text-secondary">
          Lihat Menu Bento Kami.
        </button>

        <div className="w-full flex justify-center py-28 relative">
          <div className="laptop:p-4 p-2 bg-white rounded-xl z-10 shadow-xl">
            <Image
              src="/img/sample1.png"
              alt="sample1"
              className="laptop:w-[300px] w-[160px] rounded-md"
              width={300}
              height={300}
            />
          </div>
          <div className="laptop:p-4 p-2 bg-white rounded-xl absolute  shadow-xl -rotate-[19deg] laptop:-translate-x-36 -translate-x-24">
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
