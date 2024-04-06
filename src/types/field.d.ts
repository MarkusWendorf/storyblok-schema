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
  component_group_whitelist?: string[];
}

export type BloksField = BaseField & {
  type: "bloks";
  minimum?: number;
  maximum?: number;
  restrict_type?: string | null;
  restrict_components?: boolean;
  component_whitelist?: ReadonlyArray<string>;
};

export type TextField = BaseField & {
  type: "text";
  default_value?: string | null;
  rtl?: boolean;
  max_length?: number | null;
  /** Client Regex validation for the field */
  regex?: string | null;
};

export type TextAreaField = BaseField & {
  type: "textarea";
  default_value?: string | null;
  rtl?: boolean;
  max_length?: string | null;
  /** Client Regex validation for the field */
  regex?: string | null;
};

export type MarkdownField = BaseField & {
  type: "markdown";
  default_value?: string | null;
  rtl?: boolean | null;
  rich_markdown?: boolean | null;
  max_length?: string | null;
};

export type RichtextField = BaseField & {
  type: "richtext";
  default_value?: string | null;
  customize_toolbar?: boolean | null;
  toolbar?: ToolbarOption[];
  restrict_components?: boolean | null;
  component_whitelist?: string[];
  allow_target_blank?: boolean | null;
};

export type NumberField = BaseField & {
  type: "number";
  default_value?: number | null;
  min_value?: number | null;
  max_value?: number | null;
  decimals?: number | null;
};

export type DateTimeField = BaseField & {
  type: "datetime";
  /** Disables time selection from date picker */
  disable_time?: boolean | null;
};

export type BooleanField = BaseField & {
  type: "boolean";
  default_value?: boolean | null;
};

export type OptionsField = BaseField & {
  type: "options";
  min_options?: string | null;
  max_options?: string | null;
  max_length?: string | null;
  filter_content_type?: string | null | string[];
  use_uuid?: boolean | null;
} & Source;

export type OptionField = BaseField & {
  type: "option";
  default_value?: string | null;
  exclude_empty_option?: boolean | null;
  filter_content_type?: string | null | string[];
  use_uuid?: boolean | null;
} & Source;

export type AssetField = BaseField & {
  type: "asset";
  filetypes?: FileType[];
  asset_folder_id?: number;
};

export type MultiAssetField = BaseField & {
  type: "multiasset";
  filetypes?: FileType[];
  asset_folder_id?: number;
};

export type LinkField = BaseField & {
  type: "multilink";
  restrict_components?: boolean | null;
  allow_custom_attributes?: boolean | null;
  allow_target_blank?: boolean | null;
  asset_link_type?: boolean | null;
  component_whitelist?: string[];
  email_link_type?: boolean | null;
  restrict_content_types?: boolean | null;
  show_anchor?: boolean | null;
  link_scope?: string | null;
};

export type TableField = BaseField & {
  type: "table";
};

export type CustomField = BaseField & {
  type: "custom";
  /** Name of the custom field export type plugin */
  field_type: string;
  /** Comma separated */
  required_fields?: string | null;
  options?: Array<{ name: string; value: string }> | null;
};

export type TabField = BaseField & {
  type: "tab";
  /** Field names that belong to this tab */
  keys: string[];
};

export type GroupField = BaseField & {
  type: "section";
  /** Field names that belong to this section */
  keys: string[];
};
