// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS (bao gồm cả Popper.js)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import file Svelte chính của bạn
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
});

export default app;