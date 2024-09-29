import news from "../assets/news.jpg";

const NewsItem = (props) => {
  const { title, description, icon, url, publish, source } = props;
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "300px" }}
    >
      <a href={url} target="_blank">
        <img
          src={icon || news}
          style={{ height: "200px", width: "280px" }}
          className="card-img-top"
          alt="News Image"
        />
      </a>
      <div className="card-body">
        <a href={url} target="_blank">
          <h5 className="card-title">{title.slice(0, 60)}...</h5>
        </a>
        <p className="card-text">
          {description
            ? description.slice(0, 90) + "..."
            : "News is a report of a current event. It is information about something that has just happened."}
        </p>
        <p className="card-text">
          <small className="text-secondary">
            <span className="text-warning">Source: </span>
            {source}
          </small>
        </p>
        <a href={url} target="_blank" className="btn btn-primary my-1">
          Read More
        </a>
        <p className="card-text">
          <small className="text-secondary">
            Updated on: {publish.slice(0, 10)} | {publish.slice(11)}
          </small>
        </p>
      </div>
    </div>
  );
};
export default NewsItem;
