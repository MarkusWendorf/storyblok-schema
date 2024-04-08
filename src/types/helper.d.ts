/** This is an incomplete list of properties */
export interface Story<T> {
  name: string;
  created_at: string;
  published_at?: string;
  id: number;
  uuid: string;
  content: T;
  slug: string;
  full_slug: string;
  tag_list: string[];
  is_startpage: boolean;
  parent_id: number;
}

export interface AnyBlok {
  component: string;
  _uid: string;
}