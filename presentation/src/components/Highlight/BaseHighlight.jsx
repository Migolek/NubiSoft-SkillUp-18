import { themes, Highlight } from "prism-react-renderer";
import PropTypes from "prop-types";

const BaseHighlight = ({ code = "", language }) => (
  <Highlight language={language} code={code} theme={themes.nightOwl}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line, key: i })} data-line-numbers>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

BaseHighlight.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string.isRequired,
};

export default BaseHighlight;
