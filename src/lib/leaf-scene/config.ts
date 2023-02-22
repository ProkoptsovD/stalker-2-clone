import type { LeafConfig, LeafSceneConfig } from './leaf-scene.types';
import leafImage from '../../assets/icons/leaf.svg';

export const leafDefaultConfig: LeafConfig = {
  x: 0,
  y: 0,
  z: 0,
  xSpeedVariation: 0,
  ySpeed: 0,
  rotation: {
    axis: 'X',
    value: 0,
    speed: 0,
    x: 0,
    y: 0,
    z: 0
  },
  bgImage: leafImage
};

export const leafSceneDefaultConfig: LeafSceneConfig = {
  numLeaves: 10,
  wind: {
    magnitude: 1.2,
    maxSpeed: 12,
    duration: 300,
    start: 0,
    speed: 0
  },
  takeContainerWidthAndHeight: true,
  worldContainerElementTag: 'div',
  sceneWidth: window.innerWidth,
  sceneHeight: window.innerHeight,
  worldClassName: 'leaf-scene',
  perspective: '400px',
  leafConfig: leafDefaultConfig
};
