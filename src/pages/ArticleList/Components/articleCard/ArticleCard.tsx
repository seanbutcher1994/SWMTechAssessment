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
  const navigateToArticle = () => {
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
