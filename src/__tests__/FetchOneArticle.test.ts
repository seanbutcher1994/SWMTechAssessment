import { FetchOneArticle } from "../hooks/fetchOneArticle";

describe('FetchOneArticle', () => {

    // Tests that the function fetches an existing article based on the provided ID and returns the article object
    it('should fetch an existing article and return the article object', () => {
      const result = FetchOneArticle(1);
      expect(result).toEqual({
        "id": 1,
        "headline": "Vestibulum at eros lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "source": "The West Australian",
        "byline": "Michelanjelo Michael",
        "publicationDate": "2020-09-01T01:00:00.000Z",
        "blocks": [
          {
            "kind": "text",
            "text": "Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper.",
            "intentions": [
              {
                "kind": "emphasized",
                "index": 0,
                "length": 11
              },
              {
                "kind": "important",
                "index": 28,
                "length": 27
              }
            ]
          },
          {
            "kind": "text",
            "text": "Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
            "intentions": []
          },
          {
            "kind": "image",
            "captionText": "Cras mattis consectetur purus sit amet fermentum.",
            "url": "https://images.thewest.com.au/publication/B88945448Z/1536132433649_GKR1Q2DJF.2-1.jpg"
          },
          {
            "kind": "text",
            "text": "Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
            "intentions": []
          },
          {
            "kind": "text",
            "text": "Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor.",
            "intentions": []
          },
          {
            "kind": "pull-quote",
            "text": "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.",
            "attribution": "Michelanjelo Michael"
          },
          {
            "kind": "text",
            "text": "Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Cras mattis consectetur purus sit amet fermentum.",
            "intentions": []
          },
          {
            "kind": "text",
            "text": "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "intentions": []
          }
        ]
      });
    });

    // Tests that the function returns "No Articles" when trying to fetch a non-existing article
    it('should return "No Articles" when trying to fetch a non-existing article', () => {
      const result = FetchOneArticle(3);
      expect(result).toEqual("No Articles");
    });

    // Tests that the function returns "No Articles" when trying to fetch an article with a negative ID
    it('should return "No Articles" when trying to fetch an article with a negative ID', () => {
      const result = FetchOneArticle(-1);
      expect(result).toEqual("No Articles");
    });

    // Tests that the function returns "No Articles" when trying to fetch an article with a zero ID
    it('should return "No Articles" when trying to fetch an article with a zero ID', () => {
      const result = FetchOneArticle(0);
      expect(result).toEqual("No Articles");
    });

    // Tests that the function returns "No Articles" when trying to fetch an article with a decimal ID
    it('should return "No Articles" when trying to fetch an article with a decimal ID', () => {
      const result = FetchOneArticle(1.5);
      expect(result).toEqual("No Articles");
    });
});
