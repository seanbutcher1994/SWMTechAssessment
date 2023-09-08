export interface Article {
  blocks: Block[];
}

export interface Block {
  kind: string;
  captionText?: string;
}

/**
 * Returns the caption text of the first image block found in the `blocks` array of the `Article` object.
 * If no image block with a caption is found, it returns the string "no caption found".
 *
 * @param article - The `Article` object that contains an array of `Block` objects.
 * @returns The caption text of the first image block found in the `blocks` array of the `article`.
 * If no image block with a caption is found, it returns the string "no caption found".
 *
 * @example
 * const article: Article = {
 *   blocks: [
 *     { kind: "text" },
 *     { kind: "image", captionText: "A beautiful sunset" },
 *     { kind: "image", captionText: "A cute puppy" },
 *   ],
 * };
 *
 * const caption = GetImageCaption(article);
 * console.log(caption);
 * // Output: "A beautiful sunset"
 */
export const GetImageCaption = (article: Article): string => {
  for (const block of article.blocks) {
    if (block.kind === "image" && block.captionText) {
      return block.captionText;
    }
  }
  return "no caption found";
};
