import { Review } from '../../common/types/review-card.type';

import euroGamerLogo from '../../../assets/images/webp/reviewers/1.webp';
import pcGamerLogo from '../../../assets/images/webp/reviewers/2.webp';
import theGuardianLogo from '../../../assets/images/webp/reviewers/3.webp';
import destructoidLogo from '../../../assets/images/webp/reviewers/4.webp';
import wccftechLogo from '../../../assets/images/webp/reviewers/5.webp';
import cnetLogo from '../../../assets/images/webp/reviewers/6.webp';
import theSixthAxisLogo from '../../../assets/images/webp/reviewers/7.webp';

export const reviews: Review[] = [
  { img: euroGamerLogo, quote: 'Looks amazing.', author: 'Eurogamer' },
  {
    img: pcGamerLogo,
    quote: 'This definitely looks like S.T.A.L.K.E.R., but with better teeth.',
    author: 'PC Gamer'
  },
  {
    img: theGuardianLogo,
    quote:
      'The grim post-apocalyptic shooter is set to offer another brutal tour of the Chornobyl dead zone.',
    author: 'The Guardian'
  },
  { img: destructoidLogo, quote: 'Man, this atmosphere looks tense!', author: 'Destructoid' },
  { img: wccftechLogo, quote: 'The level of visuals shown was so great...', author: 'Wccftech' },
  {
    img: cnetLogo,
    quote: '...love the series dark themes, multiple endings and mysterious air.',
    author: 'CNET'
  },
  {
    img: theSixthAxisLogo,
    quote: 'Gorgeous, high-fidelity S.T.A.L.K.E.R. sequel.',
    author: 'TheSixthAxis'
  }
];
