import type { Schema, Attribute } from '@strapi/strapi';

export interface CardAboutUsCard extends Schema.Component {
  collectionName: 'components_card_about_us_cards';
  info: {
    displayName: 'About Us';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'common.button'>;
  };
}

export interface CardContactUs extends Schema.Component {
  collectionName: 'components_card_contact_uses';
  info: {
    displayName: 'Contact Us';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'common.button'>;
  };
}

export interface CardPillarCard extends Schema.Component {
  collectionName: 'components_card_pillar_cards';
  info: {
    displayName: 'Pillar';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface CommonButton extends Schema.Component {
  collectionName: 'components_hero_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    classList: Attribute.String;
    href: Attribute.String;
  };
}

export interface CommonIconButton extends Schema.Component {
  collectionName: 'components_common_icon_buttons';
  info: {
    displayName: 'Icon Button';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    classList: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface ConfigHomepageArticle extends Schema.Component {
  collectionName: 'components_config_homepage_articles';
  info: {
    displayName: 'Homepage Article';
    description: '';
  };
  attributes: {
    newsAmount: Attribute.Integer;
    pressReleaseAmount: Attribute.Integer;
    annualReportAmount: Attribute.Integer;
    newsButton: Attribute.Component<'common.button'>;
    pressReleaseButton: Attribute.Component<'common.button'>;
    annualReportButton: Attribute.Component<'common.button'>;
  };
}

export interface ConfigHomepagePartner extends Schema.Component {
  collectionName: 'components_config_homepage_partners';
  info: {
    displayName: 'Homepage Partner';
    description: '';
  };
  attributes: {
    amount: Attribute.Integer;
    title: Attribute.String;
    buttonClassList: Attribute.String;
  };
}

export interface HeroJumbotron extends Schema.Component {
  collectionName: 'components_hero_jumbotrons';
  info: {
    displayName: 'Jumbotron';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'common.button'>;
  };
}

export interface NavigationNavItemChildren extends Schema.Component {
  collectionName: 'components_navigation_nav_item_children_s';
  info: {
    displayName: 'Nav Item (Children)';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    classList: Attribute.String;
    href: Attribute.String;
  };
}

export interface NavigationNavItem extends Schema.Component {
  collectionName: 'components_navigation_nav_items';
  info: {
    displayName: 'Nav Item';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    classList: Attribute.String;
    href: Attribute.String;
    children: Attribute.Component<'navigation.nav-item-children', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card.about-us-card': CardAboutUsCard;
      'card.contact-us': CardContactUs;
      'card.pillar-card': CardPillarCard;
      'common.button': CommonButton;
      'common.icon-button': CommonIconButton;
      'config.homepage-article': ConfigHomepageArticle;
      'config.homepage-partner': ConfigHomepagePartner;
      'hero.jumbotron': HeroJumbotron;
      'navigation.nav-item-children': NavigationNavItemChildren;
      'navigation.nav-item': NavigationNavItem;
    }
  }
}
