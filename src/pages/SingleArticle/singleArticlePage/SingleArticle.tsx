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
  let { id } = useParams();
  const parsedId = id ? parseInt(id) : 0;
  const article = FetchOneArticle(parsedId);
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="button" onClick={navigateBack}></div>
      {typeof article === "object" && (
        <div className="news-article-header">
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
    </div>
  );
};

export default SingleArticle;
