import Navbar from "@/components/Navbar";
import products from "../../../products.json";
import Footer from "@/components/Footer";
import PromoCard from "@/components/PromoCard";
import { Categories } from "@/utils/types";
export default function PromotionPage() {
  if (!products.filter((r) => r.promotion)) {
    return (
      <main className="flex min-h-screen flex-col bg-zinc-800 text-white">
        <Navbar />
        <h1 className="flex justify-center items-center h-screen text-center text-[2rem]">
          Nenhum produto em promoção.
        </h1>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col bg-zinc-800 text-black">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center p-14">
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-4 gap-8 text-center items-center justify-center">
            {products
              .filter((r) => r.promotion)
              .map((product, index) => (
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
      </div>
      <Footer />
    </main>
  );
}
