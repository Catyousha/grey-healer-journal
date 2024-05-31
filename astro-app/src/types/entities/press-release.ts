import type { ImageType } from "../common/image";
import type { AuthorType } from "./author";

export interface PressReleaseListType {
  data: PressReleaseType[];
}

export interface PressReleaseType {
  id: number;
  attributes: {
    briefDescription: string;
    title: string;
    image: ImageType;
    author: AuthorType;
    createdAt: string;
  };
}
