export interface ItemSummary {
  id?: number | null
  uuid?: string
  title?: string
  doi?: string
  handle?: null
  url?: string
  published_date?: Date
  thumb?: null | string
  defined_type?: number
  defined_type_name?: String
  group_id?: number
  url_private_api?: string
  url_public_api: string
  url_private_html?: string
  url_public_html?: string
  timeline?: Timeline
  resource_title?: null | string
  resource_doi?: null | string
  embargo_date?: Date
  embargo_type?: string
  embargo_title?: string
  embargo_reason?: string
}

export interface Timeline {
  posted: Date
  firstOnline: Date
  revision?: String
}
