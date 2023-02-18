import { EditionFeature, EditionListType } from '../modules/common/types/edition.type';
import { ICON_NAME } from '../modules/common/types/icon.type';

import bgPoster from '../assets/images/png/card-back-bg.png';
import sEditionBg from '../assets/images/webp/packshots-bg/digital-standart-bg.webp';
import dEditionBg from '../assets/images/webp/packshots-bg/digital-deluxe-bg.webp';
import uEditionBg from '../assets/images/webp/packshots-bg/digital-ultimate-bg.webp';

import dStandart1 from '../assets/images/png/standard.png';
import dStandart2 from '../assets/images/webp/packshots/standard-digital-packshot.webp';

import dDeluxe1 from '../assets/images/png/deluxe.png';
import dDeluxe2 from '../assets/images/webp/packshots/deluxe-digital-packshot.webp';

import dUltimate1 from '../assets/images/png/ultimate.png';
import dUltimate2 from '../assets/images/webp/packshots/ultimate-digita-packshot.webp';

import phStandart1 from '../assets/images/png/retail-s-items.png';
import phStandart2 from '../assets/images/webp/packshots/standard-physical-packshot.webp';

import phLimited1 from '../assets/images/png/retail-l-items.png';
import phLimited2 from '../assets/images/webp/packshots/limited-physical-packshot.webp';

import phCollectors1 from '../assets/images/png/retail-c-items.png';
import phCollectors2 from "../assets/images/webp/packshots/collector's-physical-packshot.webp";

import phUltimate1 from '../assets/images/png/retail-u-items.png';
import phUltimate2 from '../assets/images/webp/packshots/ultimate-physical-packshot.webp';

const commonDescription =
  'S.T.A.L.K.E.R. 2: Heart of Chornobyl is a sequel to the critically acclaimed survival-horror FPS series, set in an alternative version of the Chornobyl Exclusion Zone. Reveal a new chapter in the history of the Zone and delve into a nonlinear branching story in an open post-apocalyptic world. Fight for survival with various foes and hazardous radioactive environments, forging your own path through anomalies and opponents to the legendary Heart of Chornobyl.';

const digitalEditionFeatures: EditionFeature[] = [
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

const physicalEditionFeatures: EditionFeature[] = [
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

const editionList: EditionListType = {
  digital: [
    {
      version: 'standart edition',
      cost: { amount: 895, currency: '₴' },
      features: digitalEditionFeatures,
      bgPoster: [bgPoster, sEditionBg],
      poster: [dStandart1, dStandart2],
      featuresAccessLimit: 2,
      details: {
        title: 'Standard digital edition',
        description: [
          commonDescription,
          'The Standard Digital Edition provides access to the complete game, includes a set of preorder bonuses and exclusive content for the Steam platform: a dynamic theme, an animated avatar, and a frame to distinguish a true  S.T.A.L.K.E.R. among his peers.'
        ]
      }
    },
    {
      version: 'deluxe edition',
      cost: { amount: 1199, currency: '₴' },
      features: digitalEditionFeatures,
      bgPoster: [bgPoster, dEditionBg],
      poster: [dDeluxe1, dDeluxe2],
      featuresAccessLimit: 7,
      details: {
        title: 'Deluxe digital edition',
        description: [
          commonDescription,
          'The Digital Deluxe Edition provides access to the complete game, includes an exclusive side mission, set of preorder bonuses and exclusive content for the Steam platform, digital artbook, game soundtrack, character, and weapon skins for both singleplayer and multiplayer experience.'
        ]
      }
    },
    {
      version: 'ultimate edition',
      cost: { amount: 1599, currency: '₴' },
      features: digitalEditionFeatures,
      bgPoster: [bgPoster, uEditionBg],
      poster: [dUltimate1, dUltimate2],
      featuresAccessLimit: 0,
      details: {
        title: 'ultimate digital edition',
        description: [
          commonDescription,
          'The Digital Ultimate Edition includes all digital bonuses from the rest of the editions, even more character and weapon skins, and access to two upcoming story expansions along with all the additional downloadable content.'
        ]
      }
    }
  ],
  physical: [
    {
      version: 'standart edition',
      cost: { amount: 59.99, currency: '$' },
      features: physicalEditionFeatures,
      bgPoster: [bgPoster, sEditionBg],
      poster: [phStandart1, phStandart2],
      featuresAccessLimit: 5
    },
    {
      version: 'limited edition',
      cost: { amount: 79.99, currency: '$' },
      features: physicalEditionFeatures,
      bgPoster: [bgPoster, sEditionBg],
      poster: [phLimited1, phLimited2],
      featuresAccessLimit: 10
    },
    {
      version: "collector's edition",
      cost: { amount: 179.99, currency: '$' },
      features: physicalEditionFeatures,
      bgPoster: [bgPoster, dEditionBg],
      poster: [phCollectors1, phCollectors2],
      featuresAccessLimit: 12
    },
    {
      version: 'ultimate edition',
      cost: { amount: 339.99, currency: '$' },
      features: physicalEditionFeatures,
      bgPoster: [bgPoster, uEditionBg],
      poster: [phUltimate1, phUltimate2],
      featuresAccessLimit: 0
    }
  ]
};

export default editionList;
