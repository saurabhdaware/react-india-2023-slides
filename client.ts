import Reveal from 'reveal.js';
// import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import 'reveal.js/dist/reveal.css';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import 'reveal.js/dist/theme/white.css';
import 'highlight.js/styles/github.css';
import './slides.css';

let deck = new Reveal({
  plugins: [RevealNotes],
  hash: true,
  transition: 'none',
  controls: false,
  transitionSpeed: 'fast',
  autoAnimateDuration: 0.3,
  navigationMode: 'linear',
})

deck.initialize();