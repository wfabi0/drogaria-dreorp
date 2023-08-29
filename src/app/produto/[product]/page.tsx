import Navbar from "@/components/Navbar";
import products from "../../../../products.json";
import Image from "next/image";
import { FireIcon } from "@heroicons/react/24/solid";
import AddToCartButton from "@/components/AddToCartButton";
import { Categories } from "@/utils/types";
import Footer from "@/components/Footer";

export default function ProductPage({
  params,
}: {
  params: { product: string };
}) {
  // console.log(decodeURI(params.product));
  const product = products.find(
    (product) => product.title === decodeURI(params.product)
  );
  if (!product) {
    return (
      <main className="flex min-h-screen flex-col bg-zinc-800 text-white">
        <Navbar />
        <h1 className="flex justify-center items-center h-screen text-center text-[2rem]">
          Produto não encontrado...
        </h1>
        <Footer />
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col bg-zinc-800 text-black">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl p-8 bg-slate-100 text-black rounded-lg shadow-lg">
          <div className="w-auto h-96 relative rounded-lg overflow-hidden border-4 border-black">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="100%"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="mt-8">
            <h1 className="text-4xl font-semibold">{product.title}</h1>
            <div className="mt-2 text-[1.5rem]">{product.description}</div>
            <div className="text-purple-700 font-semibold text-[2.5rem] items-center flex">
              {product.promotion ? (
                <a href="/#promoções">
                  <FireIcon
                    title={`Promoção! R$${product.price}`}
                    className="w-9 h-9 text-red-500 items-center flex"
                  />
                </a>
              ) : (
                ""
              )}{" "}
              R${product.promotion ? product.newPrice : product.price}
            </div>
            <div className="items-center text-center justify-center">
              <AddToCartButton
                title={product.title}
                category={product.category as Categories}
                price={product.price}
                image={product.image}
                description={product.description}
                newPrice={product.newPrice}
                promotion={product.promotion}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
