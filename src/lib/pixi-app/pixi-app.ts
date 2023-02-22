import gsap from 'gsap';
import {
  Application,
  Container,
  DisplayObject,
  filters,
  Graphics,
  ICanvas,
  Sprite,
  WRAP_MODES
} from 'pixi.js';

import type {
  DisplacementFilter,
  PixiAppOptions,
  SourceImages,
  AppSizes,
  MaskOptions
} from './pixi-app.type';

export class PixiApp {
  #app: Application<ICanvas> | undefined;
  #container: Container<DisplayObject>;
  #canvas: HTMLCanvasElement | undefined | null;
  #imageContainTextureEffect: string | undefined;
  #targetImageForEffect: string | undefined;
  #displacementSpriteFromTextureImage: Sprite | undefined;
  #displacementFilterFromSprite: DisplacementFilter | undefined;
  #mask: Graphics | undefined;
  #targetImageSprite: Sprite | undefined;
  #width: number;
  #height: number;

  demolitionEffect: gsap.core.Timeline;
  containerNode: HTMLElement | undefined;
  canvasClassName: string | undefined;

  constructor(options?: PixiAppOptions) {
    this.#container = new Container();
    this.#targetImageForEffect = options?.targetImageForEffect;
    this.#imageContainTextureEffect = options?.imageContainTextureForEffect;
    this.demolitionEffect = gsap.timeline({ paused: true });
    this.#width = options?.width ?? 0;
    this.#height = options?.height ?? 0;
  }

  init() {
    if (this.#app) {
      this.#container.destroy(true);
    }

    this.#app = new Application({ width: this.#width, height: this.#height });

    this.containerNode?.appendChild(this.#app.view as HTMLCanvasElement);
    this.#app.stage.addChild(this.#container);
    this.#canvas = this.containerNode?.querySelector('canvas');
    this.#addClassNameToCanvas();

    this.#createDisplacementSpriteFromTextureImage();
    this.#createDisplacementFilterFromSprite();
    this.#createSpriteFromTargetImage();

    this.setWrapMode(WRAP_MODES.REPEAT);

    this.#app.stage.addChild(this.#displacementSpriteFromTextureImage as Sprite);
    this.#addFilterToStage();
    this.#container.addChild(this.#targetImageSprite as Sprite);

    this.#createMask({
      x: this.#width,
      y: 0,
      width: this.#width,
      height: this.#height
    });
    this.#initDemolitionEffectAnimation();

    return this;
  }

  setContainerNode<H extends HTMLElement>(node: H) {
    this.containerNode = node;

    return this;
  }

  setImageContainTextureEffect(img: string) {
    this.#imageContainTextureEffect = img;

    return this;
  }

  setTargetImageForEffect(img: string) {
    this.#targetImageForEffect = img;

    return this;
  }

  setCanvasClassName(className: string) {
    this.canvasClassName = className;

    return this;
  }

  #addClassNameToCanvas() {
    if (this.canvasClassName) {
      this.#canvas?.classList.add(this.canvasClassName);
    }
  }

  setImages({ imageContainTextureForEffect, targetImageForEffect }: SourceImages) {
    this.#imageContainTextureEffect = imageContainTextureForEffect;
    this.#targetImageForEffect = targetImageForEffect;

    return this;
  }

  setAppSize({ width, height }: AppSizes) {
    if (typeof width === 'number') {
      this.#width = width;
    }
    if (typeof height === 'number') {
      this.#height = height;
    }

    return this;
  }

  #createDisplacementSpriteFromTextureImage() {
    this.#displacementSpriteFromTextureImage = Sprite.from(
      this.#imageContainTextureEffect as string
    );
    this.#displacementSpriteFromTextureImage.scale.set(0.6);
    this.#displacementSpriteFromTextureImage.anchor.set(0.5);
  }

  #createDisplacementFilterFromSprite() {
    this.#displacementFilterFromSprite = new filters.DisplacementFilter(
      this.#displacementSpriteFromTextureImage as Sprite
    );

    this.#displacementFilterFromSprite.scale.x = 0;
    this.#displacementFilterFromSprite.scale.y = 0;
  }

  #createSpriteFromTargetImage() {
    this.#targetImageSprite = Sprite.from(this.#targetImageForEffect as string);

    this.#targetImageSprite.width = this.#width;
    this.#targetImageSprite.height = this.#height;
    this.#targetImageSprite.alpha = 1;
  }

  setWrapMode(mode?: WRAP_MODES) {
    if (mode && this.#displacementSpriteFromTextureImage) {
      this.#displacementSpriteFromTextureImage.texture.baseTexture.wrapMode = mode;
    }

    return this;
  }

  #createMask({ x, y, width, height, fillColor }: MaskOptions) {
    this.#mask = new Graphics();

    this.#mask.beginFill(fillColor ?? 0x00ff00).drawRect(x, y, width, height);
  }

  #addFilterToStage() {
    this.#container.filters = [this.#displacementFilterFromSprite as DisplacementFilter];
  }

  #initDemolitionEffectAnimation() {
    const EASE_FUNC = 'expo.out';

    gsap.to(this.#displacementSpriteFromTextureImage as Sprite, { y: 0, duration: 4 });
    gsap.to((this.#displacementFilterFromSprite as DisplacementFilter).scale, {
      x: 1,
      y: 1,
      ease: EASE_FUNC,
      duration: 10
    });

    this.demolitionEffect.to((this.#displacementFilterFromSprite as DisplacementFilter).scale, {
      duration: 4,
      x: this.#width * -1,
      ease: EASE_FUNC
    });

    this.demolitionEffect.to(
      this.#canvas as HTMLCanvasElement,
      {
        autoAlpha: 0,
        ease: EASE_FUNC,
        duration: 1
      },
      '-=4'
    );
  }
}

export const pixiApp = new PixiApp();
