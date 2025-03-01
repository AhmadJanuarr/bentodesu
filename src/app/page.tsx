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
              src="/img/sample2.png"
              alt="sample2"
              className="laptop:w-[300px] w-[160px] rounded-md"
              width={300}
              height={300}
            />
          </div>
          <div className="laptop:p-4 p-2 bg-white rounded-xl absolute  shadow-xl rotate-[19deg] laptop:translate-x-36 translate-x-24">
            <Image
              src="/img/sample3.png"
              alt="sample3"
              className="laptop:w-[300px] w-[160px] rounded-md"
              width={300}
              height={300}
            />
          </div>
          <img src="/elements/element2.png" alt="element-2" className="absolute -z-10 w-[300px] top-10 right-80" />
          <img src="/elements/element4.png" alt="element-2" className="absolute -z-10 w-[100px] bottom-0 left-0" />
          <img
            src="/elements/element4.png"
            alt="element-2"
            className="absolute -z-10 w-[100px] bottom-20 right-0 rotate-180"
          />
        </div>
      </section>

      <section className="justify-center flex relative laptop:flex-row flex-col-reverse items-center w-full">
        <div className="laptop:w-1/2 flex flex-col justify-center gap-10 items-center laptop:items-start">
          <img
            src="/elements/element3.png"
            alt="element3"
            className="absolute -z-10 laptop:w-1/3 laptop:-left-20 laptop:button-none  bottom-20"
          />
          <h1 className="text-[2rem]">
            <span className="text-secondary">Lebih dari Sekadar Makanan</span> – Perjalanan Rasa dari Jepang
          </h1>
          <p className="size-subheading">
            Di Bento Desu, kami tidak hanya menyajikan makanan. Setiap kotak bento yang kami buat adalah hasil dari
            kecintaan kami terhadap tradisi Jepang yang diwariskan dari generasi ke generasi. Dari bahan-bahan segar dan
            berkualitas hingga penyajian yang artistik, setiap elemen berperan dalam menciptakan pengalaman bersantap
            yang lengkap dan autentik.
          </p>
          <div className="">
            <button className="px-8 py-3 size-subheading  rounded-full bg-secondary text-white">
              Kenali Kami Lebih Baik
            </button>
          </div>
        </div>
        <div className="laptop:w-1/2">
          <Image src="/img/sample4.png" alt="sample 4" width={800} height={300} />
        </div>
        <img
          src="/elements/element1.png"
          alt="element-2"
          className="absolute -z-10 w-[300px] top-20 -right-20 rotate-180"
        />
        <img
          src="/elements/element4.png"
          alt="element-2"
          className="absolute -z-10 w-[100px] bottom-0 -left-20 rotate-180"
        />
      </section>

      <section className="justify-center flex flex-col  py-24 laptop:py-32 h-auto gap-5 w-full">
        {MENU_BENTO.map((item) => (
          <MenuBentoItem
            key={item.number}
            number={item.number}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>

      <TestimonialSection />

      <section
        className="justify-center flex flex-col py-32 min-h-screen w-screen items-center  overflow-hidden relative "
        style={{ backgroundColor: "#FFE8D4" }}
      >
        <div className="desktop:w-[70%] flex flex-col gap-5 justify-center items-center text-center z-10">
          <div className="absolute -z-10 top-0 left-0 w-full laptop:w-1/2">
            <Image src="/elements/dots1.png" alt="dot" width={800} height={500} className="w-full h-auto" />
          </div>
          <div className="absolute -z-10 laptop:top-0 bottom-0 -right-60 laptop:-right-96 w-full laptop:w-1/2">
            <Image src="/elements/element1.png" alt="element1" width={800} height={500} className="w-full h-auto" />
          </div>
          <h1 className="size-heading">Pesan Mudah, Cepat dan Praktis Melalui WhatsApp!</h1>
          <p className="size-subheading laptop:px-16 px-5">
            Tertarik mencoba berbagai menu bento kami? Jangan ragu untuk menghubungi kami langsung di WhatsApp! Kami
            dengan senang hati membantu Anda mendapatkan bento favorit Anda. Pesan sekarang, karena kelezatan menanti di
            setiap gigitan!
          </p>
          <Link href="https://api.whatsapp.com/send?phone=089630507889" className="py-10">
            <button className="px-8 w-64 py-3 size-subheading rounded-full border border-[#FCAC66] text-[#FCAC66] flex justify-between items-center">
              <p className="font-semibold">Chat whatsapp</p>
              <div className="bg-[#FCAC66] rounded-full py-3 px-4">
                <Pointer className="text-slate-100 w-5" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
