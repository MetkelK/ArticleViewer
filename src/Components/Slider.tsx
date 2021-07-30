import React, { useState } from "react";
import gsap from "gsap";
import Scroll from "../utils/scroll";
import { constants, instances } from "../utils/store";

const Slider = () => {
  let dom = {} as any;
  dom.el = document.querySelector(".slider");
  dom.container = document.querySelector(".container");
  dom.item = document.querySelector(".item");
  dom.imgages = document.querySelector(".img-wrap");
  dom.heading = document.querySelector(".item-heading-wrap");
  dom.progressWrap = document.querySelector(".slider-progress-wrap");
  dom.progress = document.querySelector(".slider-progress");

  const [open, setOpen] = useState<boolean | false>(false);
  const [scrollEnabled, enableScroll] = useState<boolean | false>(false);
  const [progress, setProgress] = useState<number | 0>(0);

  const setCache = () => {
    let items = [];
    let cache = [...dom.item].forEach((el: any) => {
      const bounds = el.getBoundingClientRect();
      items.push({
        img: el.querySelector("img"),
        bounds,
        x: 0,
      });
    });
  };

  const render = () => {
    if (constants.isDevice) return;
  };

  return (
    <div className="slider">
      <div className="container" data-scroll>
        <div className="item">
          <div className="img-wrap">
            <img
              src="https://images.unsplash.com/photo-1472835560847-37d024ebacdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&ar=0.8"
              alt=""
            />
          </div>

          <div className="item-container">
            <div className="item-heading-wrap">
              <div className="item-heading">
                <h3>Test</h3>
              </div>
            </div>
          </div>

          <div className="item-button-wrap">
            <div className="item-button">read</div>
          </div>
        </div>

        <div className="item">
          <div className="img-wrap">
            <img
              src="https://images.unsplash.com/photo-1472835560847-37d024ebacdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&ar=0.8"
              alt=""
            />
          </div>

          <div className="item-container">
            <div className="item-heading-wrap">
              <div className="item-heading">
                <h3>Test</h3>
              </div>
            </div>
          </div>

          <div className="item-button-wrap">
            <div className="item-button">read</div>
          </div>
        </div>
      </div>
      <div className="slider-progress-wrap">
        <div className="slider-progress"></div>
      </div>
    </div>
  );
};

export default Slider;
