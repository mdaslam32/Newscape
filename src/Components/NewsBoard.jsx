import NewsItem from "./NewsItem";
import ShimmerBoard from "./Shimmer/ShimmerBoard";
import useGetData from "../utils/useGetData";

const NewsBoard = ({ category }) => {
  const articles = useGetData(category);

  if (articles.length === 0) return <ShimmerBoard />;
  return (
    <div className="board">
      <h2 className="text-center mt-2">
        Latest <span className="badge bg-danger"> News </span>
      </h2>
      {articles.map((news) => {
        return (
          <NewsItem
            key={news.article_id}
            title={news.title}
            description={news.description}
            icon={news.image_url}
            url={news.link}
            publish={news.pubDate}
            source={news.source_name}
          />
        );
      })}
    </div>
  );
};
export default NewsBoard;
