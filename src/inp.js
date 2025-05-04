import './style.css';

import { onINP } from 'web-vitals';

onINP(console.log, {reportAllChanges: true});

document.querySelector('#app').innerHTML = `
  <h1>Interaction to Next Paint (INP) Showcase</h1>

  <div class="button-group">
    <button id="good">✅ Good INP (Immediate Response)</button>
    <button id="bad">❌ Bad INP (2s Blocking Task)</button>
  </div>

    <div id="output"></div>

`;

const output = document.getElementById('output');

function logResponse(label, delay, block = false) {
  const interactionTime = performance.now();

  if (block) {
    const start = performance.now();
    while (performance.now() - start < delay) {
      // simulate blocking task
    }
    output.textContent = `${label} responded after blocking ${delay}ms\n`;
  } else {
    setTimeout(() => {
      const paintTime = performance.now();
      const inp = paintTime - interactionTime;
      output.textContent = `${label} responded in ${inp.toFixed(2)} ms\n`;
    }, delay);
  }
}

document.getElementById('good').addEventListener('click', () => {
  logResponse('✅ Good INP', 0);
});

document.getElementById('bad').addEventListener('click', () => {
  logResponse('❌ Bad INP', 2000, true);
});
