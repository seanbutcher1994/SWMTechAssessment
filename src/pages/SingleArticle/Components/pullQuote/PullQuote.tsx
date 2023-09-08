import "./pullQuote.css";

interface PullQuoteProps {
  text: string;
  attribution?: string;
}

/**
 * Renders a pull quote with an optional attribution.
 *
 * @param {string} text - The text of the quote.
 * @param {string} [attribution] - The source of the quote.
 * @returns {JSX.Element} - The rendered pull quote component.
 */
const PullQuote: React.FC<PullQuoteProps> = ({ text, attribution }) => {
  return (
    <div className="pull-quote">
      <p className="quote">{text}</p>
      {attribution && <cite className="attribution">{attribution}</cite>}
    </div>
  );
};
export default PullQuote;
