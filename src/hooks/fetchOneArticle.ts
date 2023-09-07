import { useEffect, useState } from "react"
import articles from "../article.json"

interface Article {
    id: number;
    headline: string;
    source: string;
    byline: string;
    publicationDate: string;
    blocks: Array<{
      kind: string;
      text?: string; // Make the 'text' property optional
      intentions?: Array<{
        kind: string;
        index: number;
        length: number;
      }>;
      captionText?: string;
      url?: string;
      attribution?: string;
    }>;
  }

/**
 * Retrieves a single article from a list of articles based on the provided ID.
 * 
 * @param id - The ID of the article to fetch.
 * @returns The article object if found, or the string "No Articles" if not found.
 * 
 * @example
 * const article = FetchOneArticle(1);
 * console.log(article);
 * // Output: { id: 1, headline: "Vestibulum at eros lorem ipsum dolor sit amet, consectetur adipiscing elit", ... }
 */
export const FetchOneArticle = (id: number) => {
    const [ data, setData ] = useState<Article[]>([])
    useEffect(() => {
        setData(articles)
    },[])

    const foundArticle = data.find((article) => article.id === id);

    if(foundArticle) {
        console.log(foundArticle);
        return foundArticle
    } else {
        return "No Articles";
    }
}
