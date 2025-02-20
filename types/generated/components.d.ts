import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBlockCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_ctas';
  info: {
    description: '';
    displayName: 'blockCta';
    icon: 'server';
  };
  attributes: {
    icon: Schema.Attribute.Media<'files' | 'images', true>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface BlocksCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cards';
  info: {
    description: '';
    displayName: 'card';
    icon: 'grid';
  };
  attributes: {
    buttonCta: Schema.Attribute.Component<'blocks.cta-button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    isTextFirst: Schema.Attribute.Boolean;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksCardCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_ctas';
  info: {
    description: '';
    displayName: 'cardCta';
    icon: 'expand';
  };
  attributes: {
    buttonCta: Schema.Attribute.Component<'blocks.cta-button', false>;
    description: Schema.Attribute.String;
    imageBg: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksCardOpportunity extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_opportunities';
  info: {
    displayName: 'CardOpportunity';
    icon: 'manyWays';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cta_buttons';
  info: {
    description: '';
    displayName: 'buttonCta';
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
    displayName: 'buttonDownload';
    icon: 'arrowDown';
  };
  attributes: {
    url: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['appstore', 'google_play']>;
  };
}

export interface BlocksFaqSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_section_items';
  info: {
    displayName: 'faqSectionItem';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface BlocksGridLadderStep extends Struct.ComponentSchema {
  collectionName: 'components_blocks_grid_ladder_steps';
  info: {
    description: '';
    displayName: 'gridLadderStep';
  };
  attributes: {
    buttonCta: Schema.Attribute.Component<'blocks.cta-button', false>;
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

export interface BlocksTag extends Struct.ComponentSchema {
  collectionName: 'components_blocks_tags';
  info: {
    displayName: 'tag';
    icon: 'bulletList';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsCardsRow extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards_rows';
  info: {
    description: '';
    displayName: 'cardsRow';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'blocks.card', true>;
    ctaBlock: Schema.Attribute.Component<'blocks.block-cta', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCtaGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_grids';
  info: {
    description: '';
    displayName: 'CtaGrid';
    icon: 'arrowUp';
  };
  attributes: {
    CardHuge: Schema.Attribute.Component<'blocks.card', true>;
    CardsRow: Schema.Attribute.Component<'sections.cards-row', false>;
    Hero: Schema.Attribute.Component<'sections.hero', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    displayName: 'faqSection';
    icon: 'layer';
  };
  attributes: {
    faqSectionItem: Schema.Attribute.Component<'blocks.faq-section-item', true>;
    sectionTitle: Schema.Attribute.String;
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
    buttonCta: Schema.Attribute.Component<'blocks.cta-button', false>;
    buttonDownload: Schema.Attribute.Component<'blocks.download-button', true>;
    cta: Schema.Attribute.String;
    imageBg: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_grids';
  info: {
    description: '';
    displayName: 'grid';
    icon: 'apps';
  };
  attributes: {
    card: Schema.Attribute.Component<'blocks.card', true>;
    cardCta: Schema.Attribute.Component<'blocks.card-cta', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsGridDisplaced extends Struct.ComponentSchema {
  collectionName: 'components_sections_grid_displaceds';
  info: {
    description: '';
    displayName: 'gridDisplaced';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'blocks.card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsGridEven extends Struct.ComponentSchema {
  collectionName: 'components_sections_grid_evens';
  info: {
    displayName: 'GridEven';
    icon: 'apps';
  };
  attributes: {
    Card: Schema.Attribute.Component<'blocks.card', true>;
    CardWide: Schema.Attribute.Component<'blocks.card', true>;
  };
}

export interface SectionsGridLadder extends Struct.ComponentSchema {
  collectionName: 'components_sections_grid_ladders';
  info: {
    description: '';
    displayName: 'gridLadder';
    icon: 'walk';
  };
  attributes: {
    steps: Schema.Attribute.Component<'blocks.grid-ladder-step', true>;
  };
}

export interface SectionsGridUneven extends Struct.ComponentSchema {
  collectionName: 'components_sections_grid_unevens';
  info: {
    displayName: 'GridUneven';
    icon: 'apps';
  };
  attributes: {
    Card: Schema.Attribute.Component<'blocks.card', true>;
    OpportunityCards: Schema.Attribute.Component<
      'blocks.card-opportunity',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHeader extends Struct.ComponentSchema {
  collectionName: 'components_sections_headers';
  info: {
    displayName: 'header';
    icon: 'alien';
  };
  attributes: {
    buttonCta: Schema.Attribute.Component<'blocks.cta-button', false>;
    description: Schema.Attribute.Text;
    tags: Schema.Attribute.Component<'blocks.tag', true>;
    title: Schema.Attribute.String;
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
    buttonCta: Schema.Attribute.Component<'blocks.cta-button', false>;
    buttonDownload: Schema.Attribute.Component<'blocks.download-button', true>;
    description: Schema.Attribute.Text;
    featuredImg: Schema.Attribute.Media<'images' | 'files'>;
    stats: Schema.Attribute.Component<'blocks.stat', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLearnArticle extends Struct.ComponentSchema {
  collectionName: 'components_sections_learn_articles';
  info: {
    displayName: 'LearnArticle';
    icon: 'code';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface SectionsOpportunities extends Struct.ComponentSchema {
  collectionName: 'components_sections_opportunities';
  info: {
    displayName: 'Opportunities';
    icon: 'manyToOne';
  };
  attributes: {
    OpportunityCards: Schema.Attribute.Component<
      'blocks.card-opportunity',
      true
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.block-cta': BlocksBlockCta;
      'blocks.card': BlocksCard;
      'blocks.card-cta': BlocksCardCta;
      'blocks.card-opportunity': BlocksCardOpportunity;
      'blocks.cta-button': BlocksCtaButton;
      'blocks.download-button': BlocksDownloadButton;
      'blocks.faq-section-item': BlocksFaqSectionItem;
      'blocks.grid-ladder-step': BlocksGridLadderStep;
      'blocks.stat': BlocksStat;
      'blocks.tag': BlocksTag;
      'sections.cards-row': SectionsCardsRow;
      'sections.cta-grid': SectionsCtaGrid;
      'sections.faq-section': SectionsFaqSection;
      'sections.footer': SectionsFooter;
      'sections.grid': SectionsGrid;
      'sections.grid-displaced': SectionsGridDisplaced;
      'sections.grid-even': SectionsGridEven;
      'sections.grid-ladder': SectionsGridLadder;
      'sections.grid-uneven': SectionsGridUneven;
      'sections.header': SectionsHeader;
      'sections.hero': SectionsHero;
      'sections.learn-article': SectionsLearnArticle;
      'sections.opportunities': SectionsOpportunities;
    }
  }
}
