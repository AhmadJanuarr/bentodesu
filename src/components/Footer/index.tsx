import { NAV_ITEMS } from "@/datas/NavItems";
import { Mail, Phone } from "lucide-react";

type NavLinksProps = {
  navItem: string;
};

const NavLinks = ({ navItem }: NavLinksProps) => {
  return <li className="text-gray-700 size-subheading">{navItem}</li>;
};

export const Footer = () => {
  return (
    <footer className="flex w-full px-10 pt-32 bg-transparent py-8 z-10">
      <section className="grid grid-cols-1 laptop:grid-cols-4 w-full laptop:gap-0 gap-5">
        <div className="col-span-1 pr-10">
          <h1 className="text-2xl font-semibold py-4">
            Bento<span className="text-secondary">Desu.</span>
          </h1>
          <p className="text-gray-700 size-subheading">
            Bento Desu menghadirkan cita rasa Jepang dalam setiap kotaknya. Dibuat dengan bahan-bahan berkualitas dan
            cinta Jalan Bento No.1, Jalan Tokyo, Jakarta, Indonesia
          </p>
        </div>

        {NAV_ITEMS.map((nav) => (
          <div className="col-span-1">
            <h1 className="laptop:text-2xl text-[1.1rem] font-semibold py-4 ">{nav.category}</h1>
            <ul className="flex flex-col gap-5">
              {nav.items.map((item) => (
                <NavLinks navItem={item.name} key={item.id} />
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-1 size-subheading">
          <h1 className="text-2xl font-semibold py-4">Kontak kami</h1>
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-2">
              <Phone className="w-4" />
              +62 8963 0507 889
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4" />
              tiarasukma13@gmail.com
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};
