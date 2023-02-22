export type WindOptions = {
  magnitude: number;
  maxSpeed: number;
  duration: number;
  start: number;
  speed: number;
};

export type LeafSceneConfig = {
  numLeaves: number;
  sceneWidth: number;
  sceneHeight: number;
  wind: WindOptions;
  takeContainerWidthAndHeight: boolean;
  worldContainerElementTag: keyof HTMLElementTagNameMap;
  worldClassName: string;
  perspective: string;
  leafConfig?: LeafConfig;
};

export type ContainerNode<C extends HTMLElement | string> = C extends string ? string : HTMLElement;
export type Styles<S extends string | Record<string, string>> = S extends string
  ? string
  : Record<string, string>;

export type Coordinates = {
  x: number;
  y: number;
  z: number;
};
export type Axis = 'X' | 'Y' | 'Z';
export type Rotation = Coordinates & {
  speed: number;
  axis: Axis;
  value: number;
};
export type MovementProperties = {
  rotation: Rotation;
  xSpeedVariation: number;
  ySpeed: number;
};
export type LeafPositionCoordinates = Partial<Coordinates>;

export type LeafUIView = {
  bgImage?: string;
  className?: string;
};
export type LeafConfig = Partial<Coordinates & MovementProperties & LeafUIView>;
