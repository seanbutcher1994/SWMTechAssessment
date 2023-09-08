import { GetImageCaption } from "../utils/GetImageCaption";
import { Article } from "../utils/GetImageCaption"

describe('GetImageCaption', () => {

    // Tests that the function returns the caption text of the first image block in the article
    it('should return the caption text of the first image block in the article', () => {
      const article: Article = {
        blocks: [
          { kind: "text" },
          { kind: "image", captionText: "First image caption" },
          { kind: "image", captionText: "Second image caption" }
        ]
      };
      expect(GetImageCaption(article)).toBe("First image caption");
    });

    // Tests that the function returns "no caption found" if the article has no blocks
    it('should return "no caption found" when the article has no blocks', () => {
      const article: Article = {
        blocks: []
      };
      expect(GetImageCaption(article)).toBe("no caption found");
    });

    // Tests that the function returns "no caption found" if the article has blocks but no image blocks
    it('should return "no caption found" when the article has blocks but no image blocks', () => {
      const article: Article = {
        blocks: [
          { kind: "text" },
          { kind: "text" }
        ]
      };
      expect(GetImageCaption(article)).toBe("no caption found");
    });

    // Tests that the function returns "no caption found" if the article has image blocks but none have caption text
    it('should return "no caption found" when the article has image blocks but none have caption text', () => {
      const article: Article = {
        blocks: [
          { kind: "image" },
          { kind: "image" }
        ]
      };
      expect(GetImageCaption(article)).toBe("no caption found");
    });

    // Tests that the function returns the caption text of the first image block with caption text, even if there are other image blocks without caption text
    it('should return the caption text of the first image block with caption text, even if there are other image blocks without caption text', () => {
      const article: Article = {
        blocks: [
          { kind: "image" },
          { kind: "image", captionText: "First image caption" },
          { kind: "image" }
        ]
      };
      expect(GetImageCaption(article)).toBe("First image caption");
    });

    // Tests that the function handles articles with multiple image blocks with caption text, returning the caption text of the first one
    it('should handle articles with multiple image blocks with caption text, returning the caption text of the first one', () => {
      const article: Article = {
        blocks: [
          { kind: "image", captionText: "First image caption" },
          { kind: "image", captionText: "Second image caption" },
          { kind: "image", captionText: "Third image caption" }
        ]
      };
      expect(GetImageCaption(article)).toBe("First image caption");
    });
});
