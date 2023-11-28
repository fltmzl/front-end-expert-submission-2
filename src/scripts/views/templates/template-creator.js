/* eslint-disable arrow-body-style */
import CONFIG from "../../globals/config";
import { limitText } from "../../helpers";

const createRestaurantItemComponent = (restaurant) => {
  return `
    <article class="restaurant-item">
      <div class="restaurant-item__thumbnail">
        <img class="restaurant-item__img" src="${CONFIG.BASE_MEDIUM_IMAGE_URL}/${restaurant.pictureId}" alt="Foto Restoran ${restaurant.name}" />

        <div class="restaurant-item__rating">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="restaurant-item__rating-icon">
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="restaurant-item__rating-text">${restaurant.rating}</span>
        </div>

        <div class="restaurant-item__city">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="restaurant-item__city-icon">
            <path
              fill-rule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            />
          </svg>
          <span>${restaurant.city}</span>
        </div>
      </div>

      <div class="restaurant-item__body">
        <h3 class="restaurant-item__name">${restaurant.name}</h3>
        <p class="restaurant-item__desc">
          ${limitText(restaurant.description, 500)}
        </p>
        <a href="/#/restaurant/${restaurant.id}" class="restaurant-item__cta">Detail</a>
      </div>
    </article>
  `;
};

const createListComponent = (text) => {
  return `<li>${text}</li>`;
};

const createCustomerReviewCard = (review) => {
  return `
    <div class="review">
      <img class="review__icon" src="/icons/quote-yellow.svg" alt="quote icon" />

      <p class="review__text">"${review.review}"</p>

      <div class="review__user">
        <span class="review__name">${review.name}</span>
        <span class="review__date">${review.date}</span>
      </div>
    </div>
  `;
};

const createLikedButton = () => {
  return `
    <button id="favoriteButton" class="favorite__liked" aria-label="remove from favorite">
      <img class="favorite__icon" src="/icons/favorite-filled.svg" alt="" />
    </button>
  `;
};

const createLikeButton = () => {
  return `
    <button id="favoriteButton" class="favorite__like" aria-label="add to favorite">
      <img class="favorite__icon" src="/icons/favorite-outlined.svg" alt="" />
    </button>
  `;
};

export {
  createRestaurantItemComponent,
  createListComponent,
  createCustomerReviewCard,
  createLikedButton,
  createLikeButton,
};
