import Image from "next/image";
import Link from "next/link";

export default function Hero({ article }) {
  if (!article) {
    return (
      <div className="w-full bg-gray-200 h-64 md:h-96 flex items-center justify-center">
        <p className="text-gray-600">No top story available</p>
      </div>
    );
  }

  return (
    <Link href={article.url} target="_blank">
    <div className="w-full mt-4">
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden cursor-pointer">
        <Image
          src={article.image}
          alt={article.title}
          fill
          unoptimized     
          className="object-cover"
        />

        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h2 className="text-white text-xl md:text-3xl font-bold leading-tight">
            {article.title}
          </h2>
        </div>
      </div>
    </div>
    </Link>
  );
}
