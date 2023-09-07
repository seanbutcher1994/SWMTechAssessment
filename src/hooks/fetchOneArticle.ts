import { useState } from "react"
import article from "../article.json"

// This Hook is designed to mimic fetching one article from the database based on a provided ID.
export const FetchOneArticle = (id: number) => {
    const [ data ] = useState(article)

    const foundArticle = data.find((article) => article.id === id);

    if(foundArticle) {
        console.log(foundArticle);
        return foundArticle
    } else {
        return "No Articles";
    }

}