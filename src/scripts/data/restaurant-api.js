import CONFIG from "../globals/config";

class RestaurantApi {
  static async getAll() {
    const res = await fetch(`${CONFIG.BASE_URL_API}/list`);
    const data = await res.json();
    return data;
  }

  static async getOneById(id) {
    const res = await fetch(`${CONFIG.BASE_URL_API}/detail/${id}`);
    const data = await res.json();
    return data;
  }

  static async addReview({ id, name, review }) {
    const res = await fetch(`${CONFIG.BASE_URL_API}/review`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        review,
      }),
    });

    const data = await res.json();
    return data;
  }
}

export default RestaurantApi;
