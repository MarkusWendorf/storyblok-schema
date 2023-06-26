import { Field } from '../field';
import { ISbRichtext } from '../richtext';
import { SelfSource } from '../source';

/** Values based on the fields defined by the component schema */
export type FieldValue<T extends Field> = Required<
  T,
  {
    text: string;
    textarea: string;
    markdown: string;
    richtext: ISbRichtext;
    number: number;
    datetime: string;
    boolean: boolean;
    options: IsNever<InferOptionValue<T>> extends true
      ? never
      : Array<InferOptionValue<T>>;
    option: InferOptionValue<T>;
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
  }[T['type']]
>;

type IsNever<T> = [T] extends [never] ? true : false;

type InferOptionValue<T extends Field> = T extends SelfSource
  ? T['options'][number]['value']
  : never; // Only SelfSource can be inferred, other sources have to be defined by the user

type Required<T extends Field, Value> = IsNever<Value> extends true
  ? never
  : T['required'] extends true
  ? Value
  : Value | undefined;

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
