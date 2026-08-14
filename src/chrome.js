// ============================================
// MORE — header / footer / mobile nav
// Injeta o header e footer em toda página que incluir este script.
// ============================================

function renderChrome(activePage) {
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <a href="index.html" class="logo">MORE</a>
    <nav class="nav" id="mainNav">
      <a href="index.html" class="${activePage === "home" ? "active" : ""}">Home</a>
      <a href="category.html?cat=filmmaker" class="${activePage === "filmmaker" ? "active" : ""}">Filmmaker</a>
      <a href="category.html?cat=design" class="${activePage === "design" ? "active" : ""}">Design</a>
      <a href="category.html?cat=motion" class="${activePage === "motion" ? "active" : ""}">Motion</a>
      <a href="ai-systems.html" class="${activePage === "ai-systems" ? "active" : ""}" style="color:var(--accent-red)">AI Systems</a>
      <a href="about.html" class="${activePage === "about" ? "active" : ""}">Sobre</a>
    </nav>
    <button class="nav-toggle" id="navToggle" aria-label="Abrir menu">MENU</button>
  `;
  document.body.prepend(header);

  const toggle = header.querySelector("#navToggle");
  const nav = header.querySelector("#mainNav");
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.textContent = nav.classList.contains("open") ? "FECHAR" : "MENU";
  });

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Contato</h4>
          <a href="mailto:morecreativecompany@gmail.com">morecreativecompany@gmail.com</a>
          <a href="https://wa.me/5518981220187">(18) 98122-0187</a>
          <p>Presidente Prudente, SP, Brasil</p>
        </div>
        <div class="footer-col">
          <h4>Navegação</h4>
          <a href="category.html?cat=filmmaker">Filmmaker</a>
          <a href="category.html?cat=design">Design</a>
          <a href="category.html?cat=motion">Motion</a>
          <a href="ai-systems.html">AI Systems</a>
          <a href="about.html">Sobre / Contato</a>
        </div>
        <div class="footer-col">
          <h4>Social</h4>
          <a href="https://www.instagram.com/morecreative.co/" target="_blank" rel="noopener">Instagram</a>
          <a href="https://wa.me/5518981220187" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>More Company © ${new Date().getFullYear()}</span>
        <span>Motion & Graphic Design</span>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}
