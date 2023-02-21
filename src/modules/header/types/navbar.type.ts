export interface NavbarProps {
  navLinks: NavbarLink[];
  onClick?: () => void;
  Component?: (navbarLink: NavbarLink, index: number) => JSX.Element;
  listStyles?: string;
  activeLinkStyles?: string;
}

export interface NavbarLink {
  path: string;
  title: string;
}
