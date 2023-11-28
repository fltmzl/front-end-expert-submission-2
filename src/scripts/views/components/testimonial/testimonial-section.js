class TestimonialSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="testimonials container">
        <h2 class="testimonials__title">Testimoni Pengunjung Website</h2>
        <div class="testimonials__container">
          <section class="testimonial">
            <img class="testimonial__img" src="/images/profile-1.jpg" alt="profil user" />
            <p class="testimonial__name">Rizky Ramadhan</p>
            <blockquote class="testimonial__body">
              <p class="testimonial__text">Website ini adalah salah satu yang terbaik yang pernah saya gunakan untuk mencari tempat makan. Saya sangat puas dengan semua fitur dan informasi yang disediakan.</p>
              <img class="testimonial__icon" src="https://img.icons8.com/ios-glyphs/90/000000/quote-left.png" alt="quote-left-icon" />
            </blockquote>
          </section>
          <section class="testimonial testimonial-black">
            <img class="testimonial__img" src="/images/profile-2.jpg" alt="profil user" />
            <p class="testimonial__name">Dwi Prasetyo</p>
            <blockquote class="testimonial__body">
              <p class="testimonial__text">Website ini membantu saya mengeksplorasi berbagai restoran di seluruh dunia dengan mudah. Saya dapat mencari restoran berdasarkan jenis masakan atau lokasi, yang sangat membantu.</p>
              <img class="testimonial__icon" src="https://img.icons8.com/ios-glyphs/90/ecc92c/quote-left.png" alt="quote-left-icon" />
            </blockquote>
          </section>
          <section class="testimonial">
            <img class="testimonial__img" src="/images/profile-3.jpg" alt="profil user" />
            <p class="testimonial__name">Budi Santoso</p>
            <blockquote class="testimonial__body">
              <p class="testimonial__text">Sangat mudah untuk menemukan restoran favorit saya di website ini. Saya suka bagaimana semuanya terorganisir dengan baik dan informasi tentang restoran sangat lengkap</p>
              <img class="testimonial__icon" src="https://img.icons8.com/ios-glyphs/90/000000/quote-left.png" alt="quote-left-icon" />
            </blockquote>
          </section>
        </div>
      </div>
    `;
  }
}

customElements.define("testimonial-section", TestimonialSection);
