import "../components/restaurant/restaurant-list";
import "../components/hero/hero-section";
import "../components/newsletter/newsletter-section";
import "../components/testimonial/testimonial-section";
import { resetTabIndexFromStart } from "../../helpers";

const Home = {
  render() {
    return `
      <hero-section></hero-section>

      <div id="katalog" class="restaurants container">
        <h2 class="restaurants__title">Daftar Restoran</h2>
        <restaurant-list class="restaurant"></restaurant-list>
      </div>

      <testimonial-section></testimonial-section>
      <newsletter-section></newsletter-section>
    `;
  },

  afterRender() {
    resetTabIndexFromStart();
  },
};

export default Home;
