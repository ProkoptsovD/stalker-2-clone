export interface NavbarProps {
  navLinks: NavbarLink[];
  onClick?: () => void;
  Component?: (navbarLink: NavbarLink, index: number) => JSX.Element;
}

export interface NavbarLink {
  path: string;
  title: string;
}
