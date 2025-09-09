import type { Schema, Struct } from '@strapi/strapi';

export interface ArticlesComponentsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_articles_components_faq_items';
  info: {
    displayName: 'FAQItem';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'articles-components.faq-item': ArticlesComponentsFaqItem;
    }
  }
}
