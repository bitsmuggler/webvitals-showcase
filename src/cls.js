import './style.css';

document.querySelector('#app').innerHTML = `
 <h1>Cumulative Layout Shift (CLS) Example</h1>

  <section>
    <h2>❌ Bad CLS</h2>
    <div class="box" id="bad-cls">
      <p>This text will shift down when the image is added late.</p>
      <!-- Image will be injected later via JS -->
    </div>
  </section>

  <section>
    <h2>✅ Good CLS</h2>
    <div class="box">
      <p>This layout is stable — no shift!</p>
      <!-- Reserved space prevents shift -->
      <div style="width: 300px; height: 150px; background-color: #eee;">
        <img 
          src="https://picsum.photos/1200/1200"
          alt="Good CLS"
          width="300"
          height="150"
          style="display: block;">
      </div>
    </div>
  </section>
`


 // Simulate late image load after 2 seconds
 setTimeout(() => {
  const container = document.getElementById("bad-cls");
  const img = document.createElement("img");
  img.src = "https://picsum.photos/1200/1200";
  img.alt = "Bad CLS";
  img.style.marginTop = "10px";
  container.appendChild(img);
}, 2000);