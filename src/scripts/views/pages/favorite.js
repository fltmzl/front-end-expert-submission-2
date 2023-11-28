import { resetTabIndexFromStart } from "../../helpers";
import "../components/favorite/favorite-list";

const Favorite = {
  render() {
    return `
      <div class="favorites container">
        <h1 class="favorites__title">Restoran Favorit</h1>
        <div class="favorites__container">
          <favorite-list></favorite-list>
        </div>
      </div>
    `;
  },

  afterRender() {
    resetTabIndexFromStart();
  },
};

export default Favorite;
