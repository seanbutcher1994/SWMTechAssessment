import articles from "../article.json";



/**
 * Fetches an article from the articles array based on the provided ID.
 * If a matching article is found, it is logged to the console and returned.
 * If no matching article is found, the function returns the string "No Articles".
 * @param id - The ID of the article to fetch.
 * @returns The article object with the matching ID if found, otherwise "No Articles".
 */
export const FetchOneArticle = (id: number) => {
  const foundArticle = articles.find((article) => article.id === id);

  if (foundArticle) {
    console.log(foundArticle);
    return foundArticle;
  } else {
    return "No Articles";
  }
};

