import { Field } from '../field';

/** Values based on the fields defined by the component schema */
export type FieldValue<T extends Field> = {
  text: string;
  textarea: string;
  markdown: string;
  richtext: unknown;
  number: number;
  datetime: string;
  boolean: boolean;
  options: string[];
  option: string;
  asset: Asset;
  multiasset: Asset[];
  multilink: Link;
  table: Table;
  custom: never;
  section: never;
  tab: never;
  /**
   * Field "bloks" types cannot be inferred (could be anything).
   * The user can extend the inferred type to include the types for nested bloks.
   */
  bloks: never;
}[T['type']];

export interface Asset {
  fieldtype: 'asset';
  id: number;
  alt?: string;
  name?: string;
  title?: string;
  source?: string;
  filename?: string;
  copyright?: string;
}

type CustomLinkAttributes = Record<string, string | undefined>;

export interface Link extends CustomLinkAttributes {
  fieldtype: 'multilink';
  id: string;
  linktype: 'story' | 'url' | 'email' | 'asset';
  cached_url: string;
  target?: '_blank';
}

export interface Table {
  fieldtype: 'table';
  thead: Array<{ component: '_table_head'; _uid: string; value: string }>;
  tbody: TableRow[];
}

interface TableRow {
  component: '_table_row';
  _uid: string;
  body: Array<{ component: '_table_col'; _uid: string; value: string }>;
}