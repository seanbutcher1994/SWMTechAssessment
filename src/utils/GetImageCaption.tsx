interface Article {
  blocks: Block[];
}

interface Block {
  kind: string;
  captionText?: string;
}

export const GetImageCaption = (article: Article): string => {
  for (const block of article.blocks) {
    if (block.kind === "image" && block.captionText) {
      return block.captionText;
    }
  }
  return "no caption found";
};
