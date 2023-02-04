import screenOne from '../../../assets/images/webp/screenshots/zone-1.webp';
import screenTwo from '../../../assets/images/webp/screenshots/zone-2.webp';
import screenThree from '../../../assets/images/webp/screenshots/zone-3.webp';
import screenFour from '../../../assets/images/webp/screenshots/zone-4.webp';

import videoOne from '../../../assets/videos/01.mp4';
import videoTwo from '../../../assets/videos/02.mp4';
import videoThree from '../../../assets/videos/03.mp4';
import videoFour from '../../../assets/videos/04.mp4';
import { CLIENT_ROUTER_KEYS } from '../../common/constants/app-keys.const';

export const previews: { image: string; video: string; path: string }[] = [
  { image: screenOne, video: videoOne, path: CLIENT_ROUTER_KEYS.GAME_THE_ZONE },
  { image: screenTwo, video: videoTwo, path: CLIENT_ROUTER_KEYS.GAME_THE_STORY },
  { image: screenThree, video: videoThree, path: CLIENT_ROUTER_KEYS.GAME_THE_DANGER },
  { image: screenFour, video: videoFour, path: CLIENT_ROUTER_KEYS.GAME_THE_ACTION }
];
