import { ProductCardProps } from "@/utils/types";
import Image from "next/image";
import { FireIcon } from "@heroicons/react/24/outline";
import AddToCartButton from "./AddToCartButton";
import Link from "next/link";

export default function ProductCard({
  title,
  description,
  image,
  price,
  promotion,
  newPrice,
  category,
  key,
}: ProductCardProps) {
  return (
    <div
      className="bg-slate-100 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl w-full h-full flex flex-col"
      id={key?.toString()}
    >
      <div className="h-96 w-full relative">
        <Link className="flex" href={`/produto/${title}`}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="100%"
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>
      <div className="p-6 flex-grow flex-col">
        <h3 className="text-gray-900 font-semibold text-[1.7rem] mb-2 flex flex-row text-center items-center justify-center">
          {title}
        </h3>
        <p className="text-gray-600 text-[1.2rem] mb-4">{description}</p>
      </div>
      <div className="p-6 pt-0">
        <p className="text-purple-700 font-semibold text-[2rem] flex text-center items-center justify-center">
          {promotion ? (
            <FireIcon
              title={`Promoção! R$${price}`}
              className="w-6 h-6 text-red-500 items-center text-center flex"
            />
          ) : (
            ""
          )}{" "}
          R${promotion ? newPrice : price}
        </p>
        <AddToCartButton
          title={title}
          category={category}
          description={description}
          image={image}
          price={price}
          promotion={promotion}
          newPrice={newPrice}
        />
      </div>
    </div>
  );
}
