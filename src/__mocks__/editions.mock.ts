import { Edition, EditionFeature } from '../modules/common/types/edition.type';
import { ICON_NAME } from '../modules/common/types/icon.type';
import bgPoster from '../assets/images/png/card-back-bg.png';
import standart from '../assets/images/png/standard.png';

export const EditionsFeatures: EditionFeature[] = [
  {
    feature: 'Preorder bonus',
    icon: ICON_NAME.PLUS,
    details: [
      { text: 'Extended campfire content' },
      { text: 'Exclusive weapon skin' },
      { text: 'Exclusive armor skin' },
      { text: "'Early bird' multiplayer badge" }
    ]
  },
  {
    feature: 'Steam exclusive content',
    icon: ICON_NAME.STEAM,
    details: [{ text: 'Dynamic Theme' }, { text: 'Animated Avatar' }, { text: 'Avatar Frame' }]
  },
  {
    feature: 'Special extra quest',
    icon: ICON_NAME.EXCLAMATION,
    details: [{ text: 'A side quest with a unique storyline that is separate from the main quest' }]
  },
  {
    feature: 'Digital artbook',
    icon: ICON_NAME.PICTURE
  },
  {
    feature: 'Official soundtrack',
    icon: ICON_NAME.MUSIC
  },
  {
    feature: '1 costume, 3 weapon skins',
    icon: ICON_NAME.SINGLE_USER,
    details: [{ text: 'For Single-player Campaign' }]
  },
  {
    feature: '2 costume, 3 weapon skins',
    icon: ICON_NAME.MULTI_USERS,
    details: [{ text: 'For Multiplayer Experience' }]
  },
  {
    feature: '2 story expansions',
    icon: ICON_NAME.PUZZLE,
    details: [
      { text: 'An additional large-scale expansion that continues or expands the main story' }
    ]
  },
  {
    feature: 'Season pass',
    icon: ICON_NAME.TICKET,
    details: [
      {
        text: 'Season Pass owners will be eligible to obtain all the post-release downloadable content in addition to the 2 Story Expansions'
      }
    ]
  }
];

export const EditionList: Edition[] = [
  {
    version: 'standart edition',
    cost: { amount: 895, currency: '₴' },
    features: EditionsFeatures,
    bgPoster,
    poster: standart,
    featuresAccessLimit: 2
  },
  {
    version: 'standart edition',
    cost: { amount: 1199, currency: '₴' },
    features: EditionsFeatures,
    bgPoster,
    poster: '../assets/images/png/standart.png',
    featuresAccessLimit: 7
  },
  {
    version: 'standart edition',
    cost: { amount: 1599, currency: '₴' },
    features: EditionsFeatures,
    bgPoster,
    poster: '../assets/images/png/standart.png',
    featuresAccessLimit: 0
  }
];
