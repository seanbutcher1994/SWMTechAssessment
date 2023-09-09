import articles from "../article.json";



/**
 * Fetches an article from the articles array based on the provided ID.
 * If a matching article is found, it is returned.
 * If no matching article is found, the function returns the string "No Articles".
 * @param id - The ID of the article to fetch.
 * @returns The article object with the matching ID if found, otherwise "No Articles".
 */
export const FetchOneArticle = (id: number) => {
  const foundArticle = articles.find((article) => article.id === id);

  if (foundArticle) {
    return foundArticle;
  } else {
    return "No Articles found. The article may have been deleted and/or no longer exists";
  }
};

