import type { ImageType } from "../common/image";

export interface PartnerListType {
  data: PartnerType[];
}

export interface PartnerType {
  id: number;
  attributes: {
    name: string;
    site: string;
    logo: ImageType;
  };
}