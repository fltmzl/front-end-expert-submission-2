const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(event, drawer);
    });

    document.body.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle("nav-open");
  },

  _closeDrawer(event, drawer) {
    if (!drawer.contains(event.target)) {
      drawer.classList.remove("nav-open");
    }
  },
};

export default DrawerInitiator;
