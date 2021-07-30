import Slider from "../Components/Slider";

import Scroll from "./scroll";

import { constants, instances } from "./store";

constants.isDevice = "ontouchstart" in window;
constants.isDevice && document.body.classList.add("is-device");

document.documentElement.style.setProperty(
  "--vh",
  `${window.innerHeight * 0.01}px`
);

instances.scroll = new Scroll();
instances.scroll.init();

instances.slider = new Slider();
instances.slider.init();
