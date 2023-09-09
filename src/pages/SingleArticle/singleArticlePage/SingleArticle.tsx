import { useParams } from "react-router-dom";
import { FetchOneArticle } from "../../../hooks/fetchOneArticle";
import { FormatReadableDate } from "../../../utils/FormatReadableDate";
import logo from "../../../assets/plus.svg";
import "./singleArticlePage.css";
import BlockRenderer from "../Components/blockRenderer/BlockRenderer";
import { useNavigate } from "react-router-dom";

/**
 * The SingleArticle component renders the details of a single article based on the `id` parameter from the URL.
 * It fetches the article using the `FetchOneArticle` function, formats the publication date using the `FormatReadableDate` function,
 * and renders the article details and blocks using the `BlockRenderer` component.
 *
 * @example
 * ```typescriptreact
 * <SingleArticle />
 * ```
 *
 * @returns Rendered article details and blocks if `article` is an object.
 */
const SingleArticle: React.FC = () => {
  // Grab the ID from the websites URL
  let { id } = useParams();
  // Parse the ID taken from the URL and turn it to an integer.
  const parsedId = id ? parseInt(id) : 0;
  // Fetch the Article using the parsedId
  const article = FetchOneArticle(parsedId);
  // Call the useNavigate hook
  const navigate = useNavigate();
  // Function to Navigate back to the News Feed (ArticleList.tsx)
  const navigateBack = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };

  return (
    <div className="container">
      {/* If the article object is returned in the correct format, display it as per below. */}
      {typeof article === "object" && (
        <div className="news-article-header">
          <div className="button" onClick={navigateBack}></div>
          <h1 className="headline">{article.headline}</h1>

          <div className="author-info">
            <span className="author-name">{article.byline}</span>
            <span className="publication">
              , <em>{article.source}</em>
            </span>
          </div>
          <div className="article-details">
            <span className="article-date">
              {FormatReadableDate(article.publicationDate)}
            </span>
            <img className="logo" src={logo} alt="Publication Logo" />
          </div>
        </div>
      )}
      {typeof article === "object" && <BlockRenderer blocks={article.blocks} />}
      <div className="button button2" onClick={navigateBack}></div>
      {/* If the article error string is returned, display that instead */}
      {typeof article === "string" && (
        <div className="news-article-header">
          <h1 className="headline">{article}</h1>
        </div>
      )}
    </div>
  );
};

export default SingleArticle;
