import { useParams } from "react-router-dom";
import { FetchOneArticle } from "../../hooks/fetchOneArticle";

const SingleArticle: React.FC = () => {
  let { id } = useParams();
  const parsedId = id ? parseInt(id) : 0;
  const article = FetchOneArticle(parsedId);

  return <div>Single Article</div>;
};

export default SingleArticle;
