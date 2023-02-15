import { ICON_NAME } from '../modules/common/types/icon.type';
import {
  SystemRequirementsType,
  SYSTEM_REQUIREMENTS_NAMES
} from '../modules/common/types/system-requirements.type';

const systemRequirements: SystemRequirementsType = [
  {
    requirement: SYSTEM_REQUIREMENTS_NAMES.MINIMUM,
    data: [
      { displayText: 'OS Version', value: ['Windows 10', 'Windows 11'], joinWith: ' / ' },
      {
        displayText: 'Processor',
        value: ['AMD Ryzen 5 1600X', 'Intel Core i5-7600K'],
        joinWith: ' / '
      },
      { displayText: 'Memory', value: '8 GB' },
      { displayText: 'Graphics', value: ['AMD Radeon RX 580 8GB', 'NVIDIA GeForce GTX 1060 6GB'] },
      { displayText: 'Disc space', value: '150 GB SSD' }
    ]
  },
  {
    requirement: SYSTEM_REQUIREMENTS_NAMES.RECOMMENDED,
    data: [
      { displayText: 'OS Version', value: ['Windows 10', 'Windows 11'], joinWith: ' / ' },
      {
        displayText: 'Processor',
        value: ['AMD Ryzen 7 3700X', 'Intel Core i7-9700K'],
        joinWith: ' / '
      },
      { displayText: 'Memory', value: '16 GB' },
      {
        displayText: 'Graphics',
        value: [
          'AMD Radeon RX 5700 XT 8GB',
          'NVIDIA GeForce RTX 2070 SUPER 8GB',
          'NVIDIA GeForce GTX 1080 Ti 11GB'
        ]
      },
      { displayText: 'Disc space', value: '150 GB SSD' }
    ]
  },
  {
    requirement: SYSTEM_REQUIREMENTS_NAMES.GAMEPLAY,
    data: [
      { displayText: 'Singleplayer', value: ICON_NAME.SINGLE_USER },
      {
        displayText: 'Full Controller Support',
        value: ICON_NAME.CONTROLLER
      },
      {
        displayText: 'Multiplayer (coming soon after the release, as a free update)',
        value: ICON_NAME.MULTIPLAYER
      },
      {
        displayText: 'Rating',
        value: ICON_NAME.PEGI_LOGO
      }
    ]
  },
  {
    requirement: SYSTEM_REQUIREMENTS_NAMES.LOCALIZATION,
    data: [
      { displayText: 'Voice & Subtitles', value: ['English', 'Ukrainian'] },
      {
        displayText: 'Subtitles only',
        value: [
          'German',
          'French',
          'Spanish',
          'Italian',
          'Polish',
          'Czech',
          'Turkish',
          'Serbian',
          'Brazilian Portuguese',
          'LATAM Spanish',
          'Russian',
          'Arabic Language',
          'Chinese Simplified',
          'Chinese Traditional',
          'Japanese',
          'Korean'
        ]
      }
    ]
  }
];

export default systemRequirements;
