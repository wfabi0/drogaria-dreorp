import Link from "next/link";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaCopyright,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-purple-700 py-12 pb-8 bg-opacity-95">
      <div className="container mx-auto flex justify-center items-center px-10">
        <div className="text-white text-center">
          <p className="text-[1.4rem]">DROGARIA DREORP</p>
          <p className="text-[1.1rem]">Compre todo tipo de droga que quiser.</p>
          <p className="text-[1.1rem]">
            Desenvolvido por{" "}
            <Link
              className="hover:text-indigo-300"
              href={"https://github.com/wfabi0"}
            >
              wfabi0
            </Link>
            {" e "}
            <Link
              className="hover:text-indigo-300"
              href={"https://github.com/jonathan-wallaces"}
            >
              jonathan-wallaces
            </Link>
            .
          </p>
          <Link href={"https://www.sje.ifmg.edu.br/portal/"} className="text-sm pt-4 hover:text-lime-300 text-slate-300 flex items-center gap-2 text-center justify-center">
            IFMG - São João Evangelista 2023 <FaCopyright />
          </Link>
        </div>
      </div>
    </footer>
  );
}
