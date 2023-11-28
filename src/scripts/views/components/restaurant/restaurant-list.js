import RestaurantApi from "../../../data/restaurant-api";
import { createErrorFallback, createRestaurantItemSkeleton } from "../../templates/loading-creator";
import { createRestaurantItemComponent } from "../../templates/template-creator";

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this._data = null;
  }

  async getInitialData() {
    try {
      const data = await RestaurantApi.getAll();
      this._data = data;

      if (this._data.error) {
        this.fallbackError();
      } else {
        this.render();
      }
    } catch (error) {
      this.fallbackError();
      console.error(error.message);
    }
  }

  fallbackError() {
    this.innerHTML = createErrorFallback();
  }

  fallbackLoading() {
    this.innerHTML = createRestaurantItemSkeleton(4);
  }

  render() {
    this.innerHTML = "";

    this._data.restaurants.forEach((restaurant) => {
      const restaurantItem = createRestaurantItemComponent(restaurant);
      this.innerHTML += restaurantItem;
    });
  }

  connectedCallback() {
    this.fallbackLoading();
    this.getInitialData();
  }
}

customElements.define("restaurant-list", RestaurantList);
