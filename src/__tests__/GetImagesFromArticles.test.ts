import { GetImagesFromArticles, Article} from "../utils/GetImagesFromArticles";

describe('GetImagesFromArticles', () => {

    // Tests that the function returns the URL of the first image block found in the `blocks` array of the `article`
    it('should return the URL of the first image block when there is at least one image block', () => {
      const article: Article = {
        blocks: [
          { kind: "text" },
          { kind: "image", url: "https://example.com/image1.jpg" },
          { kind: "image", url: "https://example.com/image2.jpg" },
        ],
      };
      const imageUrl = GetImagesFromArticles(article);
      expect(imageUrl).toBe("https://example.com/image1.jpg");
    });


});
