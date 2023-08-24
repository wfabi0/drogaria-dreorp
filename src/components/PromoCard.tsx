import { ProductCardProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export default function PromoCard({
  title,
  description,
  image,
  newPrice,
  price,
  category,
  promotion,
  key,
}: ProductCardProps) {
  return (
    <Link href={`/produto/${title}`} className="">
      <div
        className="rounded-3xl overflow-hidden shadow-2xl border-2 border-zinc-400 transform transition-transform hover:scale-105 bg-slate-100 hover:border-4 hover:border-purple-700 h-full w-full"
        id={key?.toString()}
      >
        <div className="h-96 w-full relative">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-gray-700 font-semibold text-[1.7rem] mb-2">
            {title}
          </h3>
          <p className="text-gray-500 text-[1.2rem]">{description}</p>
          <span className="flex flex-row text-center justify-evenly gap-4 items-center">
            <p className="text-red-600 decoration-2 line-through text-[1.65rem]">
              R${price}
            </p>
            <p className="text-black text-[2rem]">R${newPrice}</p>
          </span>
        </div>
      </div>
    </Link>
  );
}
