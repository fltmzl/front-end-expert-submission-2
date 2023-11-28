import FavoriteRestaurantIdb from "../../../data/restaurant-favorite-idb";
import { createRestaurantItemComponent } from "../../templates/template-creator";

class FavoriteList extends HTMLElement {
  constructor() {
    super();
    this._restaurants = [];
  }

  async getInitialData() {
    try {
      const restaurants = await FavoriteRestaurantIdb.getAll();
      this._restaurants = restaurants;

      if (!restaurants.length) {
        this.fallbackNoFavorite();
      } else {
        this.render();
      }
    } catch (error) {
      this.fallbackError();
      console.error(error.message);
    }
  }

  fallbackNoFavorite() {
    this.innerHTML = `
      <div class="text-gray">Belum ada restoran yang ditambahkan ke favorite</div>
    `;
  }

  fallbackError() {
    this.innerHTML = `
      <div>Something went wrong, check your connection</div>
    `;
  }

  fallbackLoading() {
    this.innerHTML = `
      <div>Loading</div>
    `;
  }

  connectedCallback() {
    this.getInitialData();
  }

  render() {
    this.innerHTML = "";

    this._restaurants.forEach((restaurant) => {
      this.innerHTML += createRestaurantItemComponent(restaurant);
    });
  }
}

customElements.define("favorite-list", FavoriteList);
