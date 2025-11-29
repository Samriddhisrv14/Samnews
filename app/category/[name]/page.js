import Hero from "../../../components/Hero";
import NewsCard from "../../../components/NewsCard";

const VALID_CATEGORIES = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

export default async function CategoryPage({ params }) {
  const { name } = params;

  if (!VALID_CATEGORIES.includes(name)) {
    return <div className="p-6 text-center">Invalid Category</div>;
  }

  // Fetch category data from NewsAPI
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${name}&apiKey=${process.env.NEWS_API_KEY}`,
    { cache: "no-store" }
  );

  const data = await response.json();
  const articles = data.articles || [];

  const formatted = articles.map((item) => ({
    title: item.title || "Untitled",
    summary: item.description || "No description available",
    image:
      item.urlToImage && item.urlToImage.startsWith("http")
        ? item.urlToImage
        : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
    url: item.url,
  }));

  const topStory = formatted[0] || null;
  const mainStories = formatted.slice(1);

  return (
    <div className="max-w-6xl mx-auto p-4">

      <h1 className="text-2xl font-bold mb-4 capitalize">
        {name} News
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left side */}
        <div className="md:col-span-2">
          {topStory && <Hero article={topStory} />}
          <div className="mt-6">
            {mainStories.map((story, index) => (
              <NewsCard key={index} article={story} />
            ))}
          </div>
        </div>

        {/* Right side Trending */}
        <div className="border-l pl-6">
          <h2 className="text-xl font-bold mb-3 text-red-700">Trending</h2>

          {mainStories.slice(0, 6).map((story, i) => (
            <NewsCard key={i} article={story} />
          ))}
        </div>

      </div>
    </div>
  );
}
