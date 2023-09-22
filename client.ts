import Reveal from 'reveal.js';
// import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import 'highlight.js/styles/github.css';
import './slides.css';

let deck = new Reveal({
  plugins: [],
  hash: true,
  transition: 'none',
  controls: false,
  transitionSpeed: 'fast',
  autoAnimateDuration: 0.3,
})

deck.initialize();