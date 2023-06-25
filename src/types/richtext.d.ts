export type ToolbarOption =
  | 'italic'
  | 'list'
  | 'olist'
  | 'blok'
  | 'underline'
  | 'strike'
  | 'inlinecode'
  | 'code'
  | 'paragraph'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h5'
  | 'h4'
  | 'h6'
  | 'quote'
  | 'hrule'
  | 'link'
  | 'image'
  | 'paste'
  | 'bold';

/** Taken from storyblok SDK */
export interface ISbRichtext {
  content?: ISbRichtext[];
  marks?: ISbRichtext[];
  attrs?: any;
  text?: string;
  type: string;
}
