import CategoryCard from "@/components/CategoryCard";
import Navbar from "@/components/Navbar";
import PromoCard from "@/components/PromoCard";
import {
  BoltIcon,
  FolderOpenIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import products from "../../products.json";
import { Categories, ProductCardProps } from "@/utils/types";
import ProductCard from "@/components/ProductCard";
import selectRandom from "@/utils/selectRandom";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-800 text-white">
      <Navbar />
      <div
        className="py-10 flex flex-col justify-center items-center"
        id="promoções"
      >
        <div id="promoTitle" className="self-start pl-36">
          <Link href={"/promocoes"}>
            <h1 className="flex text-[2.5rem] italic underline decoration-purple-700 decoration-2 pb-10">
              <BoltIcon className="w-14 h-14 text-purple-700" /> Promoções
            </h1>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-8 px-6 text-center items-center">
          {(
            selectRandom(
              products.filter((product) => product.promotion) as any,
              4
            ) as any
          ).map((product: ProductCardProps, index: number) => (
            <PromoCard
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
              newPrice={product.newPrice}
              category={product.category as Categories}
              promotion={product.promotion}
              key={index}
            />
          ))}
        </div>
      </div>
      <div
        className="flex items-center justify-center flex-col py-12 border-y-4 border-transparent border-t-purple-700 border-b-purple-700 bg-gray-400 bg-opacity-5"
        id="categorias"
      >
        <div className="pb-14 self-start pl-36">
          <h1 className="flex text-[2.5rem] italic underline decoration-purple-700 decoration-2 pr-[65rem]">
            <FolderOpenIcon className="w-14 h-14 text-purple-700 mr-1.5" />
            Categorias
          </h1>
        </div>
        <div className="grid grid-cols-5 gap-8 px-6">
          <CategoryCard
            title="Desodorantes"
            image="https://i.imgur.com/zkSaDFj.jpg"
            id="desodorantes"
          />
          <CategoryCard
            title="Remedios"
            image="https://i.imgur.com/TmztHz5.jpg"
            id="remedios"
          />
          <CategoryCard
            title="Chocolates"
            image="https://i.imgur.com/dFFos0B.jpg"
            id="chocolates"
          />
          <CategoryCard
            title="Escovas de dentes"
            image="https://i.imgur.com/oU0q4BL.jpg"
            id="escovas de dentes"
          />
          <CategoryCard
            title="Higiene Infantil"
            image="https://i.imgur.com/czjVVsr.jpg"
            id="higiene infantil"
          />
        </div>
      </div>
      <div
        className="py-12 flex flex-col justify-center items-center"
        id="produtos"
      >
        <div className="self-start pl-36">
          <h1 className="flex text-[2.5rem] italic underline decoration-purple-700 decoration-2">
            <ShoppingCartIcon className="w-14 h-14 text-purple-700 mr-1.5" />
            Produtos
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-8 px-6 text-center items-center py-16">
          {products
            // .filter((product) => product.promotion !== true)
            .map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
                newPrice={product.newPrice}
                category={product.category as Categories}
                promotion={product.promotion}
              />
            ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
