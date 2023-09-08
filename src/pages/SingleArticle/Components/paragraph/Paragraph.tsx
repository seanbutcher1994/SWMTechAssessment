import "./paragraph.css";

interface ParagraphProps {
  children: string;
}

/**
 * Defines a functional component called `Paragraph`.
 *
 * @component
 * @example
 * ```tsx
 * <Paragraph>This is a paragraph.</Paragraph>
 * ```
 */
const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <div className="paragraph">{children}</div>;
};
export default Paragraph;
