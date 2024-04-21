/** This is an incomplete list of properties */
export interface Story<T> {
  name: string;
  created_at: string;
  id: number;
  uuid: string;
  content: T;
  slug: string;
  full_slug: string;
  tag_list: string[];
  parent_id: number;
  is_startpage?: boolean;
  published_at?: string | null;
}

export interface AnyBlok {
  component: string;
  _uid: string;
}
