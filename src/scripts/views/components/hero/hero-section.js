class HeroSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">Eksplorasi <span>Kulinermu </span>Bersama Kami</h1>
          <p class="hero__desc">Kami mengajak Anda menjelajahi beragam cita rasa kuliner dari seluruh penjuru dunia. Nikmati katalog restoran kami yang lengkap dan buat pengalaman makan Anda menjadi tak terlupakan</p>
          <a href="#katalog" class="hero__cta">Lihat Katalog</a>
        </div>
      </div>
    `;
  }
}

customElements.define("hero-section", HeroSection);
