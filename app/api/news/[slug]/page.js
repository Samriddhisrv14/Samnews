import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ article }) {
  // Create safe slug
  const slug = article.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return (
    <Link href={`/news/${slug}`} className="block">
      <div className="flex gap-3 border-b pb-3 mb-3 cursor-pointer hover:opacity-90">

        <div className="w-28 h-20 relative">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold leading-tight line-clamp-2">
            {article.title}
          </h3>
        </div>

      </div>
    </Link>
  );
}
