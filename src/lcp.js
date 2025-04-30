import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>Largest Contentful Paint (LCP) Example</h1>

  <section>
    <h2>❌ Bad LCP</h2>
    <p>Image is loaded with delay → perceived slower page load.</p>
    <div class="hero" id="bad-lcp">
      <div class="placeholder">Loading...</div>
    </div>
  </section>

  <section>
    <h2>✅ Good LCP</h2>
    <p>Image is prioritized and rendered immediately → good LCP.</p>
    <div class="hero">
      <!-- Properly sized and immediately rendered image -->
      <img 
        src="https://picsum.photos/1200/1200"
        width="600"
        height="300"
        alt="Hero"
        loading="eager"
        style="display: block; width: 100%;">
    </div>
  </section>
`;

// Simulate late loading image for bad LCP
setTimeout(() => {
  const container = document.getElementById('bad-lcp');
  container.innerHTML = `
        <img 
          src="https://picsum.photos/1200/1200"
          width="700"
          height="400"
          alt="Late Hero"
          style="display: block; width: 100%;">
      `;
}, 3000);
