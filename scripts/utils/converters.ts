import type { Item, Prisma } from "@prisma/client"
import type { ItemDetails } from "../types/ItemDetails"
import { removeId } from "./removeId"

export function getAuthorsInput(itemDetails: Omit<ItemDetails, "id">) {
  return itemDetails.authors.map<Prisma.AuthorCreateOrConnectWithoutItemsInput>(
    (author) => {
      return {
        where: { uuid: author.uuid },
        create: { ...removeId(author) },
      }
    }
  )
}

export function getCategoryInput(itemDetails: Omit<ItemDetails, "id">) {
  return itemDetails.categories.map<Prisma.CategoryCreateOrConnectWithoutItemsInput>(
    (category) => {
      return {
        where: { uuid: category.uuid },
        create: { ...removeId(category) },
      }
    }
  )
}

export function getFilesInput(itemDetails: Omit<ItemDetails, "id">) {
  return itemDetails.files.map<Prisma.FileCreateOrConnectWithoutItemsInput>(
    (file) => {
      return {
        where: { uuid: file.uuid },
        create: { ...removeId(file) },
      }
    }
  )
}

export function getFundingListInput(itemDetails: Omit<ItemDetails, "id">) {
  return itemDetails.funding_list.map<Prisma.FundingListCreateOrConnectWithoutItemsInput>(
    (funding) => ({
      where: { uuid: funding.uuid },
      create: { ...removeId(funding) },
    })
  )
}

export function getInputData(itemDetails: Omit<ItemDetails, "id">) {
  return {
    ...itemDetails,
    authors: {
      connectOrCreate: getAuthorsInput(itemDetails),
    },
    categories: {
      connectOrCreate: getCategoryInput(itemDetails),
    },
    files: {
      connectOrCreate: getFilesInput(itemDetails),
    },
    custom_fields: {
      create: [...itemDetails.custom_fields].map(removeId).map((e) => {
        if (Array.isArray(e.value)) return { ...e }
        return { ...e, value: [e.value] }
      }),
    },
    funding_list: {
      connectOrCreate: getFundingListInput(itemDetails),
    },
    created_date: new Date(itemDetails.created_date),
    modified_date: new Date(itemDetails.modified_date),
    license: {
      connectOrCreate: {
        where: {
          value: itemDetails.license.value,
        },
        create: {
          ...itemDetails.license,
        },
      },
    },
    embargo_options: {
      create: itemDetails.embargo_options,
    },
    published_date: new Date(itemDetails.published_date),
    timeline: {
      create: {
        ...itemDetails.timeline,
        posted: new Date(itemDetails.timeline.posted),
        firstOnline: new Date(itemDetails.timeline.firstOnline),
        publisherPublication: new Date(
          itemDetails.timeline.publisherPublication
        ),
      },
    },
    embargo_date: new Date(itemDetails.embargo_date),
  }
}
