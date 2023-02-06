import { ICON_NAME } from './icon.type';

export type Requirement = {
  displayText: string;
  value: string | string[] | ICON_NAME;
  joinWith?: string;
  isIcon?: boolean;
};

export type BaseRequirement = {
  requirement: SYSTEM_REQUIREMENTS_NAMES;
};

export type Requirements = BaseRequirement & {
  data: Requirement[];
};

export type SystemRequirements = Requirements[];

export enum SYSTEM_REQUIREMENTS_NAMES {
  MINIMUM = 'minimum',
  RECOMMENDED = 'recommended',
  GAMEPLAY = 'gameplay',
  LOCALIZATION = 'localization'
}
