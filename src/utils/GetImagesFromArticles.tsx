interface Article {
  blocks: Block[];
}

interface Block {
  kind: string;
  url?: string;
}

/**
 * Returns the URL of the first image block found in the `blocks` array of the `Article` object.
 * If no image block is found, it returns the string "no image found".
 *
 * @param article - The article object containing an array of blocks.
 * @returns The URL of the first image block found in the `blocks` array of the `article`, or the string "no image found" if no image block is found.
 *
 * @example
 * const article: Article = {
 *   blocks: [
 *     { kind: "text" },
 *     { kind: "image", url: "https://example.com/image1.jpg" },
 *     { kind: "image", url: "https://example.com/image2.jpg" },
 *   ],
 * };
 *
 * const imageUrl = GetImagesFromArticles(article);
 * console.log(imageUrl); // Output: "https://example.com/image1.jpg"
 */
export const GetImagesFromArticles = (article: Article): string => {
  for (const block of article.blocks) {
    if (block.kind === "image" && block.url) {
      return block.url;
    }
  }
  return "no image found";
};
