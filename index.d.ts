import { Field } from "./src/types/field";
import { FieldValue } from "./src/types/props/values";
export { Story, AnyBlok } from "./src/types/helper";
export { Asset, Link, Table, TableRow } from "./src/types/props/values";

export interface SchemaDefinition {
  components: Component[];
}

export interface Component {
  name: string;
  is_nestable: boolean;
  is_root: boolean;
  id?: number;
  display_name?: string | null;
  schema: Record<string, Field>;
  created_at?: string | null;
  updated_at?: string | null;
  image?: unknown | null;
  real_name?: string | null;
  preview_field?: string | null;
  preview_tmpl?: string | null;
  preset_id?: number | null;
  color?: string | null;
  icon?: string | null;
  all_presets?: unknown[];
  component_group_uuid?: string | null;
  component_group_name?: string | null;
}

/** Prettify type and remove all values of type never */
type Prettify<T> = {
  [K in keyof T as T[K] extends never ? never : K]: T[K];
} & {};

type Infer<T extends Component> = { component: T["name"]; _uid: string } & {
  [K in keyof T["schema"]]: FieldValue<T["schema"][K]>;
};

export type InferProps<T extends Component> = Prettify<Infer<T>>;
