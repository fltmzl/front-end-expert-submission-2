import RestaurantApi from "../../../data/restaurant-api";
import FavoriteRestaurantIdb from "../../../data/restaurant-favorite-idb";
import { createLikeButton, createLikedButton } from "../../templates/template-creator";

class FavoriteButton extends HTMLElement {
  constructor() {
    super();
    this._restaurantId = this.getAttribute("data-restaurant-id");
    this._restaurant = null;
    this._isLiked = false;
  }

  async _getRestaurantData() {
    try {
      const data = await RestaurantApi.getOneById(this._restaurantId);
      const {
        categories,
        customerReviews,
        menus,
        ...others
      } = data.restaurant;

      this._restaurant = others;
    } catch (error) {
      console.error(error);
    }
  }

  async _checkLikedState() {
    try {
      const restaurant = await FavoriteRestaurantIdb.getById(this._restaurantId);
      this._isLiked = Boolean(restaurant);

      if (this._isLiked) {
        this._renderLiked();
      } else {
        this._renderLike();
      }
    } catch (error) {
      console.error(error);
    }
  }

  connectedCallback() {
    this._getRestaurantData();
    this.render();
  }

  render() {
    this._checkLikedState();
  }

  _renderLiked() {
    this.innerHTML = createLikedButton();

    const likeButton = this.querySelector("#favoriteButton");
    likeButton.addEventListener("click", async () => {
      await FavoriteRestaurantIdb.deleteById(this._restaurantId);
      this.render();
    });
  }

  _renderLike() {
    this.innerHTML = createLikeButton();

    const likeButton = this.querySelector("#favoriteButton");
    likeButton.addEventListener("click", async () => {
      await FavoriteRestaurantIdb.add(this._restaurant);
      this.render();
    });
  }
}

customElements.define("favorite-button", FavoriteButton);
