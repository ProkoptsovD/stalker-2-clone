import { ICON_NAME } from '../types/icon.type';
import type { SocialLink } from '../types/social-links.type';

export const socialLinks: SocialLink[] = [
  {
    mainIcon: ICON_NAME.DISCORD,
    alternativeIcon: ICON_NAME.DISCORD_ALT,
    url: 'https://discord.com/invite/stalker'
  },
  {
    mainIcon: ICON_NAME.FACEBOOK,
    alternativeIcon: ICON_NAME.FACEBOOK_ALT,
    url: 'https://www.facebook.com/officialstalker'
  },
  {
    mainIcon: ICON_NAME.TWITTER,
    alternativeIcon: ICON_NAME.TWITTER_ALT,
    url: 'https://twitter.com/stalker_thegame'
  },
  {
    mainIcon: ICON_NAME.INSTAGRAM,
    alternativeIcon: ICON_NAME.INSTAGRAM_ALT,
    url: 'https://www.instagram.com/stalker2_thegame/'
  },
  {
    mainIcon: ICON_NAME.YOUTUBE,
    alternativeIcon: ICON_NAME.YOUTUBE_ALT,
    url: 'https://www.youtube.com/channel/UCk96JambgW5zsOBquR63iEQ'
  },
  {
    mainIcon: ICON_NAME.REDDIT,
    alternativeIcon: ICON_NAME.REDDIT_ALT,
    url: 'https://www.reddit.com/r/stalker/'
  }
];
