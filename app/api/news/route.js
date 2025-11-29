export async function GET() {
  try {
    const apiKey = process.env.NEWS_API_KEY;

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?language=en&pageSize=20&apiKey=${apiKey}`
    );

    const data = await response.json();

    if (!data.articles || data.articles.length === 0) {
      return Response.json({
        topStory: null,
        mainStories: [],
        trendingStories: []
      });
    }

    // const articles = data.articles.map((item) => ({
    //   title: item.title || "Untitled",
    //   summary: item.description || "No description available",
    //   image:
    //     item.urlToImage ||
    //     "https://via.placeholder.com/800x600?text=No+Image",
    //   url: item.url || "#",
    // }));

    const articles = data.articles.map((item) => ({
    title: item.title || "Untitled",
    summary: item.description || "No description available",
    image:
        item.urlToImage && item.urlToImage.startsWith("http")
        ? item.urlToImage
        : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg?",
    url: item.url || "#",
        }));


    return Response.json({
      topStory: articles[0] || null,
      mainStories: articles.slice(1, 6),
      trendingStories: articles.slice(6, 10),
    });
  } catch (err) {
    return Response.json(
      {
        topStory: null,
        mainStories: [],
        trendingStories: [],
      },
      { status: 500 }
    );
  }
}
