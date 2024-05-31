export interface ImageType {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: any;
      caption: any;
      width: number;
      height: number;
      formats: {
        thumbnail: ImageItemType;
        large: ImageItemType;
        medium: ImageItemType;
        small: ImageItemType;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: any;
      provider: string;
      provider_metadata: any;
      createdAt: string;
      updatedAt: string;
    };
  };
}


export interface ImageItemType {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}