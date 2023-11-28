import { resetTabIndexFromStart } from "../../helpers";
import "../components/detail/detail-section";

const Detail = {
  render() {
    return `
      <detail-section></detail-section>
    `;
  },

  afterRender() {
    resetTabIndexFromStart();
  },
};

export default Detail;
