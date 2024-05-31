import type { ImageType } from "../common/image";
import type { AuthorType } from "./author";

export interface NewsListType {
  data: NewsType[];
}

export interface NewsType {
  id: number;
  attributes: {
    briefDescription: string;
    title: string;
    image: ImageType;
    author: AuthorType;
    createdAt: string;
  };
}