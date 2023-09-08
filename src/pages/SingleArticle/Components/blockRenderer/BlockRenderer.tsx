import Paragraph from "../paragraph/Paragraph";
import Image from "../image/Image";
import PullQuote from "../pullQuote/PullQuote";

/**
 * Functional component that renders different types of blocks based on their `kind` property.
 * @param blocks An array of objects representing different types of blocks.
 * @returns Rendered components based on the `blocks` array.
 */
const BlockRenderer: React.FC<{ blocks: any[] }> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.kind) {
          case "text":
            return <Paragraph key={index}>{block.text}</Paragraph>;
          case "image":
            return (
              <Image key={index} url={block.url} caption={block.captionText} />
            );
          case "pull-quote":
            return (
              <PullQuote
                key={index}
                text={block.text}
                attribution={block.attribution}
              />
            );
          default:
            return null; // Handle other block kinds as needed
        }
      })}
    </>
  );
};
export default BlockRenderer;
