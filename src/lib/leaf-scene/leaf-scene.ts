/*
 * most of code is borrowed from https://codepen.io/smhigley/pen/gwYPvR
 * calculations and logic as well
 * @Sarah Higley thank you for the codepen
 */

import { leafDefaultConfig } from './config';
import { Leaf } from './leaf';
import type { Axis, LeafSceneConfig, ContainerNode } from './leaf-scene.types';

export class LeafScene<C extends HTMLElement | string, L extends typeof Leaf> {
  viewport!: HTMLElement;
  world: HTMLElement;
  leaves: Leaf[];
  sceneWidth: number;
  sceneHeight: number;
  timer: number;
  options: LeafSceneConfig;
  leafClassName: string;
  worldClassName: string;
  resizeListener: () => void;

  constructor(public container: ContainerNode<C>, private LeafCreator: L, config: LeafSceneConfig) {
    const {
      sceneWidth,
      sceneHeight,
      takeContainerWidthAndHeight,
      worldContainerElementTag,
      worldClassName
    } = config;

    this.viewport =
      typeof container !== 'string'
        ? container
        : (document.querySelector(container) as HTMLElement);
    console.log(this.viewport);

    this.world = document.createElement(worldContainerElementTag as keyof HTMLElementTagNameMap);
    this.leaves = [];
    this.leafClassName = '';
    this.worldClassName = worldClassName;
    this.resizeListener = this.onWindowResize.bind(this);
    /*
     *  "takeContainerWidthAndHeight" flag allows
     * to inherit container's node width and height
     * or we may set our custom width and height via config
     */
    this.sceneWidth = takeContainerWidthAndHeight ? this.viewport?.offsetWidth : sceneWidth;
    this.sceneHeight = takeContainerWidthAndHeight ? this.viewport?.offsetHeight : sceneHeight;

    this.options = config;

    // animation helper
    this.timer = 0;
  }

  resetLeaf(leaf: Leaf) {
    // place leaf towards the top left
    const coordinates = {
      x: this.sceneWidth * 2 - Math.random() * this.sceneWidth * 1.75,
      y: -10,
      z: Math.random() * 200
    };
    leaf.updateCoordinates(coordinates);

    if (leaf.x > this.sceneWidth) {
      const x = this.sceneWidth + 10;
      const y = (Math.random() * this.sceneHeight) / 2;

      leaf.updateCoordinates({ x, y });
    }
    // at the start, the leaf can be anywhere
    if (this.timer === 0) {
      const y = Math.random() * this.sceneHeight;

      leaf.updateCoordinates({ y });
    }

    // Choose axis of rotation.
    // If axis is not X, chose a random static x-rotation for greater variability
    leaf.updateRotation({ speed: Math.random() * 10 });

    const randomAxisIndex = Math.random();
    let axis: Axis;

    if (randomAxisIndex > 0.5) {
      axis = 'X';
    } else if (randomAxisIndex > 0.25) {
      axis = 'Y';
      leaf.updateRotation({ x: Math.random() * 180 + 90 });
    } else {
      axis = 'Z';
      leaf
        .updateRotation({ x: Math.random() * 360 - 180 })
        // looks weird if the rotation is too fast around this axis
        .updateRotation({ speed: Math.random() * 3 });
    }

    // update axix and set random speed
    leaf
      .updateAxis(axis)
      .updateVariationSpeed(Math.random() * 0.8 - 0.4)
      .updateYSpeed(Math.random() + 1.5);

    return leaf;
  }

  updateLeaf(leaf: Leaf) {
    if (this.options?.wind) {
      const leafWindSpeed = this.calculateWindSpeed(this.timer - this.options.wind.start, leaf.y);
      const xSpeed = leafWindSpeed + leaf.xSpeedVariation;

      leaf.x -= xSpeed;
      leaf.y += leaf.ySpeed;
      leaf.rotation.value += leaf.rotation.speed;
    }

    const translateX = `translateX(${leaf.x}px)`;
    const translateY = `translateY(${leaf.y}px)`;
    const translateZ = `translateZ(${leaf.z}px)`;
    const rotate = `rotate${leaf.rotation.axis}(${leaf.rotation.value}deg)`;

    const transformValues = [translateX, translateY, translateZ, rotate];

    if (leaf.getRotationAxis() !== 'X') {
      transformValues.push(`rotateX(${leaf.rotation.x}deg)`);
    }
    const transform = transformValues.join(' ');

    leaf.applyStyles({
      webkitTransform: transform,
      MozTransform: transform,
      oTransform: transform,
      transform: transform
    });

    // reset if out of view
    if (leaf.x < -10 || leaf.y > this.sceneHeight + 10) {
      this.resetLeaf(leaf);
    }
  }

  calculateWindSpeed(windSpeedOnTop: number, leafYAxisPosition: number): number {
    if (!this.options.wind) return 0;

    // should go from full wind speed at the top, to 1/2 speed at the bottom, using leaf Y
    const sineCurve =
      ((this.options.wind.magnitude / 2) * (this.sceneHeight - (2 * leafYAxisPosition) / 3)) /
      this.sceneHeight;
    const windSpeed =
      sineCurve *
        Math.sin(
          ((2 * Math.PI) / this.options.wind.duration) * windSpeedOnTop + (3 * Math.PI) / 2
        ) +
      sineCurve;

    return windSpeed;
  }

  updateWind() {
    // wind follows a sine curve: asin(b*time + c) + a
    // where a = wind magnitude as a function of leaf position, b = wind.duration, c = offset
    // wind duration should be related to wind magnitude, e.g. higher windspeed means longer gust duration
    if (this.options.wind) {
      if (this.timer === 0 || this.timer > this.options.wind.start + this.options.wind.duration) {
        this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
        this.options.wind.duration = this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
        this.options.wind.start = this.timer;
      }
    }
  }

  setWorldClassName(className: string) {
    this.world.classList.add(className);

    return this;
  }

  setLeafClassName(className: string) {
    this.leafClassName = className;

    return this;
  }

  onWindowResize() {
    this.sceneWidth = this.viewport.offsetWidth;
    this.sceneHeight = this.viewport.offsetHeight;
  }

  unsubscribe() {
    window.removeEventListener('resize', this.resizeListener);
  }

  init() {
    const { numLeaves = 10 } = this.options;

    for (let i = 0; i < numLeaves; i += 1) {
      const leaf = new this.LeafCreator(this.options.leafConfig ?? leafDefaultConfig);

      if (this.leafClassName) leaf.element.classList.add(this.leafClassName);

      this.resetLeaf(leaf);
      this.leaves.push(leaf);
      this.world.appendChild(leaf.element);
    }

    if (this.worldClassName) this.setWorldClassName(this.worldClassName);
    this.viewport?.appendChild(this.world);

    // set perspective
    ['webkitPerspective', 'MozPerspective', 'oPerspective', 'perspective'].forEach((key) => {
      this.world.style.setProperty(key, this.options.perspective);
    });

    // reset window height/width on resize
    window.addEventListener('resize', this.resizeListener);

    return this;
  }

  render() {
    this.updateWind();

    this.leaves.forEach((leaf) => this.updateLeaf(leaf));
    this.timer += 1;

    requestAnimationFrame(this.render.bind(this));

    return this;
  }
}
