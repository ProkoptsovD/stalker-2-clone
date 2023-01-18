import { Graphics, Filter, ISpriteMaskTarget, Matrix, Point } from 'pixi.js';

export type SourceImages = {
  imageContainTextureForEffect: string;
  targetImageForEffect: string;
};

export type PixiAppOptions = SourceImages & AppSizes;

export type AppSizes = {
  width?: number;
  height?: number;
};

export type MaskOptions = Partial<Graphics> & {
  fillColor?: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

// * PIXI doesn't provide import of this type
// so we need to create the one
export interface DisplacementFilter extends Filter {
  maskSprite: ISpriteMaskTarget;
  maskMatrix: Matrix;
  scale: Point;
}
