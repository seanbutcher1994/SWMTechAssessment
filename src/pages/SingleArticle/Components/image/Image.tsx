import "./image.css";

interface ImageProps {
  url: string;
  caption?: string;
}

/**
 * Functional component that renders an image with an optional caption.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.url - The URL of the image.
 * @param {string} [props.caption] - The caption for the image.
 * @returns {JSX.Element} - The rendered image and caption elements.
 */
const Image: React.FC<ImageProps> = ({ url, caption }) => {
  return (
    <div className="image">
      <img src={url} alt={caption} />
      {caption && <p className="caption">{caption}</p>}
    </div>
  );
};
export default Image;
