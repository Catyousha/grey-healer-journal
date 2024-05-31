import type { ImageType } from "../common/image";
import type { AuthorType } from "./author";

export interface AnnualReportListType {
  data: AnnualReportType[];
}

export interface AnnualReportType {
  id: number;
  attributes: {
    briefDescription: string;
    title: string;
    image: ImageType;
    author: AuthorType;
    createdAt: string;
  };
}
