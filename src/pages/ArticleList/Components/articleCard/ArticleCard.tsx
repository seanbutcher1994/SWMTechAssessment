import { FormatReadableDate } from "../../../../utils/FormatReadableDate";
import "./ArticleCard.css";
import { useNavigate } from "react-router-dom";

interface IArticleCardProps {
  id: number;
  title: string;
  source: string;
  byline: string;
  date: string;
  image: string;
  caption: string;
}

/**
 * Renders a card displaying information about an article.
 * @param id - The id of the article.
 * @param title - The title of the article.
 * @param byline - The author of the article.
 * @param source - The source of the article.
 * @param date - The date of the article in ISO 8601 format.
 * @param image - The URL of the article's image.
 * @param caption - The caption of the article's image.
 * @returns JSX elements representing the article card.
 */
const ArticleCard: React.FC<IArticleCardProps> = ({
  id,
  title,
  byline,
  source,
  date,
  image,
  caption,
}) => {
  const formattedDate = FormatReadableDate(date);
  const navigate = useNavigate();

  /**
   * Handles navigation to the article when the card is clicked.
   */
  const navigateToArticle = () => {
    window.scrollTo(0, 0);
    navigate(`/${id}`);
  };

  return (
    <div className="card" onClick={navigateToArticle}>
      <div className="image-container">
        <img src={image} alt={caption} className="image" />
      </div>
      <div className="text-container">
        <h2 className="publication-title">{source}</h2>
        <h1 className="heading">{title}</h1>
        <p className="byline">
          {byline} | {formattedDate}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
