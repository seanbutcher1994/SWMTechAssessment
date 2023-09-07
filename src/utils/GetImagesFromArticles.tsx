interface Article {
  blocks: Block[];
}

interface Block {
  kind: string;
  url?: string;
}

export const GetImagesFromArticles = (article: Article): string => {
  for (const block of article.blocks) {
    if (block.kind === "image" && block.url) {
      return block.url;
    }
  }
  return "no image found";
};
