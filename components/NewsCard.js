import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ article }) {
  const slug = encodeURIComponent(article.title);

  return (
    <Link href={article.url} target="_blank">
      <div className="flex gap-3 border-b pb-3 mb-3 cursor-pointer hover:opacity-90">
        
        {/* Thumbnail Image */}
        <div className="w-28 h-20 relative">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-between">
          <h3 className="text-sm font-semibold leading-tight line-clamp-2">
            {article.title}
          </h3>

          <p className="text-xs text-gray-600 line-clamp-2 hidden md:block">
            {article.summary}
          </p>
        </div>

      </div>
    </Link>
  );
}
