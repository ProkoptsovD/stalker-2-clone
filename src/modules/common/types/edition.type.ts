import { ICON_NAME } from './icon.type';

export type Cost = {
  amount: number;
  currency: string;
};

export type EditionFeature = {
  icon: ICON_NAME;
  feature: string;
  details?: EditionFeatureDetails[];
};

export type EditionFeatureDetails = {
  text: string;
  image?: string;
};

export type Edition = {
  version: string;
  features: EditionFeature[];
  cost: Cost;
  poster: string;
  bgPoster: string;
  featuresAccessLimit: number;
};

export type EditionListType = {
  digital: Edition[];
  physical: Edition[];
};
