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

const ArticleList: React.FC = () => {
  const articles: Article[] = FetchAllArticles();

  return (
    <div>
      {articles?.map((article) => (
        <ArticleCard
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
