export type Source =
  | InternalStoriesSource
  | InternalSource
  | ExternalSource
  | SelfSource;

export type InternalSource = {
  source: 'internal';
  datasource_slug: string;
  filter_content_type?: string | null;
};

export type ExternalSource = {
  source: 'external';
  external_datasource: string;
};

export type SelfSource = {
  options: ReadonlyArray<{ name: string; value: string; _uid?: string }>;
};

export type InternalStoriesSource = {
  source: 'internal_stories';
  folder_slug?: string | null;
};
