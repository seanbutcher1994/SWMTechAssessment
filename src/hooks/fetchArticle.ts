import { useState } from "react"
import article from "../article.json"


/**
 * Fetches and displays a list of articles.
 * @returns {object} The article object.
 */
export const useFetchAllArticles = () => {
    // Use the useState hook to initialize the data state with the article object
    const [data] = useState(article);

    // Log the data variable to the console
    console.log(data);

    // Return the data state
    return data;
}
