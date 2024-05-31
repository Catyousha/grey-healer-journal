import type { ButtonType } from "./common/button";
import type { ImageType } from "./common/image";

export interface HomeType {
  data: {
    id: number;
    attributes: {
      hero: HeroType[];
      aboutUs: AboutUsType;
      pillars: PillarType[];
      partnerConfig: PartnerConfigType;
      articleConfig: ArticleConfigType;
      contactUs: ContactUs;
    };
  };
}

export interface HeroType {
  id: number;
  title: string;
  description: string;
  image: ImageType;
  button: ButtonType;
}


export interface AboutUsType {
  id: number;
  title: string;
  description: string;
  button: ButtonType;
}

export interface PillarType {
  id: number;
  title: string;
  description: string;
  icon: ImageType;
}

export interface PartnerConfigType {
  amount: number;
  title: string;
  buttonClassList: string;
}

export interface ArticleConfigType {
  newsAmount: number;
  pressReleaseAmount: number;
  annualReportAmount: number;
  newsButton: ButtonType;
  pressReleaseButton: ButtonType;
  annualReportButton: ButtonType;
}

export interface ContactUs {
  id: number;
  title: string;
  description: string;
  button: ButtonType;
}