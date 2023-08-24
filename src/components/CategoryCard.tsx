import { CategoryCardProps } from "@/utils/types";
import Image from "next/image";

export default function CategoryCard({ title, image, id }: CategoryCardProps) {
  return (
    <div id={id} className="flex flex-col items-center text-center">
      <a href={`#${id}`} className="flex flex-col group items-center space-y-2">
        <div className="rounded-full relative h-36 w-36 transition duration-500 ease-in-out border-transparent group-hover:border-purple-500 group-hover:border-4">
          <Image
            src={image}
            alt={id}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </div>
        <p className="text-center text-[1.5rem] items-center self-center transition duration-700 ease-in-out group-hover:text-purple-500">
          {title}
        </p>
      </a>
    </div>
  );
}
