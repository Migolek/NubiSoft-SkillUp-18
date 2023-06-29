import { useEffect } from "react";
import Reveal from "reveal.js";
import RevealZoom from "reveal.js/plugin/zoom/zoom.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealMath from "reveal.js/plugin/math/math.esm.js";
import RevealSearch from "reveal.js/plugin/search/search.esm.js";

import Introduction from "./slides/Introduction";
import StateManagement from "./slides/StateManagement";

function App() {
  useEffect(function initReveal() {
    Reveal.initialize({
      controls: true,
      progress: true,
      center: true,
      hash: true,
      slideNumber: true,
      // height: 700,
      // width: 900,
      plugins: [
        RevealZoom,
        RevealHighlight,
        RevealNotes,
        RevealMarkdown,
        RevealMath,
        RevealSearch,
      ],
    });

    console.log("Reveal initialized");
  }, []);

  return (
    <>
      <Introduction />
      <StateManagement />
    </>
  );
}

export default App;
