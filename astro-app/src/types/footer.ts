import type { IconButton } from "./common/icon-button";
import type { ImageType } from "./common/image";

export interface FooterType {
  data: {
    id: number;
    attributes: {
      logo: ImageType;
      navItems: NavItemType[],
      copyright: string;
      socialMedias: IconButton[],
    }
  }
}

export interface NavItemType {
  id: number;
  label: string;
  classList: string | undefined;
  href: string | undefined;
  children: NavItemType[] | undefined;
};