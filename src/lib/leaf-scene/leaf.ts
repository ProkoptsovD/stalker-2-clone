import type {
  Rotation,
  LeafConfig,
  LeafPositionCoordinates,
  Axis,
  Styles
} from './leaf-scene.types';

export class Leaf {
  x: number;
  y: number;
  z: number;
  rotation: Rotation;
  bgImage?: string;
  xSpeedVariation: number;
  ySpeed: number;
  element: HTMLDivElement;

  constructor({ x, y, z, rotation, bgImage, className, xSpeedVariation, ySpeed }: LeafConfig) {
    this.x = x ?? 0;
    this.y = y ?? 0;
    this.z = z ?? 0;

    this.rotation = { x: 0, y: 0, z: 0, speed: 1, axis: 'X', value: 0, ...rotation };
    this.bgImage = bgImage;
    this.xSpeedVariation = xSpeedVariation ?? 1;
    this.ySpeed = ySpeed ?? 1;
    this.element = document.createElement('div');

    this.element.style.backgroundImage = `url('${this.bgImage}')`;

    if (className) {
      this.addClass(className);
    }
  }

  addClass(className: string) {
    this.element.classList.add(className);
  }

  updateCoordinates(coordinates: LeafPositionCoordinates): Leaf {
    const { x, y, z } = coordinates;

    if (x) this.x = x;
    if (y) this.y = y;
    if (z) this.z = z;

    return this;
  }

  updateRotation(rotationProps: Partial<Rotation>): Leaf {
    this.rotation = { ...this.rotation, ...rotationProps };

    return this;
  }

  updateAxis(axis: Axis): Leaf {
    this.rotation.axis = axis;
    return this;
  }

  updateVariationSpeed(speed: number): Leaf {
    this.xSpeedVariation = speed;
    return this;
  }

  updateYSpeed(speed: number): Leaf {
    this.ySpeed = speed;
    return this;
  }

  applyStyles<S extends string | Record<string, string>>(prop: Styles<S>, value?: string): this {
    if (typeof prop === 'string' && value) {
      this.element.style.setProperty(prop, value);

      return this;
    }

    for (const key in prop) {
      this.element.style.setProperty(key, prop[key as keyof typeof prop] as string);
    }
    return this;
  }

  getRotationAxis(): Axis {
    return this.rotation.axis;
  }
}
