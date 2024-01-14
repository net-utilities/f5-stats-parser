type LTMObject = {
  id: string,
  name: string,
  type: string
} & {
  [key: string]: string | number,
}

interface TableConfig {
  defaultColumns: string[];
  columnTranslations?: {[key: string]: string}
}

export type Section = 'about'|'commands'|'host';

export type { LTMObject, TableConfig }