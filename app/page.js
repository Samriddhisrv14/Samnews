import Hero from "../components/Hero";
import NewsCard from "../components/NewsCard";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/news", {
    cache: "no-store", // get fresh news every time
  });

  const { topStory, mainStories, trendingStories } = await res.json();

  return (
    <div className="max-w-6xl mx-auto p-4">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT SECTION */}
        <div className="md:col-span-2">
          <Hero article={topStory} />

          <h2 className="text-xl font-bold mt-6 mb-3">Latest News</h2>

          {mainStories.map((story, index) => (
            <NewsCard key={index} article={story} />
          ))}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="border-l pl-6">
          <h2 className="text-xl font-bold mb-4 text-red-700">Trending</h2>

          {trendingStories.map((story, i) => (
            <NewsCard key={i} article={story} />
          ))}
        </div>
      </div>

    </div>
  );
}
