/* eslint-disable no-plusplus */
/* eslint-disable arrow-body-style */
const createRestaurantItemSkeleton = (numberOfSkeleton) => {
  let skeleton = "";

  for (let i = 0; i < numberOfSkeleton; i++) {
    skeleton += `
      <article class="skeleton restaurant__item__skeleton">
        <div class="restaurant__item__skeleton-left">
        </div>

        <div class="restaurant__item__skeleton-right">
        </div>
      </article>
    `;
  }

  return skeleton;
};

const createLoadingBrandIcon = () => {
  return `
    <div class="loading">
      <div class="loading__container">
        <svg class="icon-rotate" width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="47" cy="49" r="41" fill="#ECC92C"/>
          <path d="M50.8776 48.7077L5.62856 94L0.0943283 88.4618L45.3395 43.1695L42.5743 40.4004C40.3752 38.1943 39.1402 35.2063 39.1402 32.0912C39.1402 28.9762 40.3752 25.9881 42.5743 23.782L66.3288 0L71.8631 5.53817L48.1086 29.3202C47.7444 29.6839 47.4555 30.1159 47.2584 30.5914C47.0613 31.0668 46.9599 31.5765 46.9599 32.0912C46.9599 32.6059 47.0613 33.1156 47.2584 33.5911C47.4555 34.0665 47.7444 34.4985 48.1086 34.8623L50.8776 37.6313L77.4051 11.0763L82.9394 16.6184L56.408 43.1695L59.1731 45.9386C59.9076 46.6728 60.9036 47.0853 61.9422 47.0853C62.9807 47.0853 63.9768 46.6728 64.7113 45.9386L88.4775 22.1566L94 27.6987L70.2455 51.4768C68.0425 53.6759 65.0569 54.9111 61.9442 54.9111C58.8314 54.9111 55.8458 53.6759 53.6428 51.4768L50.8776 48.7077ZM24.0212 53.4312L34.553 42.8875C32.6841 40.0783 31.5823 36.8292 31.3569 33.4626C31.1316 30.096 31.7905 26.7291 33.2684 23.6958L13.0271 2.3265C11.9601 1.25859 10.6002 0.531236 9.11964 0.236483C7.63906 -0.0582701 6.10431 0.09283 4.70964 0.67066C3.31497 1.24849 2.12306 2.22708 1.28477 3.48257C0.44647 4.73806 -0.000533508 6.21403 0.00032866 7.72367C-0.0279391 14.9565 1.76769 22.0798 5.22123 28.435C10.0249 37.773 16.3823 46.2256 24.0212 53.4312ZM61.9422 62.7528C58.1052 62.7617 54.3517 61.6332 51.1557 59.5098L44.4974 66.1682C51.1459 69.1633 58.431 70.471 65.7061 69.9752L88.219 93.9021L93.9217 88.5363L68.3263 61.5974C66.2777 62.3362 64.1198 62.7267 61.9422 62.7528Z" fill="black"/>
        </svg>

        <div class="loading__text">Loading....</div>
      </div>
    </div>
  `;
};

const createErrorFallback = () => {
  return `
    <div class="error-fallback">
      <p>Something went wrong, cannot load data. check your connection</p>
    </div>
  `;
};

export { createRestaurantItemSkeleton, createLoadingBrandIcon, createErrorFallback };
