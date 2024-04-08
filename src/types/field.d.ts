import { FileType } from "./filetype";
import { ToolbarOption } from "./richtext";
import { Source } from "./source";

export type Field =
  | BloksField
  | TextField
  | TextAreaField
  | MarkdownField
  | RichtextField
  | NumberField
  | DateTimeField
  | BooleanField
  | OptionsField
  | OptionField
  | AssetField
  | MultiAssetField
  | LinkField
  | TableField
  | CustomField
  | GroupField
  | TabField;

interface BaseField {
  type: string;
  /** Position of field in component */
  pos?: number;
  required?: boolean;
  description?: string | null;
  display_name?: string | null;
  /** Show description as a tooltip */
  tooltip?: boolean;
  translatable?: boolean;
  component_group_whitelist?: ReadonlyArray<string>;
}

export interface BloksField extends BaseField {
  type: "bloks";
  minimum?: number;
  maximum?: number;
  restrict_type?: string | null;
  restrict_components?: boolean;
  component_whitelist?: ReadonlyArray<string>;
}

export interface TextField extends BaseField {
  type: "text";
  default_value?: string | null;
  rtl?: boolean;
  max_length?: number | null;
  /** Client Regex validation for the field */
  regex?: string | null;
}

export interface TextAreaField extends BaseField {
  type: "textarea";
  default_value?: string | null;
  rtl?: boolean;
  max_length?: string | null;
  /** Client Regex validation for the field */
  regex?: string | null;
}

export interface MarkdownField extends BaseField {
  type: "markdown";
  default_value?: string | null;
  rtl?: boolean | null;
  rich_markdown?: boolean | null;
  max_length?: string | null;
}

export interface RichtextField extends BaseField {
  type: "richtext";
  default_value?: string | null;
  customize_toolbar?: boolean | null;
  toolbar?: ToolbarOption[];
  restrict_components?: boolean | null;
  component_whitelist?: ReadonlyArray<string>;
  allow_target_blank?: boolean | null;
}

export interface NumberField extends BaseField {
  type: "number";
  default_value?: number | null;
  min_value?: number | null;
  max_value?: number | null;
  decimals?: number | null;
}

export interface DateTimeField extends BaseField {
  type: "datetime";
  /** Disables time selection from date picker */
  disable_time?: boolean | null;
}

export interface BooleanField extends BaseField {
  type: "boolean";
  default_value?: boolean | null;
}

export type OptionsField = BaseField & {
  type: "options";
  min_options?: string | null;
  max_options?: string | null;
  max_length?: string | null;
  filter_content_type?: string | null | ReadonlyArray<string>;
  use_uuid?: boolean | null;
} & Source;

export type OptionField = BaseField & {
  type: "option";
  default_value?: string | null;
  exclude_empty_option?: boolean | null;
  filter_content_type?: string | null | ReadonlyArray<string>;
  use_uuid?: boolean | null;
} & Source;

export interface AssetField extends BaseField {
  type: "asset";
  filetypes?: FileType[];
  asset_folder_id?: number;
}

export interface MultiAssetField extends BaseField {
  type: "multiasset";
  filetypes?: FileType[];
  asset_folder_id?: number;
}

export interface LinkField extends BaseField {
  type: "multilink";
  restrict_components?: boolean | null;
  allow_custom_attributes?: boolean | null;
  allow_target_blank?: boolean | null;
  asset_link_type?: boolean | null;
  component_whitelist?: ReadonlyArray<string>;
  email_link_type?: boolean | null;
  restrict_content_types?: boolean | null;
  show_anchor?: boolean | null;
  link_scope?: string | null;
}

export interface TableField extends BaseField {
  type: "table";
}

export interface CustomField extends BaseField {
  type: "custom";
  /** Name of the custom field export type plugin */
  field_type: string;
  /** Comma separated */
  required_fields?: string | null;
  options?: Array<{ name: string; value: string }> | null;
}

export interface TabField extends BaseField {
  type: "tab";
  /** Field names that belong to this tab */
  keys: ReadonlyArray<string>;
}

export interface GroupField extends BaseField {
  type: "section";
  /** Field names that belong to this section */
  keys: ReadonlyArray<string>;
}
