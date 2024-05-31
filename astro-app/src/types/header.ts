import type { ImageType } from "./common/image";

export interface HeaderType {
  data: {
    attributes: {
      navItems: NavItemType[];
      logo: ImageType;
    };
  };
};

export interface NavItemType {
  id: number;
  label: string;
  classList: string | undefined;
  href: string | undefined;
  children: NavItemType[] | undefined;
};