export interface ItemDetails {
  id: null
  files: File[]
  custom_fields: CustomField[]
  authors: Author[]
  figshare_url: string
  description: string
  funding: string
  funding_list: FundingList[]
  version: number
  status: string
  size: bigint
  created_date: Date
  modified_date: Date
  is_public: boolean
  is_confidential: boolean
  is_metadata_record: boolean
  confidential_reason: string
  metadata_reason: string
  license: License
  tags: string[]
  categories: Category[]
  references: any[]
  has_linked_file: boolean
  citation: string
  is_embargoed: boolean
  embargo_date: string
  embargo_type: string
  embargo_title: string
  embargo_reason: string
  embargo_options: any[]
  uuid: string
  title: string
  doi: string
  handle: string
  url: string
  published_date: Date
  thumb: string
  defined_type: number
  defined_type_name: string
  group_id: number
  url_private_api: string
  url_public_api: string
  url_private_html: string
  url_public_html: string
  timeline: Timeline
  resource_title: string
  resource_doi: string
  agreed_to_deposit_agreement: boolean
  agreed_to_publish: boolean
}

export interface Author {
  id: number | null
  uuid: string
  full_name: string
  is_active: boolean
  url_name: null | string
  orcid_id: string
}

export interface Category {
  id: number
  uuid: string
  title: string
  parent_id: number | null
  parent_uuid: null | string
  path: string
  source_id: null
  taxonomy_id: null
}

export interface CustomField {
  name: string
  value: any[] | string
}

export interface File {
  id: null
  uuid: string
  name: string
  size: bigint
  is_link_only: boolean
  is_incomplete: boolean
  download_url: string
  supplied_md5: string
  computed_md5: string
}

export interface FundingList {
  id: number
  uuid: string
  title: string
  grant_code: string
  funder_name: string
  is_user_defined: boolean
  url: string
}

export interface License {
  value: number
  name: string
  url: string
}

export interface Timeline {
  posted: Date
  revision: string
  submission: string
  firstOnline: Date
  publisherPublication: string
}
