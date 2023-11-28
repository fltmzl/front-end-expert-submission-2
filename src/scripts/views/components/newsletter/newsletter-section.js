class NewsletterSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="newsletter">
        <h2 class="newsletter__title">Newsletter</h2>
        <p class="newsletter__desc">Langganan gratis newsletter kami untuk mendapatkan info terbaru mengena katalog restoran kami</p>
        <div class="input">
          <input type="email" placeholder="contohemail@email.com" class="input__email" />
          <button type="submit" class="input__submit">Langganan</button>
        </div>
      </div>
    `;
  }
}

customElements.define("newsletter-section", NewsletterSection);
