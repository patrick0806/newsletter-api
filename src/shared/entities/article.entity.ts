class Multimedum {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}

export class ArticleEntity {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  itemType: string;
  updatedDate: string;
  createdDate: string;
  publishedDate: string;
  materialTypeFacet: string;
  kicker: string;
  desFacet: string[];
  orgFacet: string[];
  perFacet: string[];
  geoFacet: string[];
  multimedia: Multimedum[];
  shortUrl: string;
}
