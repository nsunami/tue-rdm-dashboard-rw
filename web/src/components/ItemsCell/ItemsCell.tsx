import { useState } from 'react'

import { Check, ListFilter, X } from 'lucide-react'
import type { ItemsQuery, ItemsQueryVariables } from 'types/graphql'

import { useParams } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Item from 'src/components/Item'
import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from 'src/components/ui/dropdown-menu'

import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { DropdownMenu } from '../ui/dropdown-menu'

export const QUERY: TypedDocumentNode<ItemsQuery, ItemsQueryVariables> = gql`
  query ItemsQuery {
    items: Items {
      id
      uuid
      title
      doi
      description
      url_public_html
      published_date
      license {
        name
      }
    }
  }
`

export const Loading = () => (
  <Card className="*:animate-pulse">
    <CardHeader>
      <CardTitle>
        <div className="h-8 w-3/4 rounded-md bg-slate-200"></div>
      </CardTitle>
      <CardDescription className="flex flex-row place-content-between *:h-4 *:bg-slate-200">
        <div className="w-1/3" />
        <div className="w-1/4" />
      </CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col gap-3 *:h-4 *:bg-slate-200">
      <div className="w-full"></div>
      <div className="w-full"></div>
      <div className="w-3/4"></div>
    </CardContent>
  </Card>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ items }: CellSuccessProps<ItemsQuery>) => {
  const availableLicenses = Array.from(
    new Set(items.flatMap((i) => i.license.name))
  ).sort()
  const { license } = useParams()

  const [filters, setFilters] = useState(
    availableLicenses.filter((l) => l === license)
  )

  return (
    <>
      <div className="mx-2 flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <ListFilter />
              <span className="ml-2">License</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="*:cursor-pointer">
            <DropdownMenuLabel onClick={() => setFilters([])}>
              Clear
            </DropdownMenuLabel>
            {availableLicenses.map((license) => (
              <DropdownMenuLabel
                key={license}
                onClick={() =>
                  setFilters((currentValues) =>
                    currentValues.includes(license)
                      ? currentValues.filter((e) => e !== license)
                      : [...currentValues, license]
                  )
                }
              >
                <span>
                  {filters.includes(license) && <Check className="inline" />}
                  {license}
                </span>
              </DropdownMenuLabel>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div>
          {filters.map((filter) => (
            <Badge
              key={filter}
              onClick={() =>
                setFilters((currentFilters) =>
                  currentFilters.filter((f) => f !== filter)
                )
              }
              className="cursor-pointer"
            >
              <X className="inline" size={10} /> {filter}
            </Badge>
          ))}
        </div>
      </div>
      <div className="md:m-2 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
        {items.map((item) => {
          return filters.length === 0 ? (
            <Item key={item.id} item={item} />
          ) : (
            filters.includes(item.license.name) && (
              <Item key={item.id} item={item} />
            )
          )
        })}
      </div>
    </>
  )
}
