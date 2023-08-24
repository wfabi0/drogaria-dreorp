import {
  HeartIcon,
  UserIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-purple-700 text-white">
      <div className="max-w-[98%] flex flex-warp items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="text-[2rem] font-bold flex hover:text-indigo-300"
        >
          DROGARIA DREORP
        </Link>
        <div className="w-auto block self-center">
          <ul className="font-medium self-center p-0 m-0 text-center flex text-[1.4rem] flex-row gap-4">
            <li>
              <Link href="/" className="hover:text-indigo-300">
                Página Inicial
              </Link>
            </li>
            <li>
              <Link href="/#categorias" className="hover:text-indigo-300">
                Categorias
              </Link>
            </li>
            <li>
              <Link href="/#promoções" className="hover:text-indigo-300">
                Promoções
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <form className="max-w-sm px-4">
            <div className="relative">
              <button className="hover:text-purple-700">
                <MagnifyingGlassIcon className="absolute h-6 w-6 top-0 bottom-0 my-auto left-3 text-black" />
              </button>
              <input
                type="text"
                placeholder="Barra de pesquisa"
                className="w-full py-3 pl-12 pr-4 text-black border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 placeholder-gray-500"
              />
            </div>
          </form>
        </div>
        <div className="">
          <ul className="self-center flex flex-row gap-2 text-center">
            <li>
              <Link
                title="Carrinho"
                href="/carrinho"
                className="hover:text-indigo-300"
              >
                {/* <span className="absolute rounded-full text-[0.9rem] px-[0.35em] py-[0.1em] text-white bg-red-500 font-bold leading-none items-center text-center">
                  1
                </span> */}
                <ShoppingBagIcon className="h-8 w-8" />
              </Link>
            </li>
            <li>
              <Link
                title="Favoritos"
                href="/favoritos"
                className="hover:text-indigo-300"
              >
                <HeartIcon className="h-8 w-8" />
              </Link>
            </li>
            <li>
              <Link
                title="Usuário"
                href="/cadastro"
                className="hover:text-indigo-300"
              >
                <UserIcon className="h-8 w-8" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
