import { useState } from "react"
import article from "../article.json"

/**
 * Fetches and returns the article data.
 * 
 * @returns {object} The article data.
 * 
 * @example
 * const allArticles = FetchAllArticles();
 * console.log(allArticles);
 * // Output: {id: 1, headline: "Vestibulum at eros lorem ipsum dolor sit amet, consectetur adipiscing elit", source: "The West Australian", byline: "Michelanjelo Michael", publicationDate: "2020-09-01T01:00:00.000Z", blocks: [...]}
 * 
 * // Use the allArticles data in your React component
 */
export const FetchAllArticles = () => {
    // Use the useState hook to initialize the data state with the article object
    const [data] = useState(article);

    // Log the data variable to the console
    console.log(data);

    // Return the data state
    return data;
}
