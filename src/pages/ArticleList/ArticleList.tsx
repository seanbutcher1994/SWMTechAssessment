import React from "react";
import ArticleCard from "./Components/articleCard/ArticleCard";
import { FetchAllArticles } from "../../hooks/fetchArticle";
import { GetImagesFromArticles } from "../../utils/GetImagesFromArticles";
import { GetImageCaption } from "../../utils/GetImageCaption";

interface Article {
  id: number;
  headline: string;
  source: string;
  byline: string;
  publicationDate: string;
  blocks: any[];
}

/**
 * Renders a list of ArticleCard components.
 * Fetches the articles using the FetchAllArticles function and maps over the articles array to render each ArticleCard component with the corresponding article data.
 */
const ArticleList: React.FC = () => {
  // Fetch articles
  const articles: Article[] = FetchAllArticles();

  return (
    <div>
      {/* Render ArticleCard components */}
      {articles?.map((article) => (
        <ArticleCard
          key={article.id}
          id={article.id}
          title={article.headline}
          source={article.source}
          byline={article.byline}
          date={article.publicationDate}
          image={GetImagesFromArticles(article)}
          caption={GetImageCaption(article)}
        />
      ))}
    </div>
  );
};

export default ArticleList;
