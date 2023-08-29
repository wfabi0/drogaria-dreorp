import Navbar from "@/components/Navbar";
import Products from "../../../../products.json";
import Image from "next/image";
import { FireIcon } from "@heroicons/react/24/solid";
import AddToCartButton from "@/components/AddToCartButton";
import { Categories } from "@/utils/types";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { FolderOpenIcon } from "@heroicons/react/24/outline";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categoryName = decodeURI(params.category).toLowerCase();
  const category = [
    "desodorantes",
    "remedios",
    "chocolates",
    "escovas de dentes",
    "higiene infantil",
    "beleza",
  ].includes(categoryName);
  const products = Products.filter(
    (product) => product.category === decodeURI(params.category).toLowerCase()
  );
  if (!category) {
    return (
      <main className="flex min-h-screen flex-col bg-zinc-800 text-white">
        <Navbar />
        <h1 className="flex justify-center items-center h-screen text-center text-[2rem]">
          Categoria não encontrada.
        </h1>
        <Footer />
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col bg-zinc-800 text-black">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center p-14">
        <div className="pb-14 self-start">
          <h1 className="text-white flex text-[2.5rem] italic underline decoration-purple-700 decoration-2 pl-0">
            <FolderOpenIcon className="w-14 h-14 text-purple-700 mr-1.5" />
            {categoryName.charAt(0).toUpperCase() +
              categoryName.slice(1).toLowerCase()}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-4 gap-8 text-center items-center justify-center">
            {products.map((product, index) => (
              <ProductCard
                category={product.category as Categories}
                description={product.description}
                image={product.image}
                price={product.price}
                title={product.title}
                newPrice={product.newPrice}
                promotion={product.promotion}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
