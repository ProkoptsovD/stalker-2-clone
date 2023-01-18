import { CLIENT_ROUTER_KEYS } from '../../common/constants/app-keys.const';
import type { NavbarLink } from '../types/navbar.type';

export const navLinkList: NavbarLink[] = [
  { title: 'H.O.M.E', path: CLIENT_ROUTER_KEYS.HOME },
  { title: 'D.I.G.I.T.A.L', path: CLIENT_ROUTER_KEYS.DIGITAL },
  { title: 'P.H.Y.S.I.C.A.L', path: CLIENT_ROUTER_KEYS.PHYSICAL }
];
