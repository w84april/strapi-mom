import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBlockCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_ctas';
  info: {
    displayName: 'block_cta';
    icon: 'server';
  };
  attributes: {
    icon: Schema.Attribute.Media<'files' | 'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cards';
  info: {
    displayName: 'card';
    icon: 'grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    is_text_first: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface BlocksCardCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_ctas';
  info: {
    displayName: 'card_cta';
    icon: 'expand';
  };
  attributes: {
    button_cta: Schema.Attribute.Component<'blocks.cta-button', false>;
    description: Schema.Attribute.String;
    image_bg: Schema.Attribute.Media<'files' | 'images'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cta_buttons';
  info: {
    description: '';
    displayName: 'button_cta';
    icon: 'arrowUp';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface BlocksDownloadButton extends Struct.ComponentSchema {
  collectionName: 'components_blocks_download_buttons';
  info: {
    description: '';
    displayName: 'button_download';
    icon: 'arrowDown';
  };
  attributes: {
    variant: Schema.Attribute.Enumeration<['appstore', 'google_play']>;
  };
}

export interface BlocksGridLadderStep extends Struct.ComponentSchema {
  collectionName: 'components_blocks_grid_ladder_steps';
  info: {
    displayName: 'grid_ladder_step';
  };
  attributes: {
    button_cta: Schema.Attribute.Component<'blocks.cta-button', false>;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'files' | 'images'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksStat extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stats';
  info: {
    displayName: 'stat';
    icon: 'chartCircle';
  };
  attributes: {
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SectionsCardsRow extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards_rows';
  info: {
    description: '';
    displayName: 'cards_row';
    icon: 'apps';
  };
  attributes: {
    block_cta: Schema.Attribute.Component<'blocks.block-cta', false>;
    cards: Schema.Attribute.Component<'blocks.card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFooter extends Struct.ComponentSchema {
  collectionName: 'components_sections_footers';
  info: {
    description: '';
    displayName: 'footer';
    icon: 'underline';
  };
  attributes: {
    button_cta: Schema.Attribute.Component<'blocks.cta-button', false>;
    button_download: Schema.Attribute.Component<'blocks.download-button', true>;
    cta: Schema.Attribute.String;
    image_bg: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_grids';
  info: {
    displayName: 'grid';
    icon: 'apps';
  };
  attributes: {
    card: Schema.Attribute.Component<'blocks.card', true>;
    card_cta: Schema.Attribute.Component<'blocks.card-cta', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsGridDisplaced extends Struct.ComponentSchema {
  collectionName: 'components_sections_grid_displaceds';
  info: {
    displayName: 'grid_displaced';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'blocks.card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsGridLadder extends Struct.ComponentSchema {
  collectionName: 'components_sections_grid_ladders';
  info: {
    displayName: 'grid_ladder';
    icon: 'walk';
  };
  attributes: {
    steps: Schema.Attribute.Component<'blocks.grid-ladder-step', true>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'picture';
  };
  attributes: {
    button_cta: Schema.Attribute.Component<'blocks.cta-button', false>;
    button_download: Schema.Attribute.Component<'blocks.download-button', true>;
    description: Schema.Attribute.Text;
    featured_img: Schema.Attribute.Media<'images' | 'files'>;
    stats: Schema.Attribute.Component<'blocks.stat', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.block-cta': BlocksBlockCta;
      'blocks.card': BlocksCard;
      'blocks.card-cta': BlocksCardCta;
      'blocks.cta-button': BlocksCtaButton;
      'blocks.download-button': BlocksDownloadButton;
      'blocks.grid-ladder-step': BlocksGridLadderStep;
      'blocks.stat': BlocksStat;
      'sections.cards-row': SectionsCardsRow;
      'sections.footer': SectionsFooter;
      'sections.grid': SectionsGrid;
      'sections.grid-displaced': SectionsGridDisplaced;
      'sections.grid-ladder': SectionsGridLadder;
      'sections.hero': SectionsHero;
    }
  }
}
