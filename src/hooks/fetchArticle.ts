import { useState } from "react"
import article from "../article.json"


// This Hook is designed to mimic fetching the data from the data base.
export const FetchAllArticles = () => {
    const [ data ] = useState(article);
    console.log(data)
    return data

}