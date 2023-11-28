import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import App from "./views/app";
import swRegister from "./utils/sw-register";

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector(".hamburger"),
  drawer: document.querySelector(".nav"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("load", async () => {
  app.renderPage();
  await swRegister();
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});
