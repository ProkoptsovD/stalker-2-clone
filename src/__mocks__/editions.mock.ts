import { EditionFeature, EditionListType } from '../modules/common/types/edition.type';
import { ICON_NAME } from '../modules/common/types/icon.type';

import bgPoster from '../assets/images/png/card-back-bg.png';
import dStandart from '../assets/images/png/standard.png';
import dDeluxe from '../assets/images/png/deluxe.png';
import dUltimate from '../assets/images/png/ultimate.png';

import phStandart from '../assets/images/png/retail-s-items.png';
import phLimited from '../assets/images/png/retail-l-items.png';
import phCollectors from '../assets/images/png/retail-c-items.png';
import phUltimate from '../assets/images/png/retail-u-items.png';

export const DigitalEditionFeatures: EditionFeature[] = [
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

export const PhysicalEditionFeatures: EditionFeature[] = [
  {
    feature: 'Standard + PO bonus',
    icon: ICON_NAME.PLUS,
    details: [
      { text: 'Extended campfire content' },
      { text: 'Exclusive weapon skin' },
      { text: 'Exclusive armor skin' },
      { text: "'Early bird' multiplayer badge" }
    ]
  },
  {
    feature: 'Steel book',
    icon: ICON_NAME.PLUS
  },
  {
    feature: 'Letter from developers',
    icon: ICON_NAME.EMAIL_02
  },
  {
    feature: 'Souvenir zone permit',
    icon: ICON_NAME.BALGE
  },
  {
    feature: 'Sticker pack',
    icon: ICON_NAME.EXPERIENCE
  },
  {
    feature: 'Zone map',
    icon: ICON_NAME.EXPERIENCE
  },
  {
    feature: 'Poster',
    icon: ICON_NAME.PICTURE
  },
  {
    feature: 'Faction patches',
    icon: ICON_NAME.EXPERIENCE
  },
  {
    feature: 'Military token',
    icon: ICON_NAME.EXPERIENCE
  },
  {
    feature: 'Keychain (Multi-tool) with fire starter',
    icon: ICON_NAME.EXPERIENCE
  },
  {
    feature: 'Art book',
    icon: ICON_NAME.EXPERIENCE
  },
  {
    feature: 'Stalker figurine',
    icon: ICON_NAME.SINGLE_USER
  },
  {
    feature: 'Artefact container lamp',
    icon: ICON_NAME.BULB
  },
  {
    feature: 'S.T.A.L.K.E.R backpack',
    icon: ICON_NAME.BULLET
  }
];

export const EditionList: EditionListType = {
  digital: [
    {
      version: 'standart edition',
      cost: { amount: 895, currency: '₴' },
      features: DigitalEditionFeatures,
      bgPoster,
      poster: dStandart,
      featuresAccessLimit: 2
    },
    {
      version: 'deluxe edition',
      cost: { amount: 1199, currency: '₴' },
      features: DigitalEditionFeatures,
      bgPoster,
      poster: dDeluxe,
      featuresAccessLimit: 7
    },
    {
      version: 'ultimate edition',
      cost: { amount: 1599, currency: '₴' },
      features: DigitalEditionFeatures,
      bgPoster,
      poster: dUltimate,
      featuresAccessLimit: 0
    }
  ],
  physical: [
    {
      version: 'standart edition',
      cost: { amount: 59.99, currency: '$' },
      features: PhysicalEditionFeatures,
      bgPoster,
      poster: phStandart,
      featuresAccessLimit: 9
    },
    {
      version: 'limited edition',
      cost: { amount: 79.99, currency: '$' },
      features: PhysicalEditionFeatures,
      bgPoster,
      poster: phLimited,
      featuresAccessLimit: 4
    },
    {
      version: "collectors's edition",
      cost: { amount: 179.99, currency: '$' },
      features: PhysicalEditionFeatures,
      bgPoster,
      poster: phCollectors,
      featuresAccessLimit: 2
    },
    {
      version: 'ultimate edition',
      cost: { amount: 339.99, currency: '$' },
      features: PhysicalEditionFeatures,
      bgPoster,
      poster: phUltimate,
      featuresAccessLimit: 0
    }
  ]
};
